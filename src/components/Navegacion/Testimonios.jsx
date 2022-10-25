import React from 'react'

function Testimonios() {
  return (
    <div>
        <div className='container'>
            <nav className='row' style={{marginTop:50}}>
                <div className='col-md-6 d-flex align-items-center justify-content-start' >
                    <nav className='row'>
                        <h1 style={{fontWeight: 800, fontSize:43}}>Que Dicen Nuestros</h1>
                        <h1 style={{fontWeight: 800, fontSize:43, marginTop: 1.8}}>Clientes de Nosotros</h1>
                    </nav>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-start'>
                    <h5 style={{lineHeight:1.8, color: "grey"}}>La mejor forma de conectar con nuestros clientes es escuchando sus opiniones y nuevas ideas.</h5>
                </div>
            </nav>
            <nav className='row'>
                <div className='col-md-7 d-flex align-items-center justify-content-start' style={{marginTop:50, marginBottom:50}}>
                    <nav className='row'>
                        <div className='col-md-6 d-flex align-items-center justify-content-start'>
                            <p style={{marginLeft:5, marginRight:5, marginTop:5, marginBottom:5}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-start'>
                            <p style={{marginLeft:5, marginRight:5, marginTop:5, marginBottom:5}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-start'>
                            <p style={{marginLeft:5, marginRight:5, marginTop:5, marginBottom:5}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                        </div>
                        <div className='col-md-6 d-flex align-items-center justify-content-start'>
                            <p style={{marginLeft:5, marginRight:5, marginTop:5, marginBottom:5}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                        </div>
                    </nav>
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-start'>
                    <h3>Aqui va una encuesta</h3>
                </div>
            </nav>
        </div>
    </div>
  )
}
export default Testimonios;
