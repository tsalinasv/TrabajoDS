import React from 'react'
import Shein from "./Fotos/Shein.svg";
import { Form } from 'react-formio';

function Partners() {
  return (
    <div>
        <div className='container'>
          <div className='row' style={{marginTop:50, marginBottom:50}}>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <div className='row'>
                <h1 style={{fontWeight: 800, fontSize:43}}>Nuestros Socios</h1>
                <p>imagenes con los logos de las empresas; shein, paypal, empresa de envios roxy, chilexpress, starken</p>
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <img src={Shein} height="70" style={{marginRight:5, marginLeft:5}}/>
              <img src={Shein} height="70" style={{marginRight:5, marginLeft:5}}/>
              <img src={Shein} height="70" style={{marginRight:5, marginLeft:5}}/>
              <img src={Shein} height="70" style={{marginRight:5, marginLeft:5}}/>
            </div>
          </div>
          <div style={{marginBottom:50}}>
            <h1 style={{fontWeight: 800, fontSize:43, marginBottom:30}}>Conviértete en Socio</h1>
            <Form src="https://fgjgvtjwbhivqlw.form.io/socios" />
          </div>
        </div>
    </div>
  )
}
export default Partners;