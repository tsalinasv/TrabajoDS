import React from 'react'
import {NavLink} from "react-router-dom"
import Logo from "./Fotos/Logo.png";
import { instagram, twitter, linkedin, facebook} from "./Fotos";

function Footer() {
  return (
    <div>
        <footer className = "text-white py-4 bg-dark">
            <div className="container">
                <nav className="row">
                    <div className='col-12 col-md-5 d-flex align-items-center justify-content-start'>
                        <NavLink to="/inicio" ><img src={Logo} className="mx-2" height="150"/></NavLink>
                        <h1>&nbsp;El&nbsp;</h1>
                        <h1 style = {{color: "#a65460"}}> Boliche</h1>
                    </div>
                    <ul className='col-12 col-md-2 justify-content-start list-unstyled' style = {{lineHeight: 2.5}}>
                        <li><h4 style={{fontWeight: 'bold'}}>Links Útiles</h4></li>
                        <li>Contenido</li>
                        <li>Cómo Funciona</li>
                        <li>Soporte</li>
                        <li>Ubícanos</li>
                        <li>Terminos y servicios</li>
                    </ul>                    
                    <ul className='col-12 col-md-2 justify-content-start list-unstyled' style = {{lineHeight: 2.5}}>
                        <li><h4 style={{fontWeight: 'bold'}}>Comunidad</h4></li>
                        <li>Preguntas Frecuentes</li>
                        <li><NavLink to="/cliente">Clientes</NavLink></li>
                        <li>Sugerencias</li>
                        <li>Blog</li>
                        <li>Newsletters</li>
                    </ul>
                    <ul className='col-12 col-md-2  justify-content-start list-unstyled' style = {{lineHeight: 2.5}}>
                        <li><h4 style={{fontWeight: 'bold'}}>Afiliaciones</h4></li>
                        <li>Afiliados</li>
                        <li>Convertirse en Afiliado</li>
                    </ul>
                </nav>
                <hr/>
                <div className='d-flex'>
                    <div className="justify-content-start " style={{ width: "85%"}}>
                        Copyright © 2022 El Boliche. Todos los derechos reservados.
                    </div>
                    <div className="justify-content-end">
                        <a href="https://www.instagram.com/elboliche__/?hl=es-la" target="_blank" rel="noreferrer"><img src={instagram} className="mx-2" height="20"/></a>
                        <a href="#" target="_blank" rel="noreferrer"><img src={facebook} className="mx-2" height="20"/></a>
                        <a href="#" target="_blank" rel="noreferrer"><img src={twitter} className="mx-2" height="20"/></a>
                        <a href="#" target="_blank" rel="noreferrer"><img src={linkedin} className="mx-2" height="20"/></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
export default Footer;