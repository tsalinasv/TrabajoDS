import React from 'react'
import {HashLink as NavLink} from "react-router-hash-link"
import Logo2 from "./Fotos/Logo2.png";
import { instagram, twitter, linkedin, facebook} from "./Fotos";

function Footer() {
  return (
    <div>
        <footer className = "py-4 bg-dark" style={{color: "#D7D4D3"}}>
            <div className="container">
                <nav className="row">
                    <div className='col-md-6 d-flex align-items-center justify-content-start'>
                        <nav className="row">
                            <NavLink to="/inicio" ><img src={Logo2} height="150"/></NavLink>
                            <h5 style={{fontWeight: 500, marginTop:15}} className="col-md-9">Tu nuevo lugar favorito para conseguir todos tus productos.</h5>
                        </nav>
                    </div>
                    <ul className='col-md-2 justify-content-start list-unstyled' style = {{lineHeight: 2.5, fontWeight: 500, marginTop:10}}>
                        <li><h5 style={{fontWeight: 600, color: "white"}}>Links Útiles</h5></li>
                        <li><NavLink to="/contenido/#">Contenido</NavLink></li>
                        <li><NavLink to="/contenido/#">Cómo Funciona</NavLink></li>
                        <li><NavLink to="/soporte/#">Soporte</NavLink></li>
                        <li><NavLink to ="/contenido/#Ubicación">Ubícanos</NavLink></li>
                        <li><NavLink to="/contenido/#Términos">Términos de Servicio</NavLink></li>
                    </ul>                    
                    <ul className='col-12 col-md-2 justify-content-start list-unstyled' style = {{lineHeight: 2.5, fontWeight: 500, marginTop:10}}>
                        <li><h5 style={{fontWeight: 600, color: "white"}}>Comunidad</h5></li>
                        <li><NavLink to="/soporte/#">FAQ</NavLink></li>
                        <li><NavLink to="/cliente/#">Clientes</NavLink></li>
                        <li><NavLink to="/cliente/#Sugerencias">Sugerencias</NavLink></li>
                        <li><NavLink to="/blog/#">Blog</NavLink></li>
                        <li><NavLink to="/cliente/#Newsletter">Newsletters</NavLink></li>
                    </ul>
                    <ul className='col-12 col-md-2  justify-content-start list-unstyled' style = {{lineHeight: 2.5, fontWeight: 500, marginTop:10}}>
                        <li><h5 style={{fontWeight: 600, color: "white"}}>Afiliaciones</h5></li>
                        <li><NavLink to="/afiliados/#">Afiliados</NavLink></li>
                        <li><NavLink to="/afiliados/#NewPartner">Convertirse en Afiliado</NavLink></li>
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
                        <a href="https://twitter.com/ElBoliche_cl" target="_blank" rel="noreferrer"><img src={twitter} className="mx-2" height="20"/></a>
                        <a href="#" target="_blank" rel="noreferrer"><img src={linkedin} className="mx-2" height="20"/></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}
export default Footer;