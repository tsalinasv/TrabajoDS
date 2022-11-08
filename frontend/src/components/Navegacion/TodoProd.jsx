import React from 'react'
import Pad4 from "./Fotos/Pad4.jpg"
import Pad2uni from "./Fotos/Pad2uni.png"
import Carcasa1 from "./Fotos/Carcasa1.jpeg"
import Carcasa2 from "./Fotos/Carcasa2.jpeg"
import Lentes1 from "./Fotos/Lentes1.jpeg"
import Lentes2 from "./Fotos/Lentes2.jpeg"
import Bikini from "./Fotos/Bikini.png"
import Cintillo1 from "./Fotos/Cintillo1.png"
import Cintillo2 from "./Fotos/Cintillo2.png"
import Rulos1 from "./Fotos/Rulos1.png"
import { Button } from 'react-bootstrap'; 
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from '../../features/productsApi';
import { addToCart } from '../../features/cartSlice';

function TodoProd() {
  const {data} = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product));
  };
  return (
    <div>
      <div className='container products'>
        <h1 style={{fontWeight: 800, fontSize:43, marginBottom:50, marginTop:50}}>Todos Nuestros Productos</h1>
        <div className='row' style={{marginTop:50, marginBottom:50}}>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='thumbnail col-md-6 d-flex align-items-start justify-content-start'>
              <div className="figure">
                <img className="image-main" src={Pad4} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
                <img className="image-hover" src={Pad2uni} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
              </div>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>20% de Descuento por Todo Noviembre</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Pétalos Desmaquillantes</li>
                  <li align="justify">Colores disponibles: Celeste, Amarillo, Burdeo/Rojizo, Rosado, Beige, Café, Negro, Gris.</li>
                  <hr/>
                  <li>Pack 3: $6.000</li>
                  <li>Pack 2: $4.800</li>
                  <li style={{marginTop:20}}>
                    {data?.map((product) => {
                      if(product.id == 1)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar Pack 3</Button></div>)
                    })}
                    {' '}
                    {data?.map((product) => {
                      if(product.id == 2)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar Pack 2</Button></div>)
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <div className="figure">
                <img className="image-main" src={Lentes1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
                <img className="image-hover" src={Lentes2} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
              </div>            
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
                  <li style={{marginTop:20}}>
                    {data?.map((product) => {
                      if(product.id == 3)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar Cuadr.</Button></div>)
                    })}
                    {' '}
                    {data?.map((product) => {
                      if(product.id == 4)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar Alarg.</Button></div>)
                    })}
                  </li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
        <div className='row' style={{marginTop:50, marginBottom:50}}>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <div className="figure">
                <img className="image-main" src={Carcasa2} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
                <img className="image-hover" src={Carcasa1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
              </div>  
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
                  <li style={{marginTop:20}}>
                    {data?.map((product) => {
                      if(product.id == 5)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar Logo.</Button></div>)
                    })}
                    {' '}
                    {data?.map((product) => {
                      if(product.id == 6)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar Transp.</Button></div>)
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Bikini} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>Totalmente Nuevo en Nuestro Inventario</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Bikini</li>
                  <li align="justify">Color burdeo/marrón. Ideal para lucir un nuevo estilo y estar a la moda este verano.</li>
                  <hr/>
                  <li>Tallas Disponibles: M</li>
                  <li>Valor: $10.000</li>
                  <li style={{marginTop:20}}>
                    {data?.map((product) => {
                      if(product.id == 7)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar a Carrito</Button></div>)
                    })}
                  </li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
        <div className='row' style={{marginTop:50, marginBottom:50}}>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <div className="figure">
                <img className="image-main" src={Cintillo1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
                <img className="image-hover" src={Cintillo2} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
              </div> 
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>Quedan Pocas Unidades, No te Quedes Sin el Tuyo</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Cintillos Skincare</li>
                  <li align="justify">Colores disponibles: Blanco y Negro, Blanco Rosado y Café, Blanco Negro y Café</li>
                  <hr/>
                  <li>Talla Única</li>
                  <li>Valor: $4.500</li>
                  <li style={{marginTop:20}}>
                    {data?.map((product) => {
                      if(product.id == 8)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar a Carrito</Button></div>)
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <img src={Rulos1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>Quedan Pocas Unidades, No te Quedes Sin el Tuyo</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Ondas Sin Calor</li>
                  <li align="justify">Estos rizadores te dejarán el pelo perfecto con unas ondas totalmente naturales.</li>
                  <hr/>
                  <li>Talla Única</li>
                  <li>Valor: $7.000</li>
                  <li style={{marginTop:20}}>
                    {data?.map((product) => {
                      if(product.id == 9)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar a Carrito</Button></div>)
                    })}
                  </li>
                </ul>
              </div>
            </div>            
          </div>
        </div>
        <div className='row' style={{marginTop:50, marginBottom:50}}>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>
            <div className='col-md-6 d-flex align-items-start justify-content-start'>
              <div className="figure">
                <img className="image-main" src={Lentes1} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
                <img className="image-hover" src={Lentes2} style={{borderRadius:25, objectFit:"cover", height:330, width:250}}/>
              </div> 
            </div>
            <div className='col-md-6 d-flex align-items-center justify-content-start'>
              <div className='row'>
                <div className="caja" style={{backgroundColor:"#a6546043", borderRadius:25}}>
                  <p align="center"style={{fontWeight:700, marginTop:10, marginBottom:10, color:"#a65460"}}>Quedan Pocas Unidades, No te Quedes Sin el Tuyo</p>
                </div>
                <ul className='list-unstyled' style={{marginTop:25, fontWeight:500, color:"grey"}}>
                  <li style={{fontWeight:600, color:"black"}}>Lentes de Sol</li>
                  <li align="justify">En 2 variedades, cuadrados color negro y también alargados color negro.</li>
                  <hr/>
                  <li>Lentes Cuadrados: $9.000</li>
                  <li>Lentes Alargados: $8.000</li>
                  <li style={{marginTop:20}}>
                    {data?.map((product) => {
                      if(product.id == 10)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar Cuadr.</Button></div>)
                    })}
                    {' '}
                    {data?.map((product) => {
                      if(product.id == 11)
                    return (
                    <div key={product.id} className="product">
                    <Button onClick={() => handleAddToCart(product)} style={{marginTop:5}} variant="danger" size="sm">Agregar Alarg.</Button></div>)
                    })}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex align-items-start justify-content-start'>          
          </div>
        </div>
        <div className='caja d-flex align-items-center justify-content-center' style={{marginTop:50, color:"#a65460", backgroundColor:"#a6546043", borderRadius:25, marginBottom:100}}>
          <h1 style={{fontWeight:700, fontSize:25, marginTop:10}}>¡MÁS PRODUCTO EN CAMINO!</h1>
        </div>
      </div>
    </div>
  )
}
export default TodoProd;