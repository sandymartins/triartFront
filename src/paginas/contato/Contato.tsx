import React from 'react';
import './Contato.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';



export default function Contato() {

return (

<main>

<section className='ctt-h1'>
    <h1 className='ctt-h1'>Equipe TriArt </h1>
</section>

<section className='main-ctt'>

<div className="container-ctt">


  <div className="cards-ctt">
    <div className="imgBx">
      <img src="https://i.imgur.com/KPjXKmW.jpg" />
    </div>

    <div className="content-ctt">
      <div className="details">
        <h2>Brenda Chagas<br /><span>Desenvolvedora Full Stack</span></h2>
        <ul className="social_icons">
          <li><a href="https://www.linkedin.com/in/brenda-chagas/"><i className="fa fa-linkedin"></i><LinkedInIcon /></a></li>
          <li><a href="https://github.com/Brehchs"><i className="fa fa-github"></i><GitHubIcon /></a></li>
        </ul>
      </div>
    </div>
  </div>

  <div className="cards-ctt">
    <div className="imgBx">
      <img src="https://i.imgur.com/vUZs8JC.jpg" />
    </div>

    <div className="content-ctt">
      <div className="details">
        <h2>Flavio Messias<br /><span>Desenvolvedor Full Stack</span></h2>
        <ul className="social_icons">
          <li><a href="https://www.linkedin.com/in/flaviohmneto/"><i className="fa fa-linkedin"></i><LinkedInIcon /></a></li>
          <li><a href="https://github.com/FlavioMessias"><i className="fa fa-github"></i><GitHubIcon /></a></li>
        </ul>
      </div>
    </div>
   </div>

   <div className="cards-ctt">
    <div className="imgBx">
      <img src="https://i.imgur.com/qjMstZa.jpg" />
    </div>

    <div className="content-ctt">
      <div className="details">
        <h2>Leonardo Gonçalves<br /><span>Desenvolvedor Full Stack</span></h2>
        <ul className="social_icons">
          <li><a href="https://www.linkedin.com/in/leonardo-gonçalves-0020b2246/"><i className="fa fa-linkedin"></i><LinkedInIcon /></a></li>
          <li><a href="https://github.com/leogs2003"><i className="fa fa-github"></i><GitHubIcon /></a></li>
        </ul>
      </div>
    </div> 
   </div>

   <div className="cards-ctt">
    <div className="imgBx">
      <img src="https://i.imgur.com/HkGXStQ.jpg" />
    </div>

    <div className="content-ctt">
      <div className="details">
        <h2>Lucas Pereira<br /><span>Desenvolvedor Full Stack</span></h2>
        <ul className="social_icons">
          <li><a href="https://www.linkedin.com/in/lucascostapereira/"><i className="fa fa-linkedin"></i><LinkedInIcon /></a></li>
          <li><a href="https://github.com/pereiracaslu"><i className="fa fa-github"></i><GitHubIcon /></a></li>
        </ul>
      </div>
    </div> 
   </div>

   <div className="cards-ctt">
    <div className="imgBx">
      <img src="https://i.imgur.com/bbgD9eU.jpg" />
    </div>

    <div className="content-ctt">
      <div className="details">
        <h2>Mateus Queiroz<br /><span>Desenvolvedor Full Stack</span></h2>
        <ul className="social_icons">
          <li><a href="https://www.linkedin.com/in/mateus-queiroz-davidson96/"><i className="fa fa-linkedin"></i><LinkedInIcon /></a></li>
          <li><a href="https://github.com/MQueirozD"><i className="fa fa-github"></i><GitHubIcon /></a></li>
        </ul>
      </div>
    </div> 
   </div>

   <div className="cards-ctt">
    <div className="imgBx">
      <img src="https://i.imgur.com/r3Ef8X4.jpg" />
    </div>

    <div className="content-ctt">
      <div className="details">
        <h2>Mirelle Mota<br /><span>Desenvolvedora Full Stack</span></h2>
        <ul className="social_icons">
          <li><a href="https://www.linkedin.com/in/mirelle-mota/"><i className="fa fa-linkedin"></i><LinkedInIcon /></a></li>
          <li><a href="https://github.com/MirelleMota"><i className="fa fa-github"></i><GitHubIcon /></a></li>
        </ul>
      </div>
    </div> 
   </div>

   <div className="cards-ctt">
    <div className="imgBx">
      <img src="https://i.imgur.com/qkJRYSH.jpg" />
    </div>

    <div className="content-ctt">
      <div className="details">
        <h2>Sandy Martins<br /><span>Desenvolvedora Full Stack</span></h2>
        <ul className="social_icons">
          <li><a href="https://www.linkedin.com/in/sandymartinss/"><i className="fa fa-linkedin"></i><LinkedInIcon /></a></li>
          <li><a href="https://github.com/sandymartins"><i className="fa fa-github"></i><GitHubIcon /></a></li>
        </ul>
      </div>
    </div> 
   </div>

  </div>

</section>

</main>
);
}