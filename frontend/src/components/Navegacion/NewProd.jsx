import React from 'react'
import Boton from './Boton';
import Bikini from "./Fotos/Bikini.png"
import { Button } from 'react-bootstrap'; 
import { useDispatch } from 'react-redux';
import { useGetAllProductsQuery } from '../../features/productsApi';
import { addToCart } from '../../features/cartSlice';

function NewProd() {
  const {data} = useGetAllProductsQuery();
  const dispatch = useDispatch();

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product));
  };
  return (
    <div>
        <div className='container'>
          <h1 style={{fontWeight: 800, fontSize:43, marginBottom:50, marginTop:50}}>Nuevos Productos</h1>
          <div className='row' style={{marginBottom:100}}>
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
            <div className='caja d-flex align-items-center justify-content-center' style={{marginTop:50, color:"#a65460", backgroundColor:"#a6546043", borderRadius:25}}>
              <h1 style={{fontWeight:700, fontSize:25, marginTop:10}}>¡MÁS PRODUCTOS EN CAMINO!</h1>
            </div>
          </div>
        </div>
    </div>
  )
}
export default NewProd;