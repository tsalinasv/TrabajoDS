import React from 'react'
import Footer from '../Navegacion/Footer';
import Barra_nav from '../Navegacion/Nav'
import NewProd from '../Navegacion/NewProd';
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function NuevosProd() {
  return (
    <div>
        <ToastContainer/>
        <Barra_nav/>
        <NewProd/>
        <Footer/>
    </div>
  )
}
export default NuevosProd;