
import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Link,
  Navigate,
} from 'react-router-dom';
import './App.css';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <span className="brand-icon">●</span>
        <span className="brand-text">
          <strong>Pai Presente</strong>
          <small>Juntos desde o primeiro instante</small>
        </span>
      </Link>

      <nav className="navigation">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Início
        </NavLink>

        <NavLink
          to="/manual"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Manual do Pai
        </NavLink>

        <NavLink
          to="/preparacao"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          Preparação
        </NavLink>

        <NavLink
          to="/entrar"
          className={({ isActive }) =>
            isActive ? 'login-link active' : 'login-link'
          }
        >
          <span aria-hidden="true">♙</span> Entrar
        </NavLink>
      </nav>
    </header>
  );
}

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">PATERNIDADE • PRESENÇA • AMOR</span>

          <h1>
            Bem-vindo ao
            <br />
            <span>Pai Presente</span> ♡
          </h1>

          <p>
            Uma jornada de descobertas, aprendizados e momentos especiais
            para acompanhar você desde o primeiro instante da paternidade.
          </p>

          <div className="hero-buttons">
            <Link to="/manual" className="button button-primary">
              Conheça o manual
              <span aria-hidden="true"> →</span>
            </Link>

            <Link to="/preparacao" className="button button-secondary">
              Comece sua preparação
            </Link>
          </div>

          <div className="hero-note">
            <span className="note-heart">♡</span>
            <span>Estar presente é o primeiro passo para transformar vidas.</span>
          </div>
        </div>

        <div className="hero-visual">
          <div className="visual-circle">
            <div className="illustration">
              <span className="illustration-sun">☼</span>
              <span className="illustration-heart">♡</span>
              <div className="father-head" />
              <div className="father-hair" />
              <div className="father-body" />
              <div className="baby-head" />
              <div className="baby-body" />
              <div className="illustration-star star-one">✦</div>
              <div className="illustration-star star-two">✧</div>
            </div>
          </div>

          <div className="floating-note">
            <span className="floating-note-icon">♡</span>
            <span>
              <strong>Pequenos momentos</strong>
              <small>Grandes memórias</small>
            </span>
          </div>
        </div>
      </section>

      <section className="welcome-section">
        <div className="section-heading">
          <span className="eyebrow">SUA JORNADA COMEÇA AQUI</span>
          <h2>Presença que faz a diferença</h2>
          <p>
            Cada etapa é uma oportunidade de aprender, cuidar e criar vínculos.
          </p>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <div className="feature-icon">♡</div>
            <h3>Manual do Pai de Primeira Viagem</h3>
            <p>
              Um espaço dedicado a acompanhar a sua jornada como pai.
            </p>
            <Link to="/manual" className="text-link">
              Acessar página <span aria-hidden="true">→</span>
            </Link>
          </article>

          <article className="feature-card">
            <div className="feature-icon">✦</div>
            <h3>Preparação e Galeria de Momentos</h3>
            <p>
              Um espaço reservado para a preparação e as lembranças da família.
            </p>
            <Link to="/preparacao" className="text-link">
              Acessar página <span aria-hidden="true">→</span>
            </Link>
          </article>
        </div>
      </section>
    </main>
  );
}

/*
  Páginas reservadas para outra pessoa desenvolver.
  Não adicione conteúdo aqui por enquanto.
*/
function ManualPage() {
  return <main className="blank-page" aria-label="Manual do Pai" />;
}

function PreparacaoPage() {
  return <main className="blank-page" aria-label="Preparação e Galeria" />;
}

function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-card">
        <span className="login-symbol">♡</span>
        <h1>Bem-vindo de volta!</h1>
        <p>Entre para continuar sua jornada com o Pai Presente.</p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            alert('Esta página de entrada ainda não está conectada a um sistema de autenticação.');
          }}
        >
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu e-mail"
            required
          />

          <label htmlFor="password">Senha</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Digite sua senha"
            required
          />

          <button type="submit" className="button button-primary login-button">
            Entrar
          </button>
        </form>

        <Link to="/" className="back-link">
          ← Voltar para o início
        </Link>
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main className="not-found-page">
      <h1>Página não encontrada</h1>
      <p>O endereço acessado não existe.</p>
      <Link to="/" className="button button-primary">
        Voltar para o início
      </Link>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="site">
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/manual" element={<ManualPage />} />
          <Route path="/preparacao" element={<PreparacaoPage />} />
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>

        <footer className="footer">
          <Link to="/" className="footer-brand">
            Pai Presente <span>♡</span>
          </Link>
          <p>Juntos desde o primeiro instante.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
