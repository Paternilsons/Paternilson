import React, { useState } from 'react';
import './Pagina3.css';

export default function Pagina3({ onNavegar }) {
  const [modalCalendarioAberto, setModalCalendarioAberto] = useState(false);
  const [modalUploadAberto, setModalUploadAberto] = useState(false);

  return (
    <div className="pagina-container">
      {/* HERO BANNER */}
      <section className="hero-banner">
        <div className="hero-conteudo">
          <h2>Toda semana<br />é um passo a mais<br />para te conhecer.</h2>
          <p>Acompanhe a gestação da sua parceira<br />e viva esse momento único.</p>
          <span className="coracao-decoracao">♡</span>
        </div>
        <div className="hero-imagem-container">
          <div className="frame-ovo">
            <img 
              src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80" 
              alt="Bebê gestação" 
              className="hero-img-principal" 
            />
          </div>
          <div className="balao-frase">
            <span>Você já faz parte dessa história! ♡</span>
          </div>
        </div>
      </section>

      {/* CARD 1: SUA GESTAÇÃO */}
      <section className="card-secao card-gestacao">
        <div className="card-header">
          <div className="icon-badge badge-verde">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5545" strokeWidth="2">
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
            </svg>
          </div>
          <div>
            <h3>Sua gestação</h3>
            <p className="card-subtitulo">2º trimestre</p>
          </div>
        </div>

        <div className="barra-progresso-trilho">
          <div className="barra-progresso-preenchida" style={{ width: '42%' }}></div>
        </div>

        <div className="gestacao-detalhes-row">
          <div className="gestacao-esquerda">
            <div className="semana-info">
              <span className="icon-p">♡</span>
              <strong>16 semanas</strong>
            </div>
            <p className="semana-texto">Seu bebê já tem cerca de 12 cm!</p>
            <button type="button" className="btn-verde-pill" onClick={() => setModalCalendarioAberto(true)}>
              📅 Ver calendário completo →
            </button>
          </div>
          <div className="gestacao-direita-citacao">
            <span className="ramo-wrapper">🌿</span>
            <div className="citacao-box">
              <span className="mini-coracao">♡</span>
              <p className="fonte-manuscrita">Cada semana é uma nova descoberta.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CARD 2: APOIO À PARCEIRA */}
      <section className="card-secao card-apoio">
        <div className="apoio-flex-container">
          <div className="apoio-textos-col">
            <div className="card-header">
              <div className="icon-badge badge-terracota">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C36B4C" strokeWidth="2">
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                </svg>
              </div>
              <div>
                <h3>Apoio à parceira</h3>
                <p className="apoio-descricao">
                  Ela não está sozinha. Você também faz parte desse momento.
                </p>
              </div>
            </div>

            <div className="balao-destaque-apoio">
              <span className="icon-p">♡</span>
              <span>Pequenos gestos também são grandes demonstrações de amor.</span>
            </div>
          </div>

          <div className="apoio-imagem-col">
            <img 
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80" 
              alt="Mãos dadas em gesto de apoio" 
              className="img-apoio-suave" 
            />
          </div>
        </div>
      </section>

      {/* CARD 3: CÁPSULA DE MOMENTOS */}
      <section className="card-secao card-capsula">
        <div className="card-header flex-between">
          <div className="flex-align">
            <div className="icon-badge badge-verde">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5545" strokeWidth="2">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                <circle cx="12" cy="13" r="4"/>
              </svg>
            </div>
            <div>
              <h3>Cápsula de Momentos</h3>
              <p className="card-subtitulo">Guarde aqui cada fase dessa linda jornada.</p>
            </div>
          </div>
          <span className="seta-header">→</span>
        </div>
        <div className="capsula-grid">
          <div className="card-foto-item">
            <div className="foto-box">
              <img src="https://images.unsplash.com/photo-1578885136359-16c8bd4d3a8e?auto=format&fit=crop&w=500&q=80" alt="Pré-natal" />
            </div>
            <h4>Pré-natal</h4>
            <span>12/09</span>
          </div>
          <div className="card-foto-item">
            <div className="foto-box">
              <img src="https://images.unsplash.com/photo-1518101645466-7795885ff8f8?auto=format&fit=crop&w=500&q=80" alt="Barriguinha" />
            </div>
            <h4>Barriguinha</h4>
            <span>20/09</span>
          </div>
          <div className="card-foto-item">
            <div className="foto-box">
              <img src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=500&q=80" alt="Ultrassoms" />
            </div>
            <h4>Ultrassons</h4>
            <span>05/10</span>
          </div>
          <div className="card-foto-item">
            <div className="foto-box">
              <img src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=500&q=80" alt="Nosso bebê" />
            </div>
            <h4>Nosso bebê</h4>
            <span>—</span>
          </div>

          {/* CARD ADICIONAR FOTO */}
          <div className="card-foto-item card-adicionar-foto" onClick={() => setModalUploadAberto(true)}>
            <div className="adicionar-conteudo">
              <div className="mais-camera">
                <span className="sinal-mais">+</span>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5545" strokeWidth="2">
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                  <circle cx="12" cy="13" r="4"/>
                </svg>
              </div>
              <p>Adicionar novas fotos e crie sua linha do tempo.</p>
              <span className="icon-p">♡</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-container">
        <div className="footer-conteudo">
          <span className="ramo-footer">🌿</span>
          <p className="fonte-manuscrita-footer">Juntos, em cada fase. ♡</p>
          <span className="ramo-footer flex-flip">🌿</span>
        </div>
      </footer>

      {/* ================= MODAL 1: CALENDÁRIO (FIEL À IMAGEM 1) ================= */}
      {modalCalendarioAberto && (
        <div className="modal-overlay">
          <div className="modal-box modal-calendario">
            {/* CABEÇALHO DO MODAL */}
            <div className="modal-header-container">
              <div className="modal-header-titulo">
                <div className="icon-badge badge-verde-calendario">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2D5545" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="3" ry="3"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                    <path d="M9 16l2 2 4-4"></path>
                  </svg>
                </div>
                <div>
                  <h2>Calendário da Gestação</h2>
                  <p>Acompanhe os principais momentos da sua jornada.</p>
                </div>
              </div>
              <button type="button" className="btn-fechar-modal" onClick={() => setModalCalendarioAberto(false)}>
                ✕
              </button>
            </div>

            {/* CORPO DO MODAL DO CALENDÁRIO */}
            <div className="modal-calendario-corpo">
              {/* LADO ESQUERDO: GRADE DE CALENDÁRIO */}
              <div className="box-calendario-grid">
                <div className="calendario-navegacao-mes">
                  <button type="button" className="btn-seta-mes">‹</button>
                  <h3>Outubro 2025</h3>
                  <button type="button" className="btn-seta-mes">›</button>
                </div>

                <div className="dias-semana-linha">
                  <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
                </div>

                <div className="dias-mes-grade">
                  <span className="fora-mes">28</span>
                  <span className="fora-mes">29</span>
                  <span className="fora-mes">30</span>
                  <span className="dia-item">1 <i className="ponto-coracao">♥</i></span>
                  <span className="dia-item">2</span>
                  <span className="dia-item">3</span>
                  <span className="dia-item">4 <i className="ponto-estrela">★</i></span>

                  <span className="dia-item">5</span>
                  <span className="dia-item">6</span>
                  <span className="dia-item">7 <i className="ponto-verde">●</i></span>
                  <span className="dia-item">8 <i className="ponto-verde">●</i></span>
                  <span className="dia-item">9</span>
                  <span className="dia-item">10</span>
                  <span className="dia-item">11 <i className="ponto-coracao">♥</i></span>

                  <span className="dia-item">12</span>
                  <span className="dia-item">13</span>
                  <span className="dia-item dia-selecionado-circular">
                    14
                    <span className="ponto-branco-selecionado">●</span>
                  </span>
                  <span className="dia-item">15</span>
                  <span className="dia-item">16</span>
                  <span className="dia-item">17 <i className="ponto-rosa-suave">●</i></span>
                  <span className="dia-item">18</span>

                  <span className="dia-item">19</span>
                  <span className="dia-item">20 <i className="ponto-rosa-suave">●</i></span>
                  <span className="dia-item">21</span>
                  <span className="dia-item">22 <i className="ponto-estrela">★</i></span>
                  <span className="dia-item">23 <i className="ponto-verde">●</i></span>
                  <span className="dia-item">24</span>
                  <span className="dia-item">25</span>

                  <span className="dia-item">26</span>
                  <span className="dia-item">27</span>
                  <span className="dia-item">28 <i className="ponto-coracao">♥</i></span>
                  <span className="dia-item">29</span>
                  <span className="dia-item">30 <i className="ponto-verde">●</i></span>
                  <span className="dia-item">31</span>
                  <span className="fora-mes">1</span>
                </div>

                <div className="legendas-linha">
                  <span><i className="ponto-coracao">♥</i> Consultas</span>
                  <span><i className="ponto-estrela">★</i> Exames</span>
                  <span><i className="ponto-verde">●</i> Lembretes</span>
                </div>
              </div>

              {/* LADO DIREITO: PRÓXIMOS EVENTOS */}
              <div className="box-eventos-lista">
                <div className="eventos-titulo-header">
                  <div className="icon-badge-pequeno">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2D5545" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                      <line x1="16" y1="2" x2="16" y2="6"></line>
                      <line x1="8" y1="2" x2="8" y2="6"></line>
                      <line x1="3" y1="10" x2="21" y2="10"></line>
                      <path d="M9 16l2 2 4-4"></path>
                    </svg>
                  </div>
                  <h3>Próximos eventos</h3>
                </div>

                <div className="evento-item">
                  <div className="evento-icon-bg badge-verde-suave">🩺</div>
                  <div>
                    <strong>Consulta pré-natal</strong>
                    <p>14/10 • 10:00</p>
                  </div>
                </div>

                <div className="evento-item">
                  <div className="evento-icon-bg badge-amarelo-suave">💡</div>
                  <div>
                    <strong>Dica da semana</strong>
                    <p>Hidratação é essencial!</p>
                  </div>
                </div>

                <div className="evento-item">
                  <div className="evento-icon-bg badge-rosa-suave">💖</div>
                  <div>
                    <strong>Exame de ultrassom</strong>
                    <p>17/10 • 15:00</p>
                  </div>
                </div>

                <div className="evento-item">
                  <div className="evento-icon-bg badge-verde-suave">📋</div>
                  <div>
                    <strong>Ideia de agrado</strong>
                    <p>Que tal um banho relaxante<br />e um doce favorito?</p>
                  </div>
                </div>

                <div className="card-frase-rodape">
                  <span className="folha-decorativa-esq">🌿</span>
                  <p className="frase-manuscrita-card">
                    Cada semana<br />é um passo a mais<br />para o grande dia!<br />♡
                  </p>
                  <span className="folha-decorativa-dir">🌿</span>
                </div>
              </div>
            </div>

            {/* RODAPÉ DO MODAL */}
            <div className="modal-calendario-footer">
              <div className="footer-frase-linha">
                <span className="folha-icon">🌿</span>
                <span className="texto-juntos">Juntos, em cada fase.<br />♡</span>
              </div>
              <button type="button" className="btn-fechar-calendario-pill" onClick={() => setModalCalendarioAberto(false)}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                  <path d="M9 16l2 2 4-4"></path>
                </svg>
                Fechar calendário
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= MODAL 2: UPLOAD DE FOTOS (FIEL À IMAGEM 2) ================= */}
      {modalUploadAberto && (
        <div className="modal-overlay">
          <div className="modal-box modal-upload-fiel">
            <div className="upload-header-row">
              <div className="upload-titulo-area">
                <span className="coracao-brilho">♡✨</span>
                <h2>Anexar imagem</h2>
              </div>
              <button type="button" className="btn-fechar-modal" onClick={() => setModalUploadAberto(false)}>
                ✕
              </button>
            </div>

            <label className="zone-drop-fiel">
              <input type="file" accept="image/jpeg, image/png, image/heic" style={{ display: 'none' }} />
              <div className="icon-camera-mais-wrapper">
                <svg width="60" height="50" viewBox="0 0 24 24" fill="none" stroke="#2D5545" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="4" ry="4" fill="#EBF2EE" stroke="#2D5545"/>
                  <circle cx="8.5" cy="8.5" r="1.5" fill="#2D5545"/>
                  <polyline points="21 15 16 10 5 21" stroke="#2D5545"/>
                </svg>
                <div className="badge-mais-circulo">+</div>
              </div>
              <p className="texto-dropzone">Clique para selecionar<br />uma imagem</p>
            </label>

            <p className="formatos-texto-fiel">
              Formatos aceitos: JPG, PNG, HEIC &bull; Tamanho máximo: 10MB
            </p>

            <div className="upload-botoes-row-fiel">
              <button type="button" className="btn-cancelar-texto" onClick={() => setModalUploadAberto(false)}>
                Cancelar
              </button>
              <button type="button" className="btn-verde-pill-selecionar" onClick={() => setModalUploadAberto(false)}>
                Selecionar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}