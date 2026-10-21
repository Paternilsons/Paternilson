import React, { useEffect, useState } from 'react';

import './Pagina2.css';

const temas = [

  {

    id: 1,

    numero: 'GUIA 01',

    titulo: 'Cuidados com o bebê',

    subtitulo: 'O básico para cuidar com confiança.',

    imagem:

      'https://media.istockphoto.com/id/1447126543/pt/foto/father-bonding-kiss-and-boy-child-hug-happy-in-nature-with-quality-time-together-outdoor.jpg?s=612x612&w=0&k=20&c=LbzKdiO2igFfdmTDHzyRsbpjWYqKCN3EXZCPC6KYKvA=',

    imagemAlt: 'Momento de carinho entre mãe e bebê',

    cor: 'verde',

    icone: '♡',

    pontos: [

      'Banho e higiene',

      'Troca de fraldas',

      'Amamentação e alimentação',

      'Como segurar e acalmar o bebê',

    ],

    descricao:

      'Os primeiros cuidados podem parecer desafiadores, mas você vai aprender um pouquinho a cada dia. O mais importante é ter calma, atenção e carinho.',

    dicas: [

      {

        titulo: 'Banho e higiene',

        texto:

          'Separe toalha, fralda, roupa limpa e sabonete infantil antes de começar. Confira a temperatura da água com cuidado e nunca deixe o bebê sozinho.',

      },

      {

        titulo: 'Troca de fraldas',

        texto:

          'Deixe tudo ao alcance das mãos, limpe delicadamente e seque as dobrinhas. Trocas frequentes ajudam a prevenir irritações.',

      },

      {

        titulo: 'Alimentação',

        texto:

          'Respeite os sinais de fome e converse com a equipe de saúde sobre amamentação e dificuldades na alimentação.',

      },

      {

        titulo: 'Colo e aconchego',

        texto:

          'Apoie a cabeça e o pescoço do bebê. Fale baixinho, embale suavemente e observe o que ajuda seu pequeno a se tranquilizar.',

      },

    ],

  },

  {

    id: 2,

    numero: 'GUIA 02',

    titulo: 'Sono seguro e rotina',

    subtitulo: 'Descanso tranquilo para toda a família.',

    imagem:

      'https://camim-site.s3.sa-east-1.amazonaws.com/wp-content/uploads/2020/11/16170322/Como_melhorar_o_sono_do_bebe_blo.jpg',

    imagemAlt: 'Ambiente tranquilo e aconchegante',

    cor: 'rosa',

    icone: '✧',

    pontos: [

      'Posição segura para dormir',

      'Rotina de sono',

      'Sinais de sono e cansaço',

      'Dicas para o dia a dia',

    ],

    descricao:

      'O sono do recém-nascido acontece em períodos curtos. Uma rotina acolhedora pode ajudar a família a se adaptar aos novos horários.',

    dicas: [

      {

        titulo: 'Posição para dormir',

        texto:

          'Coloque o bebê de barriga para cima em todos os sonos, em um berço com colchão firme e plano, sem travesseiros, mantas soltas, protetores ou bichos de pelúcia.',

      },

      {

        titulo: 'Ritual tranquilo',

        texto:

          'Luz suave, voz calma e uma sequência simples de cuidados podem sinalizar que está chegando a hora de dormir.',

      },

      {

        titulo: 'Observe os sinais',

        texto:

          'Bocejos, olhar distante e irritação podem indicar sono. Cada bebê tem seu ritmo, principalmente nos primeiros meses.',

      },

      {

        titulo: 'Divida os cuidados',

        texto:

          'Sempre que possível, organize turnos com sua rede de apoio para que os adultos também consigam descansar.',

      },

    ],

  },

  {

    id: 3,

    numero: 'GUIA 03',

    titulo: 'Mala da maternidade',

    subtitulo: 'Tudo organizado para a chegada do bebê.',

    imagem:

      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWZHhf0NJ_y4O4jcFcZD8Y0bKm-i6LiWtN4y8YSZXqooUARHoBCczjFuDu&s=10',

    imagemAlt: 'Detalhe de objetos em tons suaves',

    cor: 'rosa',

    icone: '♡',

    pontos: [

      'Itens para o bebê',

      'Documentos importantes',

      'Roupas para a maternidade',

      'Organização para o grande dia',

    ],

    descricao:

      'Deixar a mala pronta com antecedência ajuda a diminuir a correria e permite que vocês aproveitem esse momento com mais tranquilidade.',

    dicas: [

      {

        titulo: 'Roupinhas do bebê',

        texto:

          'Separe trocas completas de roupa, incluindo body, macacão, meias e peças adequadas ao clima. Confira a lista fornecida pela maternidade.',

      },

      {

        titulo: 'Higiene e conforto',

        texto:

          'Considere fraldas, mantas e itens de higiene solicitados pela equipe. Lave as roupas antes de guardá-las.',

      },

      {

        titulo: 'Documentos',

        texto:

          'Deixe documentos pessoais, cartão do pré-natal e exames organizados em uma pasta de fácil acesso.',

      },

      {

        titulo: 'Mala do acompanhante',

        texto:

          'Inclua uma troca de roupa, itens de higiene, carregador e um lanche, conforme as regras da maternidade.',

      },

    ],

  },

  {

    id: 4,

    numero: 'GUIA 04',

    titulo: 'Apoio à parceira',

    subtitulo: 'Cuidado, parceria e presença de verdade.',

    imagem:

      'https://img.magnific.com/fotos-gratis/pai-segurando-o-filho-nos-ombros-vista-frontal_23-2148684649.jpg',

    imagemAlt: 'Família compartilhando um momento de carinho',

    cor: 'verde',

    icone: '♡',

    pontos: [

      'Escuta e acolhimento',

      'Divisão das tarefas',

      'Presença nos momentos difíceis',

      'Cuidado com a família',

    ],

    descricao:

      'Ser parceiro é participar de verdade. Pequenas atitudes de cuidado, escuta e responsabilidade fazem diferença nessa nova fase.',

    dicas: [

      {

        titulo: 'Escute sem julgar',

        texto:

          'Pergunte como sua parceira está se sentindo e ouça com atenção. Nem sempre ela precisa de uma solução imediata; às vezes, precisa de acolhimento.',

      },

      {

        titulo: 'Divida as responsabilidades',

        texto:

          'Participe das trocas, da organização da casa e dos cuidados com o bebê. Combinem tarefas de forma realista.',

      },

      {

        titulo: 'Acompanhe as consultas',

        texto:

          'Sempre que possível, participe das consultas e aprenda junto sobre os cuidados com o bebê.',

      },

      {

        titulo: 'Peça ajuda quando necessário',

        texto:

          'Se houver sofrimento emocional intenso ou persistente, incentive a busca por ajuda profissional e ofereça apoio.',

      },

    ],

  },

];

