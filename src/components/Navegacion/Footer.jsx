import React from 'react'
import {Link} from "react-router-dom"
import Logo from "./Fotos/Logo.png";
import IG from "./Fotos/IG.png";

function Footer() {
  return (
    <div>
        <footer className = "text-white py-4 bg-dark">
            <div className="container">
                <nav className="row">
                    <Link to="/inicio" className='col-12 col-md-3 d-flex align-items-center justyfy-content-center'>
                        <img src={Logo} className="mx-2" height="100"/>
                    </Link>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li style={{fontWeight: 'bold'}}>El Boliche</li>
                        <li>
                            <Link to ="/nosotros" class="text-reset">Nosotros</Link>
                        </li>
                        <li>Soporte</li>
                        <li>Afiliados</li>
                    </ul>                    
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li style={{fontWeight: 'bold'}}>Extras</li>
                        <li>Preguntas Frecuentes</li>
                        <li>Experiencias de Clientes</li>
                        <li>Recomendaciones</li>
                    </ul>
                    <ul className='col-12 col-md-3 list-unstyled'>
                        <li style={{fontWeight: 'bold'}}>Contacto</li>
                        <li>+56 9 7883 0689</li>
                        <li>+56 9 8276 9156</li>
                    </ul>
                </nav>
                <hr/>
                <nav className='center'>
                    <img src={IG} height="30"/>
                    <p>{" "}</p>
                    <p style={{textAlign: "center"}} className='font-weight-bold mb2'>©Copyright. Todos los derechos reservados</p>
                </nav>
            </div>
        </footer>
    </div>
  )
}
export default Footer;