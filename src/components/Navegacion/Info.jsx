import React from 'react'
import Logo2 from "./Fotos/Logo2.png";

function info() {
  return (
    <div>
        <div className='container'>
          <div className='row' style={{marginTop:50, marginBottom:50}}>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <div className='row'>
                <h1 style={{fontWeight: 800, fontSize:43}}>¿Que Vendemos?</h1>
                <p style={{fontWeight: 500, fontSize:19, color:"grey"}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <div className='row'>
                <h1 style={{fontWeight: 800, fontSize:43}}>¿Cómo Funciona?</h1>
                <div className='d-flex align-items-start justify-content-start'>
                  <ol style={{fontWeight: 500, fontSize:19, color:"grey"}}>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                    <li>hola</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
            <h1 style={{fontWeight: 800, fontSize:43}}>Ubícanos</h1>
            <p style={{fontWeight: 500, fontSize:19, color:"grey"}}>Aquí podrás ver todas las comunas de Santiago que califican para entregas presenciales, y los puntos de encuentro en dichas comunas.</p>
            <div className='d-flex align-items-center justify-content-center' style={{marginTop: 50, marginBottom: 50}}>
              <img src={Logo2} height="400" style={{borderRadius:20}}/>
            </div>
            <h1 style={{fontWeight: 800, fontSize:43}}>Términos de Servicio</h1>
            <p style={{fontWeight: 500, fontSize:19, color:"grey", marginBottom:50}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
        </div>
    </div>
  )
}
export default info;