const dicasRapidas = [

  {

    icone: '♡',

    titulo: 'Presença importa',

    texto: 'Seu carinho e sua atenção fazem diferença.',

  },

  {

    icone: '✿',

    titulo: 'Aprenda no seu ritmo',

    texto: 'Ninguém nasce sabendo. Cada dia ensina algo novo.',

  },

  {

    icone: '☼',

    titulo: 'Peça ajuda',

    texto: 'Aceitar apoio também é uma forma de cuidar.',

  },

];

function ModalDicas({ tema, aoFechar }) {

  const [dicaAtiva, setDicaAtiva] = useState(0);

  useEffect(() => {

    function tratarTecla(evento) {

      if (evento.key === 'Escape') {

        aoFechar();

      }

    }

    document.addEventListener('keydown', tratarTecla);

    document.body.style.overflow = 'hidden';

    return () => {

      document.removeEventListener('keydown', tratarTecla);

      document.body.style.overflow = '';

    };

  }, [aoFechar]);

  return (

    <div

      className="manual-overlay"

      onMouseDown={(evento) => {

        if (evento.target === evento.currentTarget) {

          aoFechar();

        }

      }}

    >

      <section

        className={`manual-modal modal-${tema.cor}`}

        role="dialog"

        aria-modal="true"

        aria-labelledby="modal-titulo"

      >

        <button

          type="button"

          className="modal-fechar"

          onClick={aoFechar}

          aria-label="Fechar dicas"

        >

          ×

        </button>

        <div className="modal-cabecalho">

          <span className="modal-coracao">♡</span>

          <span className="modal-etiqueta">{tema.numero}</span>

          <h2 id="modal-titulo">{tema.titulo}</h2>

          <p>{tema.descricao}</p>

        </div>

        <div className="modal-conteudo">

          <div className="modal-lista" role="tablist" aria-label="Escolha uma dica">

            {tema.dicas.map((dica, indice) => (

              <button

                key={dica.titulo}

                type="button"

                role="tab"

                aria-selected={dicaAtiva === indice}

                className={`modal-tab ${

                  dicaAtiva === indice ? 'modal-tab-ativa' : ''

                }`}

                onClick={() => setDicaAtiva(indice)}

              >

                <span className="tab-numero">

                  {String(indice + 1).padStart(2, '0')}

                </span>

                <span>{dica.titulo}</span>

                <span className="tab-seta">

                  {dicaAtiva === indice ? '−' : '+'}

                </span>

              </button>

            ))}

          </div>

          <article

            className="modal-detalhe"

            role="tabpanel"

            key={`${tema.id}-${dicaAtiva}`}

          >

            <span className="detalhe-estrela">✳</span>

            <h3>{tema.dicas[dicaAtiva].titulo}</h3>

            <p>{tema.dicas[dicaAtiva].texto}</p>

            <div className="detalhe-assinatura">

              Com carinho, um passo de cada vez <span>♡</span>

            </div>

          </article>

        </div>

        <div className="modal-rodape">

          <span>

            Dica {dicaAtiva + 1} de {tema.dicas.length}

          </span>

          <button

            type="button"

            className="modal-proximo"

            onClick={() => {

              if (dicaAtiva < tema.dicas.length - 1) {

                setDicaAtiva((atual) => atual + 1);

              } else {

                aoFechar();

              }

            }}

          >

            {dicaAtiva < tema.dicas.length - 1

              ? 'Próxima dica →'

              : 'Concluir ♥'}

          </button>

        </div>

        <span className="modal-decoracao decoracao-um" aria-hidden="true">

          ♡

        </span>

        <span className="modal-decoracao decoracao-dois" aria-hidden="true">

          〰

        </span>

      </section>

    </div>

  );

}

