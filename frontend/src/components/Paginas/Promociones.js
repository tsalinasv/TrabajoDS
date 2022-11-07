import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Barra_nav from '../Navegacion/Nav'
import Footer from '../Navegacion/Footer';
import Promos from '../Navegacion/Promos';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Promociones() {
  return (
    <div>
        <ToastContainer/>
        <Barra_nav/> 
        <Promos/>
        <Footer/> 
    </div>
  )
}
export default Promociones;
