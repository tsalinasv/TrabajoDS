import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Barra_nav from '../Navegacion/Nav'
import Footer from '../Navegacion/Footer';
import Promos from '../Navegacion/Promos';

function Promociones() {
  return (
    <div>
        <Barra_nav/> 
        <Promos/>
        <Footer/> 
    </div>
  )
}
export default Promociones;
