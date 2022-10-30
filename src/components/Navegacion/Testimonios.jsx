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
                        <h1 id="Comentarios" style={{fontWeight: 800, fontSize:43}}>Que Dicen Nuestros</h1>
                        <h1 style={{fontWeight: 800, fontSize:43, marginTop: 1.8}}>Clientes de Nosotros</h1>
                    </nav>
                </div>
                <div className='col-md-6 d-flex align-items-center justify-content-start'>
                    <h5 style={{lineHeight:1.8, color: "grey"}}>La mejor forma de conectar con nuestros clientes es escuchando sus opiniones y nuevas ideas.</h5>
                </div>
            </nav>
            <nav className='row'>
                <div className='col-md-8 d-flex align-items-center justify-content-start' style={{marginTop:50, marginBottom:50}}>
                    <nav className='row'>
                        <div className='caja col-md-5 d-flex align-items-start justify-content-start' style={{backgroundColor:"#a6546043", borderRadius:20, marginRight:20, marginTop:20}}>
                            <nav className='row' style={{margin:10}}>
                                <h1 style={{fontWeight: 500, fontSize:85, color:"#a65460"}}>"</h1>
                                <p style={{fontWeight:500}}>"Me encantó! El servicio es extremadamente bueno, los productos llegaron rápido y tal como se veian en las fotos. Se lo recomendé a todas mis amigas."</p>
                                <div className='col-md-3 d-flex align-items-center justify-content-start'>
                                    <img src={Like} height="40"/>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-start'>
                                    <nav className='row'>
                                        <p style={{fontWeight:800, fontSize:17, marginBottom:1, marginTop:15}}>Sofía Barriga</p>
                                        <p style={{fontWeight:500, fontSize:12, marginTop:1}}>Clienta</p>
                                    </nav>
                                </div>
                            </nav>
                        </div>
                        <div className='caja col-md-5 d-flex align-items-center justify-content-start' style={{backgroundColor:"#a6546043", borderRadius:20, marginTop:20}}>
                            <nav className='row' style={{margin:10}}>
                                <h1 style={{fontWeight: 500, fontSize:85, color:"#a65460"}}>"</h1>
                                <p style={{fontWeight:500}}>"Comprar en mi propia tienda me permite tener la misma experiencia que cualquier clienta y como siempre, nuestro staff entrega un servicio increible."</p>
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
                                <p style={{fontWeight:500}}>"Quedé fascinada con la calidad de los productos y del servico, me equivoqué en una talla y me lo cambiaron sin ningún inconveniente. Recomendadísimo!"</p>
                                <div className='col-md-3 d-flex align-items-center justify-content-start'>
                                    <img src={Like} height="40"/>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-start'>
                                    <nav className='row'>
                                        <p style={{fontWeight:800, fontSize:17, marginBottom:1, marginTop:15}}>Javiera Araneda</p>
                                        <p style={{fontWeight:500, fontSize:12, marginTop:1}}>Clienta</p>
                                    </nav>
                                </div>
                            </nav>                       
                        </div>
                        <div className='caja col-md-5 d-flex align-items-center justify-content-start' style={{backgroundColor:"#a6546043", borderRadius:20, marginTop:20}}>
                            <nav className='row' style={{margin:10}}>
                                <h1 style={{fontWeight: 500, fontSize:85, color:"#a65460"}}>"</h1>
                                <p style={{fontWeight:500}}>"Súper seguro y confiable! Contestaron todas mis dudas y pude comprar justo lo que necesitaba. Y lo mejor de todo es que me llegó en unos pocos días."</p>
                                <div className='col-md-3 d-flex align-items-center justify-content-start'>
                                    <img src={Like} height="40"/>
                                </div>
                                <div className='col-md-9 d-flex align-items-center justify-content-start'>
                                    <nav className='row'>
                                        <p style={{fontWeight:800, fontSize:17, marginBottom:1, marginTop:15}}>Antonia Aparicio</p>
                                        <p style={{fontWeight:500, fontSize:12, marginTop:1}}>Clienta</p>
                                    </nav>
                                </div>
                            </nav>                      
                        </div>
                    </nav>
                </div>
                <div id="Sugerencias" className='col-md-4 d-flex align-items-center justify-content-center'>
                    <Form src="https://fgjgvtjwbhivqlw.form.io/sugerencias"/>
                </div>
            </nav>
            <div style={{marginTop:20, marginBottom:40}}>
                <h1 id="Newsletter" style={{fontWeight: 800, fontSize:43}}>Inscríbtete a Nuestro Newsletter</h1>
                <Form src="https://fgjgvtjwbhivqlw.form.io/newsletter" />
            </div>
        </div>
    </div>
  )
}
export default Testimonios;
