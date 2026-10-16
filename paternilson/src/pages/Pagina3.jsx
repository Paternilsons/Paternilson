import React, { useMemo, useRef, useState } from "react";
import "./Pagina3.css";

const CORES = {
  verde: "#34483D",
  bege: "#E9E2D5",
  verdeClaro: "#9EAF98",
  terracota: "#C78368",
  branco: "#FFFFFF",
};

const NOMES_MESES = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const DIAS_SEMANA = ["D", "S", "T", "Q", "Q", "S", "S"];

function formatarData(data) {
  return data.toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default function Pagina3() {
  const [calendarioAberto, setCalendarioAberto] = useState(false);
  const [modalImagemAberto, setModalImagemAberto] = useState(false);
  const [arquivoSelecionado, setArquivoSelecionado] = useState(null);
  const [previewImagem, setPreviewImagem] = useState("");
  const [fotos, setFotos] = useState([]);
  const [mesVisivel, setMesVisivel] = useState(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 1)
  );
  const [diaSelecionado, setDiaSelecionado] = useState(new Date());
  const [notificacoesAtivas, setNotificacoesAtivas] = useState(null);
  const inputImagemRef = useRef(null);

  const ano = mesVisivel.getFullYear();
  const mes = mesVisivel.getMonth();

  // Eventos demonstrativos. Substitua por dados do banco quando integrar o backend.
  const eventos = useMemo(() => {
    const diasNoMes = new Date(ano, mes + 1, 0).getDate();
    return [
      { dia: Math.min(4, diasNoMes), tipo: "exame", titulo: "Dica da semana", horario: "Hidratação é essencial!" },
      { dia: Math.min(11, diasNoMes), tipo: "consulta", titulo: "Consulta pré-natal", horario: "10:00" },
      { dia: Math.min(17, diasNoMes), tipo: "exame", titulo: "Exame de ultrassom", horario: "15:00" },
      { dia: Math.min(22, diasNoMes), tipo: "lembrete", titulo: "Ideia de agrado", horario: "Prepare uma surpresa" },
      { dia: Math.min(28, diasNoMes), tipo: "consulta", titulo: "Momento em família", horario: "Dia todo" },
    ];
  }, [ano, mes]);

  const diasDoCalendario = useMemo(() => {
    const primeiroDia = new Date(ano, mes, 1).getDay();
    const diasNoMes = new Date(ano, mes + 1, 0).getDate();
    const diasNoMesAnterior = new Date(ano, mes, 0).getDate();
    const dias = [];

    for (let i = primeiroDia - 1; i >= 0; i--) {
      dias.push({
        numero: diasNoMesAnterior - i,
        data: new Date(ano, mes - 1, diasNoMesAnterior - i),
        outroMes: true,
      });
    }

    for (let dia = 1; dia <= diasNoMes; dia++) {
      dias.push({
        numero: dia,
        data: new Date(ano, mes, dia),
        outroMes: false,
      });
    }

    while (dias.length < 42) {
      const proximoNumero = dias.length - primeiroDia - diasNoMes + 1;
      dias.push({
        numero: proximoNumero,
        data: new Date(ano, mes + 1, proximoNumero),
        outroMes: true,
      });
    }

    return dias;
  }, [ano, mes]);

  const eventosDoDia = eventos.filter((evento) => {
    return (
      evento.dia === diaSelecionado.getDate() &&
      diaSelecionado.getMonth() === mes &&
      diaSelecionado.getFullYear() === ano
    );
  });

  function mudarMes(direcao) {
    setMesVisivel(new Date(ano, mes + direcao, 1));
    setDiaSelecionado(new Date(ano, mes + direcao, 1));
  }

  function abrirSeletorImagem() {
    inputImagemRef.current?.click();
  }

  function selecionarImagem(event) {
    const arquivo = event.target.files?.[0];
    if (!arquivo) return;

    const formatosPermitidos = ["image/jpeg", "image/png", "image/heic", "image/heif", "image/webp"];
    if (!formatosPermitidos.includes(arquivo.type) && !/\.(jpe?g|png|heic|heif|webp)$/i.test(arquivo.name)) {
      window.alert("Selecione uma imagem JPG, PNG, HEIC ou WEBP.");
      event.target.value = "";
      return;
    }

    if (arquivo.size > 10 * 1024 * 1024) {
      window.alert("A imagem deve ter no máximo 10 MB.");
      event.target.value = "";
      return;
    }

    setArquivoSelecionado(arquivo);
    setPreviewImagem(URL.createObjectURL(arquivo));
  }

  function adicionarFoto() {
    if (!arquivoSelecionado || !previewImagem) {
      abrirSeletorImagem();
      return;
    }

    setFotos((atuais) => [
      {
        id: `${Date.now()}-${Math.random()}`,
        nome: arquivoSelecionado.name.replace(/\.[^/.]+$/, "") || "Nosso momento",
        data: formatarData(new Date()),
        url: previewImagem,
      },
      ...atuais,
    ]);

    setArquivoSelecionado(null);
    setPreviewImagem("");
    setModalImagemAberto(false);
    if (inputImagemRef.current) inputImagemRef.current.value = "";
  }

  function fecharModalImagem() {
    if (previewImagem) URL.revokeObjectURL(previewImagem);
    setArquivoSelecionado(null);
    setPreviewImagem("");
    setModalImagemAberto(false);
    if (inputImagemRef.current) inputImagemRef.current.value = "";
  }

  function conectarPagina2() {
    // PONTO DE CONEXÃO COM A PÁGINA 2:
    // Se o projeto usa React Router, substitua por navigate("/pagina2").
    // Se a rota já estiver configurada como /pagina2, o redirecionamento abaixo funciona.
    window.location.href = "/pagina2";
  }

  return (
    <main className="pai-page">
      <header className="pai-header">
        <a className="pai-brand" href="/" aria-label="Pai Presente - início">
          <span className="pai-brand-symbol" aria-hidden="true">♡</span>
          <span className="pai-brand-copy">
            <strong>Pai Presente</strong>
            <small>Juntos desde o primeiro instante</small>
          </span>
        </a>

        <nav className="pai-nav" aria-label="Navegação principal">
          <a href="/">Início</a>
          <button type="button" onClick={conectarPagina2}>Manual do Pai</button>
          <a className="is-active" href="#preparacao">Preparação</a>
        </nav>

        <button className="pai-login" type="button" onClick={conectarPagina2}>
          <span aria-hidden="true">♟</span> Entrar
        </button>
      </header>

      <section className="pai-hero" id="preparacao">
        <span className="hero-leaf hero-leaf-left" aria-hidden="true">❧</span>
        <div className="hero-copy">
          <h1>Toda semana<br />é um passo a mais<br />para te conhecer.</h1>
          <p>Acompanhe a gestação da sua parceira<br className="desktop-break" /> e viva esse momento único.</p>
          <span className="hero-heart" aria-hidden="true">♡</span>
        </div>
        <div className="hero-baby" aria-label="Ilustração simbólica de um bebê">
          <span className="baby-heart heart-one">♥</span>
          <span className="baby-heart heart-two">♥</span>
          <div className="baby-oval"><span>👶🏻</span></div>
        </div>
        <div className="hero-note">
          <p>Você já faz<br />parte dessa<br />história!</p>
          <span aria-hidden="true">♡</span>
        </div>
        <span className="hero-leaf hero-leaf-right" aria-hidden="true">❧</span>
      </section>

      <section className="pai-content">
        <article className="info-card gestation-card">
          <div className="round-icon">♡</div>
          <div className="gestation-main">
            <h2>Sua gestação</h2>
            <p className="muted">2º trimestre</p>
            <div className="progress-track"><span /></div>
            <p className="week-line"><span>♡</span> 16 semanas</p>
            <p className="tiny-copy">Seu bebê já tem cerca de 12 cm!</p>
            <button className="primary-button calendar-open" type="button" onClick={() => setCalendarioAberto(true)}>
              <span aria-hidden="true">▦</span> Ver calendário completo <span aria-hidden="true">→</span>
            </button>
          </div>
          <div className="gestation-illustration">
            <span className="plant-large" aria-hidden="true">❧</span>
            <span className="dashed-orbit" aria-hidden="true">♡</span>
            <p>Cada semana<br />é uma nova<br />descoberta.</p>
          </div>
        </article>

        <article className="info-card support-card">
          <div className="round-icon coral-icon">♡</div>
          <div className="support-main">
            <h2>Apoio à parceira</h2>
            <p className="muted">Ela não está sozinha.<br />Você também faz parte<br />desse momento.</p>
            <div className="kindness-note"><span>♡</span><p>Pequenos gestos<br />também são grandes<br />demonstrações de amor.</p></div>
          </div>
          <div className="hands-illustration" aria-hidden="true">
            <span className="hands-heart">♡</span>
            <span className="hands-emoji">🤝</span>
            <span className="hands-leaf">❧</span>
          </div>
        </article>

        <article className="info-card capsule-card">
          <div className="capsule-heading">
            <div className="capsule-title-group">
              <div className="round-icon camera-icon">◎</div>
              <div>
                <h2>Cápsula de Momentos</h2>
                <p className="muted">Guarde aqui cada fase dessa linda jornada.</p>
              </div>
            </div>
            <button className="arrow-button" type="button" onClick={() => setModalImagemAberto(true)} aria-label="Adicionar momento">→</button>
          </div>

          <div className="photo-strip">
            <div className="memory-card">
              <div className="memory-image ultrasound-image"><span>♡</span></div>
              <strong>Pré-natal</strong><small>12/09</small>
            </div>
            <div className="memory-card">
              <div className="memory-image belly-image"><span>♡</span></div>
              <strong>Barriguinha</strong><small>20/09</small>
            </div>
            <div className="memory-card">
              <div className="memory-image shoes-image"><span>♡</span></div>
              <strong>Ultrassom</strong><small>05/10</small>
            </div>
            <div className="memory-card">
              <div className="memory-image baby-image"><span>♡</span></div>
              <strong>Nosso bebê</strong><small>—</small>
            </div>

            {fotos.map((foto) => (
              <div className="memory-card user-memory" key={foto.id}>
                <img className="memory-image uploaded-image" src={foto.url} alt={foto.nome} />
                <strong title={foto.nome}>{foto.nome}</strong>
                <small>{foto.data}</small>
              </div>
            ))}

            <button className="add-memory-card" type="button" onClick={() => setModalImagemAberto(true)}>
              <span className="add-memory-plus">＋</span>
              <span>Adicionar novas<br />fotos e criar sua<br />linha do tempo.</span>
              <span className="add-memory-heart">♡</span>
            </button>
          </div>
        </article>

        <article className="notification-card">
          <div className="round-icon bell-icon"><span aria-hidden="true">♧</span></div>
          <div className="notification-copy">
            <h2>Receba notificações de ofertas</h2>
            <p>Gostaria de receber avisos e promoções especiais<br className="desktop-break" /> para você e seu bebê?</p>
            {notificacoesAtivas !== null && (
              <small className="notification-feedback">
                {notificacoesAtivas ? "Preferência salva nesta sessão." : "Você optou por não receber ofertas."}
              </small>
            )}
          </div>
          <div className="notification-actions">
            <button className={`primary-button ${notificacoesAtivas === true ? "chosen" : ""}`} type="button" onClick={() => setNotificacoesAtivas(true)}>Sim, quero!</button>
            <button className={`secondary-button ${notificacoesAtivas === false ? "chosen" : ""}`} type="button" onClick={() => setNotificacoesAtivas(false)}>Agora não</button>
          </div>
          <span className="notification-leaf" aria-hidden="true">❧</span>
        </article>

        <footer className="pai-footer">
          <span aria-hidden="true">❧</span>
          <p>Juntos, em cada fase.<br /><strong>♡</strong></p>
          <span aria-hidden="true">❧</span>
        </footer>
      </section>

      <input
        ref={inputImagemRef}
        className="hidden-file-input"
        type="file"
        accept="image/jpeg,image/png,image/heic,image/heif,image/webp"
        onChange={selecionarImagem}
      />

      {calendarioAberto && (
        <div className="modal-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setCalendarioAberto(false);
        }}>
          <section className="calendar-modal" role="dialog" aria-modal="true" aria-labelledby="calendar-title">
            <header className="modal-heading">
              <div className="modal-round-icon">▦</div>
              <div className="modal-heading-copy">
                <h2 id="calendar-title">Calendário da Gestação</h2>
                <p>Acompanhe os principais momentos da sua jornada.</p>
              </div>
              <button className="modal-close" type="button" onClick={() => setCalendarioAberto(false)} aria-label="Fechar calendário">×</button>
            </header>

            <div className="calendar-modal-grid">
              <div className="calendar-panel">
                <div className="month-heading">
                  <button type="button" onClick={() => mudarMes(-1)} aria-label="Mês anterior">‹</button>
                  <h3>{NOMES_MESES[mes]} {ano}</h3>
                  <button type="button" onClick={() => mudarMes(1)} aria-label="Próximo mês">›</button>
                </div>
                <div className="calendar-grid">
                  {DIAS_SEMANA.map((dia, index) => <div className="weekday" key={`${dia}-${index}`}>{dia}</div>)}
                  {diasDoCalendario.map((item, index) => {
                    const selecionado = item.data.toDateString() === diaSelecionado.toDateString();
                    const temEvento = !item.outroMes && eventos.some((evento) => evento.dia === item.numero);
                    return (
                      <button
                        className={`calendar-day ${item.outroMes ? "other-month" : ""} ${selecionado ? "selected-day" : ""}`}
                        key={`${item.data.toISOString()}-${index}`}
                        type="button"
                        onClick={() => {
                          setDiaSelecionado(item.data);
                          if (item.outroMes) setMesVisivel(new Date(item.data.getFullYear(), item.data.getMonth(), 1));
                        }}
                      >
                        <span>{item.numero}</span>
                        {temEvento && <i className={`event-dot ${selecionado ? "dot-selected" : ""}`} />}
                      </button>
                    );
                  })}
                </div>
                <div className="calendar-legend">
                  <span><i className="legend-heart">♥</i> Consultas</span>
                  <span><i className="legend-star">★</i> Exames</span>
                  <span><i className="legend-dot">●</i> Lembretes</span>
                </div>
              </div>

              <aside className="events-panel">
                <h3><span>▦</span> Eventos do dia</h3>
                {eventosDoDia.length ? eventosDoDia.map((evento, index) => (
                  <div className="event-card" key={`${evento.titulo}-${index}`}>
                    <div className={`event-icon event-${evento.tipo}`}>{evento.tipo === "consulta" ? "♡" : evento.tipo === "exame" ? "☼" : "✓"}</div>
                    <div>
                      <strong>{evento.titulo}</strong>
                      <p>{formatarData(diaSelecionado)} · {evento.horario}</p>
                    </div>
                  </div>
                )) : (
                  <div className="no-event-card">
                    <span>🌿</span>
                    <strong>Nenhum evento neste dia</strong>
                    <p>Que tal aproveitar esse momento para descansar?</p>
                  </div>
                )}
                <div className="calendar-message">
                  <span>❧</span>
                  <p>Cada semana é um passo a mais para o grande dia!</p>
                  <strong>♡</strong>
                </div>
              </aside>
            </div>

            <footer className="calendar-modal-footer">
              <p>Juntos, em cada fase. <span>♡</span></p>
              <button className="primary-button" type="button" onClick={() => setCalendarioAberto(false)}>▦ &nbsp; Fechar calendário</button>
            </footer>
          </section>
        </div>
      )}

      {modalImagemAberto && (
        <div className="modal-overlay image-overlay" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) fecharModalImagem();
        }}>
          <section className="image-modal" role="dialog" aria-modal="true" aria-labelledby="image-title">
            <header className="image-modal-heading">
              <span className="image-modal-heart" aria-hidden="true">♡</span>
              <h2 id="image-title">Anexar imagem</h2>
              <button className="modal-close" type="button" onClick={fecharModalImagem} aria-label="Fechar janela">×</button>
            </header>

            <button className={`upload-zone ${previewImagem ? "has-preview" : ""}`} type="button" onClick={abrirSeletorImagem}>
              {previewImagem ? (
                <img className="upload-preview" src={previewImagem} alt="Pré-visualização da imagem selecionada" />
              ) : (
                <>
                  <span className="upload-picture-icon" aria-hidden="true">▧<b>＋</b></span>
                  <span className="upload-prompt">Clique para selecionar<br />uma imagem</span>
                </>
              )}
            </button>

            <p className="upload-formats">Formatos aceitos: JPG, PNG, HEIC <span>•</span> Tamanho máximo: 10 MB</p>

            <footer className="image-modal-actions">
              <button className="cancel-button" type="button" onClick={fecharModalImagem}>Cancelar</button>
              <button className="primary-button select-button" type="button" onClick={previewImagem ? adicionarFoto : abrirSeletorImagem}>
                {previewImagem ? "Adicionar à linha do tempo" : "Selecionar"}
              </button>
            </footer>
          </section>
        </div>
      )}
    </main>
  );
}
