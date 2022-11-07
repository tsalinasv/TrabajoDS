import React from 'react'
import Josefa from "./Fotos/Josefa.jpg";
import Rocio from "./Fotos/Rocio.jpg";

function Somos() {
  return (
    <div>
        <div className='container'>
            <h1 style={{fontWeight: 800, fontSize:50, marginTop:50, marginBottom:50}}>Quienes Somos</h1>
            <p align="justify" style={{fontWeight:500, fontSize:20, color:"grey"}}>Nosotras somos un par de amigas. Tras buscar productos que necesitabamos descubrimos que existían muchas páginas poco confiables, difíciles de entender, con descripciones poco claras, mala atención y dudosas formas de pago.
            Conversando sobre esto nos dimos cuenta que no eramos las únicas que tenian este problema, asi que decidimos hacer algo al respecto. Siendo nosotras quienes actuan como intermediario entre diversas tiendas y el cliente final, podemos asegurarnos que el cliente tenga
            la mejor experiencia posible y una sensación de seguridad al momento de comprar sus productos.</p>
            <nav className='row' style={{marginTop:70}}>
                <div className='col-md-5 d-flex align-items-center justify-content-start'>
                    <img src={Rocio} height="300" width="300" style={{borderRadius:50, objectFit:"cover"}}/>
                </div>
                <div className='caja col-md-7 d-flex align-items-center justify-content-start' style={{backgroundColor:"#a6546043", borderRadius:50}}>
                    <nav className='row' style={{fontSize:25, marginLeft:25, marginRight:25, marginTop:25, marginBottom:25}}>
                        <h3 style={{fontWeight:700, fontSize:32, marginBottom:20, marginTop:10}}>Rocío Benavides Aedo</h3>
                        <ul style={{fontWeight: 600, fontSize:20}} className="list-unstyled">
                            <li>Estudiante de Ingeniería Civil en Energía</li>
                            <li>Tercer Año</li>
                            <li>Universidad Adolfo Ibáñez</li>
                            <li>21 Años</li>
                        </ul>
                    </nav> 
                </div>
            </nav>
            <nav className='row' style={{marginTop:50, marginBottom:70}}>
                <div className='col-md-5 d-flex align-items-center justify-content-start'>
                    <img src={Josefa} height="300" width="300" style={{borderRadius:50, objectFit:"cover"}}/>
                </div>
                <div className='caja col-md-7 d-flex align-items-center justify-content-start' style={{backgroundColor:"#a6546043", borderRadius:50}}>
                    <nav className='row' style={{fontSize:25, marginLeft:25, marginRight:25, marginTop:25, marginBottom:25}}>
                        <h3 style={{fontWeight:700, fontSize:32, marginBottom:20, marginTop:10}}>Josefa Ramírez León</h3>
                        <ul style={{fontWeight: 600, fontSize:20}} className="list-unstyled">
                            <li>Estudiante de Nutrición y Dietética</li>
                            <li>Cuarto Año</li>
                            <li>Universidad del Desarrollo</li>
                            <li>22 Años</li>
                        </ul>                    
                    </nav> 
                </div>
            </nav>
        </div>
    </div>
  )
}
export default Somos