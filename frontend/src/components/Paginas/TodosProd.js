import React from 'react'
import Footer from '../Navegacion/Footer';
import Barra_nav from '../Navegacion/Nav';
import TodoProd from "../Navegacion/TodoProd";

function TodosProd() {
  return (
    <div>
        <Barra_nav/>
        <TodoProd/>
        <Footer/>
    </div>
  )
}
export default TodosProd;