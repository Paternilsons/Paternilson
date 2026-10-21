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
import imagemPai from './assets/ved.png';

import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
        </span>

        <span className="brand-copy">
          <strong>Paternilson</strong>
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
      </nav>


    </header>
  );
}

function HeroIllustration() {
  return (
    <div className="family-art">
      <div className="art-halo" />
      <img
        src={imagemPai}
        alt="Pai abraçando seus filhos"
        className="hero-image"
      />
    </div>
  );
}

function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <div className="hero-copy">
          <div className="welcome-pill">
            <span>♥</span>
            Bem-vindo ao Pai Presente
          </div>

          <h1>
            A paternidade
            <br />
            <span>também se aprende.</span>
            <span className="title-spark">〰</span>
          </h1>

          <p>
            Um espaço feito para te acompanhar em cada etapa dessa nova
            jornada. Aqui você encontra apoio, orientação e segurança
            para viver a paternidade com mais confiança.
          </p>

          <div className="little-wave">〰〰〰</div>
        </div>

        <HeroIllustration />
      </section>

      <section className="feature-section">
        <Link to="/manual" className="feature-card manual-card">
          <div className="card-icon clothes-icon" aria-hidden="true">
            ♡
          </div>

          <div className="card-copy">
            <h2>
              Manual do Pai
              <br />
              de Primeira Viagem
            </h2>

            <p>
              Tudo o que você precisa saber para se sentir mais preparado
              e confiante com a chegada do seu bebê.
            </p>

            <span className="access-button green-button">
              Acessar <span>→</span>
            </span>
          </div>

          <span className="card-heart" aria-hidden="true">
            ♡
          </span>

          <span className="card-leaf" aria-hidden="true">
            ❧
          </span>
        </Link>

        <Link
          to="/preparacao"
          className="feature-card preparation-card"
        >
          <div className="card-icon calendar-icon" aria-hidden="true">
            ♡
          </div>

          <div className="card-copy">
            <h2>
              Preparação e
              <br />
              Galeria de Momentos
            </h2>

            <p>
              Acompanhe sua gestação, organize o seu dia a dia e guarde
              cada lembrança desse momento único.
            </p>

            <span className="access-button terracotta-button">
              Acessar <span>→</span>
            </span>
          </div>

          <div className="photo-stack" aria-hidden="true">
            <div className="mini-photo photo-ultrasound">♡</div>
            <div className="mini-photo photo-feet">♡</div>
            <div className="mini-photo photo-baby">✧</div>
          </div>

          <span className="card-spark" aria-hidden="true">
            〰
          </span>

          <span className="card-leaf" aria-hidden="true">
            ❧
          </span>
        </Link>
      </section>

      <div className="bottom-message">
        <span>〰</span>
        <p>Aqui, cada fase importa.</p>
        <span>〰</span>
      </div>
    </main>
  );
}

function LoginPage() {
  return (
    <main className="login-page">
      <section className="login-card">
        <span className="login-heart">♡</span>

        <h1>Que bom ter você aqui!</h1>

        <p>
          Esta página de entrada ainda está em desenvolvimento.
        </p>

        <Link to="/" className="access-button green-button">
          Voltar ao início <span>→</span>
        </Link>
      </section>
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
          <Route path="/manual" element={<Pagina2 />} />
          <Route path="/preparacao" element={<Pagina3 />} />
          <Route path="/entrar" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
