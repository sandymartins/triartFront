import React from 'react'
import './Sobre.css';

function Sobre() {
  return (
    
    // <h2>cursos de artesanato e eventos culturais</h2>
    // <h2>CUIDAR DAS PESSOAS!
    // É dar acesso à arte, conhecimento, dignidade, alegria e a perspectiva de uma vida melhor, mais leve e consciente.</h2>
    // <h3>Venha para a Arttere
    // Arttere é um espaço gratuito criado para todos os profissionais envolvidos no amplo universo das artes, possibilitando que as pessoas exponham seus trabalhos e perfis livremente.
    
    // É também um centralizador de atividades culturais com agenda de eventos, informações sobre museus, galerias e fundações e oportunidades no mundo artístico como concursos, salões, exposições, leilões, entre outros.</h3>
  
    /* Inserir um campo para falar sobre o objetivo */
<body>
<section className='nossaMissao'>

<h1 className='h1textPlace'>Tri Art - A Tribo da COMUNIDADE</h1>

  <div className='logoSobre'>
    <img src="https://i.imgur.com/UDBIW93.png" alt="Tribo Artesão" />
  </div>

<div className='textLogoAll'>
  <div className='textlogo'>
  <h2 className='h2nossaMissao'>NOSSA MISSÃO</h2>
  <h6 className='nossaMissaotxt'>
    O E-commerce Tri Art é uma organização sem fins lucrativos
    para o desenvolvimento cultural e artístico.

    A plataforma é um espaço gratuito criado para todos
    os profissionais envolvidos no amplo universo das artes, possibilitando
    que as pessoas exponham seus trabalhos e perfis livremente.

    É também um centralizador de atividades culturais, 
    informações sobre museus, galerias e fundações e oportunidades no mundo artístico como concursos, 
    salões, exposições, leilões, entre outros.

    Se você quer expor suas obras e trabalhos, divulgar sua galeria ou acompanhar o universo 
    das artes CADASTRE-SE e seja também parte nosso TIME.
    </h6>
  </div>
  </div>
  <div className='textPlace'>
  <h2 className='h2titleCarousel'>Conheça os espaços culturais com entrada franca em SP</h2>
  </div>


  <main className='carousel-main'> 
<div className="container">
  <div className="carousel">
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://pinacoteca.org.br/">Pinacoteca</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://masp.org.br/">Masp</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.redbull.com/br-pt/collections/red-bull-station">Red Bull Station</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="http://www.acamls.org.br/">Lasar Segal</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://ccbb.com.br/">CCBB</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.sescsp.org.br/">Sesc 24 de maio</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.farolsantander.com.br/#/">Farol Santander</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.archdaily.com.br/br/786322/porto-seguro-cultural-center-sao-paulo-arquitetura">Espaço Porto Seguro</a></span></div>
    <div className="carousel__face"><span> <a className='linkCarousel' href="https://www.prefeitura.sp.gov.br/cidade/secretarias/cultura/bma/">Biblioteca Mário de Andrade</a></span></div>
  </div>
</div>
</main>


{/* ADICIONANDO CARDS DE CURSOS */}


{/* arrumar os links que levam aos cursos*/}
<section className='cardCursos'>
  <h2 className='textCursos'>Cursos para a comunidade</h2>
<div className="band">
<div className="item-2">
          <a href="https://www.ginead.com.br/curso/curso-estudo-de-cor-e-tipografia" className="card">
            <div className="thumb" style={{backgroundImage: `url("https://i.imgur.com/7SHHmmD.jpg")` }}></div>
            <article className='articleCard'>
              <h1 className='h1Card'>ESTUDO DE COR E TIPOGRAFIA</h1>
              <p className='h1Card'>O ciclo de aulas 'Os mestres da cor', aulas on-line expositivas, vai abordar a vida e a obra dos 4 mestres da cor.</p>
            </article>
          </a>
    </div>
    <div className="item-3">
      <a href="https://www.feevale.br/cursos-e-eventos/mulheres-fotografas-um-panorama-fotografico-dos-cinco-continentes" className="card">
        <div className="thumb" style={{backgroundImage: `url("https://i.imgur.com/xczwTYE.jpg")` }}></div>
        <article className='articleCard'>
          <h1 className='h1Card'>MULHERES NA FOTOGRAFIA</h1>
          <p className='h1Card'>As mulheres entraram na história da arte como arquétipos para artistas. Aprendizagem das práticas e processos artísticos.</p>
        </article>
      </a>
    </div>
    <div className="item-4">
          <a href="https://www.finuni.art/veneza360" className="card">
            <div className="thumb" style={{backgroundImage: `url("https://i.imgur.com/rjhMRqw.jpg")` }}></div>
            <article className='articleCard'>
              <h1 className='h1Card'>CURSO ONLINE VENEZA</h1>
              <p className='h1Card'>Decifrando Veneza por meio de sua história, sua arte e sua arquitetura</p>
            </article>
          </a>
    </div>
    <div className="item-5">
          <a href="https://www.cursou.com.br/geral/harmonia-de-cores/" className="card">
            <div className="thumb" style={{backgroundImage: `url("https://i.imgur.com/zVd5ytG.jpg")` }}></div>
            <article className='articleCard'>
              <h1 className='h1Card'>ESTUDOS CROMÁTICOS DE JOHANNES ITTEN</h1>
              <p className='h1Card'>Curso baseado na metodologia de Johannes Itten de percepção visual através dos contrastes cromáticos.</p>
            </article>
          </a>
    </div>
  </div> 
</section>
</section>
</body>

 


  )
}

export default Sobre