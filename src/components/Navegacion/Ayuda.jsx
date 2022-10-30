import React from 'react'
import { Form } from 'react-formio';

function Ayuda() {
  return (
    <div>
        <div className='container'>
            <h1 id="Dudas" style={{fontWeight: 800, fontSize:43, marginBottom:50, marginTop:50}}>Preguntas Frecuentes</h1>
            <h2 style={{fontSize:30}}>¿Cómo puedo recibir mis productos?</h2>
            <p style={{fontWeight: 500, fontSize:19, color:"grey"}}>Los productos pueden ser despachados a su domicilio o entregados de manera presencial</p>
            <hr/>
            <h2 style={{fontSize:30}}>¿Cuánto demora el envío de los productos?</h2>
            <p style={{fontWeight: 500, fontSize:19, color:"grey"}}>Los productos tardan entre 2 a 3 días hábiles en llegar al domicilio</p>
            <hr/>
            <h2 style={{fontSize:30}}>¿Cuál es el valor del envío?</h2>
            <p style={{fontWeight: 500, fontSize:19, color:"grey"}}>Depende de la direccion de entrega, pero dado el tamaño de los productos se mueven entre $ 2.000 a $ 3.500</p>
            <hr/>
            <h2 style={{fontSize:30}}>¿Donde se realizan las entregas presenciales?</h2>
            <p style={{fontWeight: 500, fontSize:19, color:"grey"}}>Estas entregas se acuerdan con cada cliente, y las zonas de entrega las puede encontrar en nuestra sección "Ubícanos"</p>
            <hr/>
            <h2 style={{fontSize:30}}>¿Ofrecen cambios o reembolos?</h2>
            <p style={{fontWeight: 500, fontSize:19, color:"grey"}}>Si, ofrecemos cambios, devoluciones o reembolosos si el producto no era de su talla o si se vio dañado en transporte</p>
            <hr/>
            <h2 style={{fontSize:30}}>¿Cuánto tiempo tengo para realizar una devolución?</h2>
            <p style={{fontWeight: 500, fontSize:19, color:"grey"}}>30 días hábiles, tal como cualquier tienda comercial</p>
            <hr/>
            <h2 style={{fontSize:30}}>¿Debo pagar algo por alguna devolución?</h2>
            <p style={{fontWeight: 500, fontSize:19, color:"grey"}}>Si realiza una devolución presencial, No. Si desea realizar una devolución via courrier, usted deberá pagar el envío</p>
            <hr/>
            <div style={{marginBottom:50, marginTop:70}}>
              <h1 style={{fontWeight: 800, fontSize:43, marginBottom:30}}>¿Tienes otra Duda? ... Escríbenos.</h1>
              <Form src="https://fgjgvtjwbhivqlw.form.io/dudas" />
            </div>
        </div>
    </div>
  )
}
export default Ayuda;