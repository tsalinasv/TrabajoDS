import React from 'react'
import Shein from "./Fotos/Shein.svg";
import { Form } from 'react-formio';
import starken from "./Fotos/starken.webp";
import Chilexpress from "./Fotos/Chilexpress.webp";

function Partners() {
  return (
    <div>
        <div className='container'>
          <div className='row' style={{marginTop:50, marginBottom:50}}>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <div className='row'>
                <h1 id="Partners" style={{fontWeight: 800, fontSize:43, marginBottom:50}}>Nuestros Socios</h1>
                <p align="justify" style={{fontWeight: 500, fontSize:19, color:"grey"}}>Nuestros socios comerciales son quienes nos permiten no solamente traer los productos a toda nuestra clientela, sino que a la vez queines ayudan a distribuir 
                los envíos a todos los rincones del país.</p>
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div style={{marginBottom:25, marginTop:50}} className="d-flex align-items-center justify-content-center">
                  <img src={Chilexpress} height="60" style={{marginRight:5, marginLeft:5}}/>
                  <img src={starken} height="60" style={{marginRight:5, marginLeft:5}}/>
                </div>
                <div style={{marginTop:25, marginBottom:25}} className="d-flex align-items-center justify-content-center">
                  <img src={Shein} height="70" style={{marginRight:5, marginLeft:5}}/>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginBottom:50}}>
            <h1 id="NewPartner" style={{fontWeight: 800, fontSize:43, marginBottom:30}}>Conviértete en Socio</h1>
            <Form src="https://fgjgvtjwbhivqlw.form.io/socios" />
          </div>
        </div>
    </div>
  )
}
export default Partners;