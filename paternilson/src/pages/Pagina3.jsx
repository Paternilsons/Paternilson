import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Pagina3.css';

export default function Pagina3() {
  const [modalCalendarioAberto, setModalCalendarioAberto] = useState(false);
  const [modalUploadAberto, setModalUploadAberto] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="pagina-container">
      {/* HERO BANNER */}
      <section className="hero-banner">
        <div className="hero-conteudo">
          <h2>Toda semana é um passo a mais para te conhecer.</h2>
          <p>Acompanhe a gestação da sua parceira e viva esse momento único.</p>
          <img src="/caminho-da-sua-foto/coracao-linha.png" alt="Coração" className="coracao-decoracao" />
        </div>
        <div className="hero-imagem-container">
          <img src="/caminho-da-sua-foto/ilustracao-bebe-gestacao.png" alt="Ilustração Gestação" className="hero-img-principal" />
          <div className="balao-frase">
            <span>Você já faz parte dessa história! ♡</span>
          </div>
        </div>
      </section>

      {/* CARD 1: SUA GESTAÇÃO */}
      <section className="card-secao">
        <div className="card-header">
          <img src="/caminho-da-sua-foto/icon-coracao-verde.png" alt="Ícone Gestação" className="card-icon" />
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
              <img src="/caminho-da-sua-foto/icon-coracao-pequeno.png" alt="Coração" className="icon-p" />
              <strong>16 semanas</strong>
            </div>
            <p className="semana-texto">Seu bebê já tem cerca de 12 cm!</p>
            <button className="btn-verde" onClick={() => setModalCalendarioAberto(true)}>
              <img src="/caminho-da-sua-foto/icon-calendario.png" alt="Calendário" className="icon-btn-inline" />
              Ver calendário completo &rarr;
            </button>
          </div>
          <div className="gestacao-direita-citacao">
            <p>Cada semana é uma nova descoberta.</p>
            <img src="/caminho-da-sua-foto/ramo-folhas.png" alt="Ramo decorativo" className="ramo-img" />
          </div>
        </div>
      </section>

      {/* CARD 2: APOIO À PARCEIRA */}
      <section className="card-secao card-apoio">
        <div className="card-header">
          <img src="/caminho-da-sua-foto/icon-coracao-terracota.png" alt="Ícone Apoio" className="card-icon" />
          <div>
            <h3>Apoio à parceira</h3>
            <p className="apoio-descricao">
              Ela não está sozinha. Você também faz parte desse momento.
            </p>
          </div>
        </div>
        <div className="apoio-conteudo">
          <div className="balao-destaque-apoio">
            <img src="/caminho-da-sua-foto/icon-coracao-linha.png" alt="Coração" className="icon-p" />
            <span>Pequenos gestos também são grandes demonstrações de amor.</span>
          </div>
          <div className="apoio-ilustracao">
            <img src="/caminho-da-sua-foto/maos-dadas.png" alt="Mãos dadas" className="img-maos" />
          </div>
        </div>
      </section>

      {/* CARD 3: CÁPSULA DE MOMENTOS */}
      <section className="card-secao">
        <div className="card-header flex-between">
          <div className="flex-align">
            <img src="/caminho-da-sua-foto/icon-camera.png" alt="Câmera" className="card-icon" />
            <div>
              <h3>Cápsula de Momentos</h3>
              <p className="card-subtitulo">Guarde aqui cada fase dessa linda jornada.</p>
            </div>
          </div>
          <span className="seta-header">&rarr;</span>
        </div>
        <div className="capsula-grid">
          <div className="card-foto-item">
            <div className="foto-box">
              <img src="/caminho-da-sua-foto/pre-natal-ultrassom.jpg" alt="Pré-natal" />
            </div>
            <h4>Pré-natal</h4>
            <span>12/09</span>
          </div>
          <div className="card-foto-item">
            <div className="foto-box">
              <img src="/caminho-da-sua-foto/barriguinha.jpg" alt="Barriguinha" />
            </div>
            <h4>Barriguinha</h4>
            <span>20/09</span>
          </div>
          <div className="card-foto-item">
            <div className="foto-box">
              <img src="/caminho-da-sua-foto/sapatinhos.jpg" alt="Ultrassons" />
            </div>
            <h4>Ultrassons</h4>
            <span>05/10</span>
          </div>
          <div className="card-foto-item">
            <div className="foto-box">
              <img src="/caminho-da-sua-foto/nosso-bebe.jpg" alt="Nosso bebê" />
            </div>
            <h4>Nosso bebê</h4>
            <span>—</span>
          </div>

          {/* CARD ADICIONAR FOTO */}
          <div className="card-foto-item card-adicionar-foto" onClick={() => setModalUploadAberto(true)}>
            <div className="adicionar-conteudo">
              <span className="sinal-mais">+</span>
              <img src="/caminho-da-sua-foto/icon-camera-verde.png" alt="Adicionar" className="icon-camera-add" />
              <p>Adicionar novas fotos e crie sua linha do tempo.</p>
              <img src="/caminho-da-sua-foto/coracao-linha-pequeno.png" alt="Coração" className="icon-p" />
            </div>
          </div>
        </div>
      </section>

      {/* CARD 4: NOTIFICAÇÕES */}
      <section className="card-secao card-notificacao">
        <div className="flex-align gap-notificacao">
          <img src="/caminho-da-sua-foto/icon-sino.png" alt="Sino" className="card-icon" />
          <div>
            <h3>Receba notificações de ofertas</h3>
            <p className="card-subtitulo">Gostaria de receber avisos e promoções especiais para você e seu bebê?</p>
          </div>
        </div>
        <div className="notificacao-botoes">
          <button className="btn-verde">Sim, quero!</button>
          <button className="btn-outline-verde">Agora não</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>Juntos, em cada fase. ♡</p>
      </footer>

      {/* ================= MODAL 1: CALENDÁRIO ================= */}
      {modalCalendarioAberto && (
        <div className="modal-overlay">
          <div className="modal-box modal-calendario">
            <button className="btn-fechar-modal" onClick={() => setModalCalendarioAberto(false)}>&times;</button>
            <div className="modal-header-titulo">
              <img src="/caminho-da-sua-foto/icon-calendario-verde.png" alt="Calendário" className="modal-icon-header" />
              <div>
                <h2>Calendário da Gestação</h2>
                <p>Acompanhe os principais momentos da sua jornada.</p>
              </div>
            </div>
            <div className="modal-calendario-corpo">
              {/* Lado Esquerdo: Grade Calendário */}
              <div className="box-calendario-grid">
                <div className="calendario-navegacao-mes">
                  <button className="btn-seta-mes">&lt;</button>
                  <h3>Outubro 2025</h3>
                  <button className="btn-seta-mes">&gt;</button>
                </div>
                <div className="dias-semana-linha">
                  <span>D</span><span>S</span><span>T</span><span>Q</span><span>Q</span><span>S</span><span>S</span>
                </div>
                <div className="dias-mes-grade">
                  <span className="fora-mes">28</span><span className="fora-mes">29</span><span className="fora-mes">30</span>
                  <span>1 <i className="ponto-coracao">♥</i></span><span>2</span><span>3</span><span>4 <i className="ponto-estrela">★</i></span>
                  <span>5</span><span>6</span><span>7 <i className="ponto-verde">●</i></span><span>8 <i className="ponto-verde">●</i></span><span>9</span><span>10</span><span>11 <i className="ponto-coracao">♥</i></span>
                  <span>12</span><span>13</span><span className="dia-selecionado">14 ●</span><span>15</span><span>16</span><span>17 <i className="ponto-verde">●</i></span><span>18</span>
                  <span>19</span><span>20 <i className="ponto-coracao">♥</i></span><span>21</span><span>22 <i className="ponto-estrela">★</i></span><span>23 <i className="ponto-verde">●</i></span><span>24</span><span>25</span>
                  <span>26</span><span>27</span><span>28 <i className="ponto-coracao">♥</i></span><span>29</span><span>30 <i className="ponto-verde">●</i></span><span>31</span><span className="fora-mes">1</span>
                </div>
                <div className="legendas-linha">
                  <span><i className="ponto-coracao">♥</i> Consultas</span>
                  <span><i className="ponto-estrela">★</i> Exames</span>
                  <span><i className="ponto-verde">●</i> Lembretes</span>
                </div>
              </div>

              {/* Lado Direito: Próximos Eventos */}
              <div className="box-eventos-lista">
                <h3><img src="/caminho-da-sua-foto/icon-calendar-check.png" alt="" className="icon-p" /> Próximos eventos</h3>
                <div className="evento-item">
                  <img src="/caminho-da-sua-foto/icon-estetoscopio.png" alt="Consulta" className="evento-icon" />
                  <div>
                    <strong>Consulta pré-natal</strong>
                    <p>14/10 • 10:00</p>
                  </div>
                </div>
                <div className="evento-item">
                  <img src="/caminho-da-sua-foto/icon-lampada.png" alt="Dica" className="evento-icon" />
                  <div>
                    <strong>Dica da semana</strong>
                    <p>Hidratação é essencial!</p>
                  </div>
                </div>
                <div className="evento-item">
                  <img src="/caminho-da-sua-foto/icon-coracao-rosa.png" alt="Ultrassom" className="evento-icon" />
                  <div>
                    <strong>Exame de ultrassom</strong>
                    <p>17/10 • 15:00</p>
                  </div>
                </div>
                <div className="evento-item">
                  <img src="/caminho-da-sua-foto/icon-prancha-check.png" alt="Ideia" className="evento-icon" />
                  <div>
                    <strong>Ideia de agrado</strong>
                    <p>Que tal um banho relaxante e um doce favorito?</p>
                  </div>
                </div>
                <div className="card-frase-rodape">
                  <p>Cada semana é um passo a mais para o grande dia! ♡</p>
                </div>
              </div>
            </div>
            <button className="btn-verde btn-fechar-calendario" onClick={() => setModalCalendarioAberto(false)}>
              <img src="/caminho-da-sua-foto/icon-calendario-brag.png" alt="" className="icon-btn-inline" />
              Fechar calendário
            </button>
          </div>
        </div>
      )}

      {/* ================= MODAL 2: UPLOAD DE FOTOS ================= */}
      {modalUploadAberto && (
        <div className="modal-overlay">
          <div className="modal-box modal-upload">
            <button className="btn-fechar-modal" onClick={() => setModalUploadAberto(false)}>&times;</button>
            <div className="upload-header">
              <img src="/caminho-da-sua-foto/icon-coracao-brilhos.png" alt="Coração" className="icon-upload-header" />
              <h2>Anexar imagem</h2>
            </div>
            <label className="zone-drop">
              <input type="file" accept="image/jpeg, image/png, image/heic" style={{ display: 'none' }} />
              <img src="/caminho-da-sua-foto/icon-imagem-mais.png" alt="Anexar" className="img-drop-icon" />
              <p>Clique para selecionar uma imagem</p>
            </label>
            <p className="formatos-texto">
              Formatos aceitos: JPG, PNG, HEIC &bull; Tamanho máximo: 10MB
            </p>
            <div className="upload-botoes-row">
              <button className="btn-cancelar" onClick={() => setModalUploadAberto(false)}>Cancelar</button>
              <button className="btn-verde" onClick={() => setModalUploadAberto(false)}>Selecionar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}