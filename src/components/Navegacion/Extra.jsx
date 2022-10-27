import React from 'react'
import Logo from "./Fotos/Logo.png";

function Extra() {
  return (
    <div>
        <div className='container'>
            <h1 className="d-flex align-items-center justify-content-center" style={{fontWeight: 300, fontSize:43, marginTop:50, marginBottom:50}}>Blog Moda y Belleza</h1>
            <div className='row'>
                <div className='col-md-7 d-flex align-items-center justify-content-start'>
                    <h2 style={{fontWeight:500, marginBottom:50, marginTop:50}}>Nuevas Noticias de Interés</h2>
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-center'>
                    <img src={Logo} height="100"/>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-7 d-flex align-items-center justify-content-center'>
                    <img src={Logo} height="100"/>
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-end'>
                    <h2 style={{fontWeight:500, marginBottom:50, marginTop:50}}>Tu Salud Primero</h2>
                </div>
            </div>
            <h2 className="d-flex align-items-center justify-content-center"style={{fontWeight:500, marginBottom:50, marginTop:50}}>El Poder de las "Pymes"</h2>  
        </div>
    </div>
  )
}
export default Extra;