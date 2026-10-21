
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import './App.css';

// ========================================
// PÁGINA INICIAL
// ========================================

function HomePage() {
  return (
    <div className="site" id="inicio">
      <header className="header">
        <Link to="/" className="brand">
          <span className="brand-symbol">●</span>

          <span className="brand-copy">
            <strong>Pai Presente</strong>
            <small>Juntos desde o primeiro instante</small>
          </span>
        </Link>

        <nav className="navigation">
          <Link className="active" to="/">
            Início
          </Link>
          <Link to="/manual">Manual do Pai</Link>
          <Link to="/preparacao">Preparação</Link>
        </nav>

        <Link className="login-button" to="/entrar">
          <span className="user-symbol">♙</span>
          Entrar
        </Link>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <div className="welcome-badge">
              <span>♥</span>
              Bem-vindo ao Pai Presente
            </div>

            <h1>
              A paternidade
              <br />
              <span>também se aprende.</span>
              <span className="title-spark">〃</span>
            </h1>

            <p className="hero-description">
              Um espaço feito para te acompanhar em
              <br />
              cada etapa dessa nova jornada. Aqui você encontra
              <br />
              apoio, orientação e segurança para viver
              <br />
              a paternidade com mais confiança.
            </p>

            <div className="wave">〰〰</div>
          </div>

          <div className="hero-art">
            <div className="art-circle" />
            <span className="hero-heart">♡</span>

            <div className="family-illustration">
              <div className="father-figure">
                <div className="father-hair" />

                <div className="father-head">
                  <span className="father-eye" />
                  <span className="father-nose" />
                </div>

                <div className="father-body" />
                <div className="father-arm" />
              </div>

              <div className="baby-figure">
                <div className="baby-hair" />

                <div className="baby-head">
                  <span className="baby-eye left" />
                  <span className="baby-eye right" />
                  <span className="baby-smile" />
                </div>

                <div className="baby-body" />
              </div>
            </div>

            <p className="encouragement">
              Você
              <br />
              consegue!
              <br />
              ♡
            </p>

            <span className="teddy">🧸</span>
            <span className="hero-leaves left-leaves">🌿</span>
            <span className="hero-leaves right-leaves">🌿</span>
          </div>
        </section>

        <section className="cards">
          <article className="card manual-card">
            <div className="card-icon green-icon">
              <span>♡</span>
              <span className="shirt">👕</span>
            </div>

            <div className="card-content">
              <h2>
                Manual do Pai
                <br />
                de Primeira Viagem
              </h2>

              <p>
                Tudo o que você precisa saber para
                <br />
                se sentir mais preparado e confiante
                <br />
                com a chegada do seu bebê.
              </p>

              <Link
                to="/manual"
                className="access-button green-button"
              >
                Acessar <span>→</span>
              </Link>
            </div>

            <span className="card-leaves">🌿</span>
            <span className="card-heart">♡</span>
          </article>

          <article className="card preparation-card">
            <div className="card-icon orange-icon">
              <span className="calendar">▢</span>
              <span className="calendar-heart">♡</span>
            </div>

            <div className="card-content">
              <h2>
                Preparação e
                <br />
                Galeria de Momentos
              </h2>

              <p>
                Acompanhe sua gestação, organize o
                <br />
                seu dia a dia e guarde cada lembrança
                <br />
                desse momento único.
              </p>

              <Link
                to="/preparacao"
                className="access-button orange-button"
              >
                Acessar <span>→</span>
              </Link>
            </div>

            <div
              className="photo-stack"
              aria-label="Momentos da gestação"
            >
              <div className="photo photo-ultrasound">
                <span>♡</span>
                <small>Ultrassom</small>
              </div>

              <div className="photo photo-feet">👣</div>
              <div className="photo photo-baby">♡</div>
            </div>

            <span className="prep-leaves">🌿</span>
            <span className="prep-heart">♡</span>
          </article>
        </section>

        <footer className="footer">
          <span className="footer-decoration">⌁</span>
          <p>Aqui, cada fase importa.</p>
          <span className="footer-decoration">⌁</span>
        </footer>
      </main>
    </div>
  );
}

// ========================================
// PÁGINA MANUAL DO PAI
// ========================================

