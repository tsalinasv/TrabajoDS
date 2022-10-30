import React from 'react'
import Boton from './Boton';
import Pad1 from "./Fotos/Pad1.jpg"
import Pad2 from "./Fotos/Pad2.jpg"
import Carcasa1 from "./Fotos/Carcasa1.jpeg"
import Carcasa2 from "./Fotos/Carcasa2.jpeg"
import Lentes1 from "./Fotos/Lentes1.jpeg"
import Lentes2 from "./Fotos/Lentes2.jpeg"

function TodoProd() {
  return (
    <div>
      <div className='container'>
        <h1 style={{fontWeight: 800, fontSize:43, marginBottom:50, marginTop:50}}>Todos Nuestros Productos</h1>
        <div className='row' style={{marginTop:50, marginBottom:50}}>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Pad1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>20% de Descuento por Todo Noviembre</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Pétalos Desmaquillantes</li>
                  <li align="justify">Este mes toda compra de pétalos tendrá un 20% de descuento, con límite de 10 unidades.</li>
                  <hr/>
                  <li>Pack 3: $6.000</li>
                  <li>Pack 2: $4.800</li>
                  <li style={{marginTop:25}}><Boton/></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Lentes1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>25% de Descuento por la Segunda Unidad</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Lentes de Sol</li>
                  <li align="justify">La segunda unidad en la compra de cualquier lente de sol tendrá descuento.</li>
                  <hr/>
                  <li>Lentes Cuadrados: $16.200 (2u)</li>
                  <li>Lentes Alargados: $14.400 (2u)</li>
                  <li style={{marginTop:25}}><Boton/></li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
        <div className='row' style={{marginTop:50, marginBottom:50}}>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Carcasa1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>10% de Descuento Hasta Fin de Año</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Carcasas</li>
                  <li align="justify">Todas las carcasas disponibles poseen descuento con límite de 3 unidades.</li>
                  <hr/>
                  <li>Carcasa Logotipo: $4.500</li>
                  <li>Carcasa Transparente: $3.600</li>
                  <li style={{marginTop:25}}><Boton/></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Lentes1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>25% de Descuento por la Segunda Unidad</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Lentes de Sol</li>
                  <li align="justify">La segunda unidad en la compra de cualquier lente de sol tendrá descuento.</li>
                  <hr/>
                  <li>Lentes Cuadrados: $16.200 (2u)</li>
                  <li>Lentes Alargados: $14.400 (2u)</li>
                  <li style={{marginTop:25}}><Boton/></li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
        <div className='row' style={{marginTop:50, marginBottom:50}}>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Pad1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>20% de Descuento por Todo Noviembre</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Pétalos Desmaquillantes</li>
                  <li align="justify">Este mes toda compra de pétalos tendrá un 20% de descuento, con límite de 10 unidades.</li>
                  <hr/>
                  <li>Pack 3: $6.000</li>
                  <li>Pack 2: $4.800</li>
                  <li style={{marginTop:25}}><Boton/></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Lentes1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>25% de Descuento por la Segunda Unidad</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Lentes de Sol</li>
                  <li align="justify">La segunda unidad en la compra de cualquier lente de sol tendrá descuento.</li>
                  <hr/>
                  <li>Lentes Cuadrados: $16.200 (2u)</li>
                  <li>Lentes Alargados: $14.400 (2u)</li>
                  <li style={{marginTop:25}}><Boton/></li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
        <div className='row' style={{marginTop:50, marginBottom:50}}>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Pad1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>20% de Descuento por Todo Noviembre</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Pétalos Desmaquillantes</li>
                  <li align="justify">Este mes toda compra de pétalos tendrá un 20% de descuento, con límite de 10 unidades.</li>
                  <hr/>
                  <li>Pack 3: $6.000</li>
                  <li>Pack 2: $4.800</li>
                  <li style={{marginTop:25}}><Boton/></li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Lentes1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>25% de Descuento por la Segunda Unidad</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Lentes de Sol</li>
                  <li align="justify">La segunda unidad en la compra de cualquier lente de sol tendrá descuento.</li>
                  <hr/>
                  <li>Lentes Cuadrados: $16.200 (2u)</li>
                  <li>Lentes Alargados: $14.400 (2u)</li>
                  <li style={{marginTop:25}}><Boton/></li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
        <div className='caja d-flex align-items-center justify-content-center' style={{marginTop:50, color:"#a65460", backgroundColor:"#a6546043", borderRadius:25, marginBottom:100}}>
          <h1 style={{fontWeight:700, fontSize:25, marginTop:10}}>¡MÁS OFERTAS EN CAMINO!</h1>
        </div>
      </div>
    </div>
  )
}
export default TodoProd;