export default function Pagina2() {

  const [temaSelecionado, setTemaSelecionado] = useState(null);

  return (

    <main className="manual-page">

      <div className="manual-decor manual-decor-esquerda" aria-hidden="true" />

      <div className="manual-decor manual-decor-direita" aria-hidden="true" />

      <div className="manual-decor manual-decor-folha" aria-hidden="true" />

      <section className="manual-hero">

        <div className="manual-hero-texto">
          
          <h1>

            Guia prático para

            <br />

            você se tornar um

            <br />

            <span>pai incrível.</span>

            <span className="titulo-coracao" aria-hidden="true">

              {' '}♡

            </span>

          </h1>

          <p>

            Aqui você encontra orientações simples e confiáveis para cuidar

            do seu bebê, apoiar sua parceira e viver essa fase com mais

            segurança.

          </p>

          <div className="manual-ondinha" aria-hidden="true">

            〰 〰 〰

          </div>

        </div>
        
      </section>

      <section className="manual-grid" aria-label="Guias para pais">

        {temas.map((tema) => (

          <article

            key={tema.id}

            className={`manual-card manual-card-${tema.cor}`}

          >

            <div className="manual-foto-wrap">

              <img

                src={tema.imagem}

                alt={tema.imagemAlt}

                className="manual-foto"

                loading="lazy"

              />

              <span className="foto-brilho" aria-hidden="true">

                ✦

              </span>

            </div>

            <div className="manual-card-conteudo">

              <div className="manual-card-topo">

                <span className="manual-numero">{tema.numero}</span>

                <span className="manual-card-icone" aria-hidden="true">

                  {tema.icone}

                </span>

              </div>

              <h2>{tema.titulo}</h2>

              <p className="manual-card-subtitulo">{tema.subtitulo}</p>

              <ul className="manual-lista">

                {tema.pontos.map((ponto) => (

                  <li key={ponto}>

                    <span aria-hidden="true">✿</span>

                    {ponto}

                  </li>

                ))}

              </ul>

              <button

                type="button"

                className={`manual-botao manual-botao-${tema.cor}`}

                onClick={() => setTemaSelecionado(tema)}

              >

                Ver dicas <span aria-hidden="true">→</span>

              </button>

            </div>

            <span className="manual-card-coracao" aria-hidden="true">

              ♡

            </span>

          </article>

        ))}

      </section>

      <section className="manual-rapidas">

        <div className="rapidas-intro">

          <span className="rapidas-icone" aria-hidden="true">

            ☼

          </span>

          <div>

            <span className="rapidas-etiqueta">UM LEMBRETE CARINHOSO</span>

            <h2>Dicas rápidas para o dia a dia</h2>

            <p>

              Pequenas atitudes que fazem toda a diferença nessa nova jornada.

            </p>

          </div>

        </div>

        <div className="rapidas-grid">

          {dicasRapidas.map((dica) => (

            <article className="rapida-item" key={dica.titulo}>

              <span className="rapida-item-icone" aria-hidden="true">

                {dica.icone}

              </span>

              <h3>{dica.titulo}</h3>

              <p>{dica.texto}</p>

            </article>

          ))}

        </div>

      </section>

      <footer className="manual-footer">

        <span aria-hidden="true">〰</span>

        <p>Ser pai é aprender todos os dias.</p>

        <span aria-hidden="true">♡</span>

      </footer>

      {temaSelecionado && (

        <ModalDicas

          tema={temaSelecionado}

          aoFechar={() => setTemaSelecionado(null)}

        />

      )}

    </main>

  );

}