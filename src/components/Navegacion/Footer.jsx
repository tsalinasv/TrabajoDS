import React from 'react'
import {NavLink} from "react-router-dom"
import Logo2 from "./Fotos/Logo2.png";
import { instagram, twitter, linkedin, facebook} from "./Fotos";

function Footer() {
  return (
    <div>
        <footer className = "py-4 bg-dark" style={{color: "#D7D4D3"}}>
            <div className="container">
                <nav className="row">
                    <div className='col-12 col-md-6 d-flex align-items-center justify-content-start'>
                        <div className='row'>
                            <NavLink to="/inicio" ><img src={Logo2} className="mx-2" height="150"/></NavLink>
                        </div>
                        <div className='row'>
                            <h1>Tu nuevo lugar favorito para conseguir tus productos</h1>
                        </div>
                    </div>
                    <ul className='col-md-2 justify-content-start list-unstyled' style = {{lineHeight: 2.5, fontWeight: 500}}>
                        <li><h5 style={{fontWeight: 600, color: "white"}}>Links Útiles</h5></li>
                        <li>Contenido</li>
                        <li>Cómo Funciona</li>
                        <li>Soporte</li>
                        <li>Ubícanos</li>
                        <li>Terminos y servicios</li>
                    </ul>                    
                    <ul className='col-12 col-md-2 justify-content-start list-unstyled' style = {{lineHeight: 2.5, fontWeight: 500}}>
                        <li><h5 style={{fontWeight: 600, color: "white"}}>Comunidad</h5></li>
                        <li>FAQ</li>
                        <li><NavLink to="/cliente">Clientes</NavLink></li>
                        <li>Sugerencias</li>
                        <li>Blog</li>
                        <li>Newsletters</li>
                    </ul>
                    <ul className='col-12 col-md-2  justify-content-start list-unstyled' style = {{lineHeight: 2.5, fontWeight: 500}}>
                        <li><h5 style={{fontWeight: 600, color: "white"}}>Afiliaciones</h5></li>
                        <li>Afiliados</li>
                        <li>Convertirse en Afiliado</li>
                    </ul>
                </nav>
                <hr/>
                <div className='d-flex'>
                    <div className="justify-content-start"  style={{width: "85%", fontWeight: 500, color: "white"}}>
                        Copyright © 2022 El Boliche. Todos los derechos reservados.
                    </div>
                    <div className="justify-content-end" >
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