import React from 'react'
import Like from "./Fotos/Like.png";
import { Form } from 'react-formio';

function Testimonios() {
  return (
    <div>
        <div className='container' style={{marginBottom:50}}>
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
                        <div className='caja col-md-5 d-flex align-items-start justify-content-start' style={{backgroundColor:"#a6546043", borderRadius:20, marginRight:20, marginTop:20}}>
                            <nav className='row' style={{margin:10}}>
                                <h1 style={{fontWeight: 500, fontSize:85, color:"#a65460"}}>"</h1>
                                <p style={{fontWeight:500}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                                <div className='col-md-3 d-flex align-items-center justify-content-start'>
                                    <img src={Like} height="40"/>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-start'>
                                    <nav className='row'>
                                        <p style={{fontWeight:800, fontSize:17, marginBottom:1, marginTop:15}}>Rocío Benavides</p>
                                        <p style={{fontWeight:500, fontSize:12, marginTop:1}}>Dueña Fundadora</p>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                        <div className='caja col-md-5 d-flex align-items-center justify-content-start' style={{backgroundColor:"#a6546043", borderRadius:20, marginTop:20}}>
                            <nav className='row' style={{margin:10}}>
                                <h1 style={{fontWeight: 500, fontSize:85, color:"#a65460"}}>"</h1>
                                <p style={{fontWeight:500}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                                <div className='col-md-3 d-flex align-items-center justify-content-start'>
                                    <img src={Like} height="40"/>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-start'>
                                    <nav className='row'>
                                        <p style={{fontWeight:800, fontSize:17, marginBottom:1, marginTop:15}}>Rocío Benavides</p>
                                        <p style={{fontWeight:500, fontSize:12, marginTop:1}}>Dueña Fundadora</p>
                                    </nav>
                                </div>
                            </nav>                        
                        </div>
                        <div className='caja col-md-5 d-flex align-items-center justify-content-start' style={{backgroundColor:"#a6546043", borderRadius:20, marginTop:20, marginRight:20}}>
                            <nav className='row' style={{margin:10}}>
                                <h1 style={{fontWeight: 500, fontSize:85, color:"#a65460"}}>"</h1>
                                <p style={{fontWeight:500}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                                <div className='col-md-3 d-flex align-items-center justify-content-start'>
                                    <img src={Like} height="40"/>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-start'>
                                    <nav className='row'>
                                        <p style={{fontWeight:800, fontSize:17, marginBottom:1, marginTop:15}}>Rocío Benavides</p>
                                        <p style={{fontWeight:500, fontSize:12, marginTop:1}}>Dueña Fundadora</p>
                                    </nav>
                                </div>
                            </nav>                       
                        </div>
                        <div className='caja col-md-5 d-flex align-items-center justify-content-start' style={{backgroundColor:"#a6546043", borderRadius:20, marginTop:20}}>
                            <nav className='row' style={{margin:10}}>
                                <h1 style={{fontWeight: 500, fontSize:85, color:"#a65460"}}>"</h1>
                                <p style={{fontWeight:500}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqu</p>
                                <div className='col-md-3 d-flex align-items-center justify-content-start'>
                                    <img src={Like} height="40"/>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-start'>
                                    <nav className='row'>
                                        <p style={{fontWeight:800, fontSize:17, marginBottom:1, marginTop:15}}>Rocío Benavides</p>
                                        <p style={{fontWeight:500, fontSize:12, marginTop:1}}>Dueña Fundadora</p>
                                    </nav>
                                </div>
                            </nav>                      
                        </div>
                    </nav>
                </div>
                <div className='col-md-5 d-flex align-items-center justify-content-start'>
                    <Form src="https://fgjgvtjwbhivqlw.form.io/sugerencias"/>
                </div>
            </nav>
            <div style={{marginTop:20, marginBottom:40}}>
                <h1 style={{fontWeight: 800, fontSize:43}}>Inscríbtete a Nuestro Newsletter</h1>
                <Form src="https://fgjgvtjwbhivqlw.form.io/newsletter" />
            </div>
        </div>
    </div>
  )
}
export default Testimonios;
