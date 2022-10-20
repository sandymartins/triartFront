import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

// teste

function Home() {
  return (
    <main className="mainHome">    
      <section>
      <div>
        <h2 className="MsgEmpreendedor">
          Conectando o empreendedor rural com o mundo!
        </h2>
        <Link to="/produtos">
          <button className="borderCompras">Às compras!</button>
        </Link>
        <Link to="/produtos">

          {/* colocar um HOVER PARA ALTERAR PARA PRETO QUANDO CLICAR */}
          <img
            src="https://i.imgur.com/AcggpOm.png"
            alt="Logo"
            className="bgLogo"
          />
        </Link>
      </div>
      <div>
        <img
          src="https://i.imgur.com/nyLJUod.jpg"
          alt="Imagem de Fundo"
          className="bgHome"
        />
      </div>
    </section>



    {/* Mensagem sobre a ODS 1*/}
    <section className="bg-cardHome">

    <div id="container-home">	
    
    <div className="product-details">
      
    <h1>Projeto Desenvolvido afins da ODS 1</h1>
    <span className="hint-star star">
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star" aria-hidden="true"></i>
      <i className="fa fa-star-o" aria-hidden="true"></i>
    </span>
      
        <p className="information">" Let's spread the joy , here is Christmas , the most awaited day of the year.Christmas Tree is what one need the most. Here is the correct tree which will enhance your Christmas.</p>

      
      
  <div className="control">
    <Link to='/produtos'>
    <button className="btn-Home">
    <span className="price">TriArt</span>
    <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
    <span className="buy">Produtos</span>
  </button>
      </Link>
    
  </div>
        
  </div>
    
  <div className="product-image">
    
    <img src="https://i.imgur.com/Ig9Ilgi.jpg" alt="" />
    

  <div className="info">
    <h2> Description</h2>
    <ul>
      <li><strong>Height : </strong>5 Ft </li>
      <li><strong>Shade : </strong>Olive green</li>
      <li><strong>Decoration: </strong>balls and bells</li>
      <li><strong>Material: </strong>Eco-Friendly</li>
      
    </ul>
  </div>
  </div>

  </div>










    </section>

<section className="carousel-fundo">
<div className="carousel-wrapper">
  <div className="carousel-container">
    <div className="carouselHome">
      <div className="image-one"></div>
      <div className="image-two"></div>
      <div className="image-three"></div>
    </div>
  </div>
</div>
</section>








  </main>


  );
}

export default Home;