function Manual() {
  return (
    <div className="site">
      <header className="header">
        <Link to="/" className="brand">
          <span className="brand-symbol">●</span>

          <span className="brand-copy">
            <strong>Pai Presente</strong>
            <small>Juntos desde o primeiro instante</small>
          </span>
        </Link>

        <nav className="navigation">
          <Link to="/">Início</Link>
          <Link className="active" to="/manual">
            Manual do Pai
          </Link>
          <Link to="/preparacao">Preparação</Link>
        </nav>
      </header>

      <main className="subpage">
        <h1>Manual do Pai de Primeira Viagem</h1>

        <p>
          Tudo o que você precisa saber para se sentir mais
          preparado e confiante com a chegada do seu bebê.
        </p>

        <div className="cards">
          <article className="card manual-card">
            <div className="card-content">
              <h2>Cuidados com o bebê</h2>
              <p>
                Conheça os cuidados básicos com o recém-nascido
                e participe da rotina do seu filho.
              </p>
            </div>
          </article>

          <article className="card manual-card">
            <div className="card-content">
              <h2>Vínculo e afeto</h2>
              <p>
                Descubra maneiras de construir uma relação
                de carinho e confiança com seu bebê.
              </p>
            </div>
          </article>

          <article className="card manual-card">
            <div className="card-content">
              <h2>Apoio à família</h2>
              <p>
                Aprenda como dividir responsabilidades e
                apoiar sua família nessa nova fase.
              </p>
            </div>
          </article>
        </div>

        <Link to="/" className="access-button green-button">
          ← Voltar ao início
        </Link>
      </main>

      <footer className="footer">
        <p>Aqui, cada fase importa.</p>
      </footer>
    </div>
  );
}

// ========================================
// PÁGINA PREPARAÇÃO
// ========================================

function Preparacao() {
  return (
    <div className="site">
      <header className="header">
        <Link to="/" className="brand">
          <span className="brand-symbol">●</span>

          <span className="brand-copy">
            <strong>Pai Presente</strong>
            <small>Juntos desde o primeiro instante</small>
          </span>
        </Link>

        <nav className="navigation">
          <Link to="/">Início</Link>
          <Link to="/manual">Manual do Pai</Link>
          <Link className="active" to="/preparacao">
            Preparação
          </Link>
        </nav>
      </header>

      <main className="subpage">
        <h1>Preparação e Galeria de Momentos</h1>

        <p>
          Acompanhe sua gestação, organize os preparativos
          e guarde as lembranças dessa fase especial.
        </p>

        <div className="cards">
          <article className="card preparation-card">
            <div className="card-content">
              <h2>Preparação para a chegada</h2>
              <p>
                Organize os itens essenciais, planeje a rotina
                e converse com sua família sobre as responsabilidades.
              </p>
            </div>
          </article>

          <article className="card preparation-card">
            <div className="card-content">
              <h2>Galeria de Momentos</h2>
              <p>
                Reserve este espaço para registrar ultrassons,
                fotografias e outras lembranças da gestação.
              </p>
            </div>
          </article>
        </div>

        <Link to="/" className="access-button orange-button">
          ← Voltar ao início
        </Link>
      </main>

      <footer className="footer">
        <p>Aqui, cada fase importa.</p>
      </footer>
    </div>
  );
}

// ========================================
// PÁGINA ENTRAR
// ========================================

function Entrar() {
  return (
    <div className="site">
      <header className="header">
        <Link to="/" className="brand">
          <span className="brand-symbol">●</span>

          <span className="brand-copy">
            <strong>Pai Presente</strong>
            <small>Juntos desde o primeiro instante</small>
          </span>
        </Link>
      </header>

      <main className="subpage">
        <h1>Entrar</h1>

        <p>
          A área de login ainda precisa ser conectada a um
          sistema de autenticação.
        </p>

        <Link to="/" className="access-button green-button">
          ← Voltar ao início
        </Link>
      </main>
    </div>
  );
}

// ========================================
// ROTAS DA APLICAÇÃO
// ========================================

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/preparacao" element={<Preparacao />} />
        <Route path="/entrar" element={<Entrar />} />
      </Routes>
    </BrowserRouter>
  );
}
