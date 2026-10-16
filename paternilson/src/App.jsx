
import React from 'react';
import './App.css';

export default function App() {
  return (
    <div className="site" id="inicio">
      <header className="header">
        <a href="#inicio" className="brand">
          <span className="brand-symbol">●</span>
          <span className="brand-copy">
            <strong>Pai Presente</strong>
            <small>Juntos desde o primeiro instante</small>
          </span>
        </a>

        <nav className="navigation">
          <a className="active" href="#inicio">Início</a>
          <a href="#manual">Manual do Pai</a>
          <a href="#preparacao">Preparação</a>
        </nav>

        <a className="login-button" href="#entrar">
          <span className="user-symbol">♙</span>
          Entrar
        </a>
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
          <article className="card manual-card" id="manual">
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

              <a href="#manual" className="access-button green-button">
                Acessar <span>→</span>
              </a>
            </div>

            <span className="card-leaves">🌿</span>
            <span className="card-heart">♡</span>
          </article>

          <article
            className="card preparation-card"
            id="preparacao"
          >
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

              <a
                href="#preparacao"
                className="access-button orange-button"
              >
                Acessar <span>→</span>
              </a>
            </div>

            <div className="photo-stack" aria-label="Momentos da gestação">
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
