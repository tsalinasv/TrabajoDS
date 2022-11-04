import React, {useState} from 'react'
import Footer from '../Navegacion/Footer';
import Barra_nav from '../Navegacion/Nav'
import Testimonios from '../Navegacion/Testimonios';
import {useLocalStorage} from "../Navegacion/useLocalStorage";

function Clientes() {
  const[times, setTimes] = useLocalStorage("times",0)
  return (
    <div>
        <Barra_nav/>
        <Testimonios/>
        <button onClick = {() => setTimes(times+1)}>Inscribeme</button>
        <span style={{fontWeight:500, color: "grey"}}>{times} Personas Inscritas</span>
        <Footer/>
    </div>
  )
}
export default Clientes;