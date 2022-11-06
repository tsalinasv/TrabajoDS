import React from 'react'
import Footer from '../Navegacion/Footer';
import Barra_nav from '../Navegacion/Nav';
import TodoProd from "../Navegacion/TodoProd";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function TodosProd() {
  return (
    <div>
        <ToastContainer/>
        <Barra_nav/>
        <TodoProd/>
        <Footer/>
    </div>
  )
}
export default TodosProd;