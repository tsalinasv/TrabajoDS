import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Barra_nav from '../Navegacion/Nav';
import Slide_grande from '../Navegacion/Slides';
import Footer from '../Navegacion/Footer';
import ProdPop from '../Navegacion/ProdPop';



function Inicio() {
  return (
    <div>
      <Barra_nav/>
      <Slide_grande/>
      <ProdPop/>
      <Footer/>
    </div>
  )
}

export default Inicio;

