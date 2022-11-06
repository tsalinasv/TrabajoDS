import React from 'react'
import {useSelector} from "react-redux";
import {HashLink as NavLink} from "react-router-hash-link"

function Carro() {
  const cart = useSelector((state) => state.cart)
  return (
    <carro>
      <div className='container'>
        <h1 className='d-flex justify-content-center' style={{fontWeight:500, marginTop:50, marginBottom:70}}>Carrito de Compras</h1>
        {cart.cartItems.length === 0 ? (
          <div className='cart-empty'>
            <p style={{fontWeight:300, color:'grey'}}>Tu carrito está vacío</p>
            <div calssName="start-shopping" style={{marginBottom:100}}>
              <NavLink to="/todos+los+productos">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Comienza a Comprar</span>
              </NavLink>
            </div>
          </div>
        ) : (
          <div>
            <div className='titles'>
              <div className='row' style={{marginBottom:5}}>
                <div className='d-flex col-md-6'><h3 className='product-title'>Producto</h3></div>
                <div className='d-flex col-md-2'><h3 className='price'>Precio</h3></div>
                <div className='d-flex col-md-2'><h3 className='quatity'>Cantidad</h3></div>
                <div className='d-flex col-md-2 justify-content-end'><h3 className='total'>Total</h3></div>
              </div>
            </div>
            <div className='cart-items'>
              {cart.cartItems?.map(cartItem => (
                <div className='cart-item' key={cartItem.id}>
                  <div className='cart-product'>
                    <img src={cartItem.image} alt={cartItem.name}/>
                    <div>
                      <h3 style={{marginLeft:5, fontSize:22}}>{cartItem.name}</h3>
                      <p style={{marginLeft:5, fontWeight:400, color:'grey'}}>{cartItem.desc}</p>
                      <button>Eliminar</button>
                    </div>
                  </div>
                  <div className='cart-product-price' style={{marginLeft:19}}>${cartItem.price}</div>
                  <div className='cart-product-quantity'>
                    <button>-</button>
                    <div calssName="count d-flex align-items-center" >{cartItem.cartQuantity}</div>
                    <button>+</button>
                  </div>
                  <div className='cart-product-total-price'>
                    ${cartItem.price * cartItem.cartQuantity}
                  </div>
                </div>
              ))}
            </div>
            <div className="cart-summary">
              <button className="clear-btn">
                Limpiar Carrito
              </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span style={{fontWeight:500}}>Subtotal</span>
                  <span className="amount">${cart.cartTotalAmount}</span>
                </div>
                <p style={{fontWeight:400, color:'grey'}}>Impuestos y envío calculados en checkout</p>
                <button>Check out</button>
                <div className="continue-shopping">
                  <NavLink to="/todos+los+productos" style={{marginBottom:50, fontWeight:500}}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-arrow-left"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                      />
                    </svg>
                    <span>Continuar Comprando</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </carro>
  )
}
export default Carro;