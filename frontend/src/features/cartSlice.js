import {createSlice} from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    cartItems: localStorage.getItem("cartItems") ?JSON.parse(localStorage.getItem("cartItems")): [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart(state,action){

            const itemIndex = state.cartItems.findIndex(item=>item.id === action.payload.id);
            if(itemIndex>=0){
                state.cartItems[itemIndex].cartQuantity += 1
                toast.info("Aumento en cantidad de producto", {
                    position: "bottom-left",
                });
            } else {
                const tempProduct={ ...action.payload, cartQuantity: 1}
                state.cartItems.push(tempProduct);
                toast.success("Nuevo producto agregado", {
                    position: "bottom-left",
                });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
        },
        removeFromCart(state, action) {
        state.cartItems.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
            const nextCartItems = state.cartItems.filter(
                (item) => item.id !== cartItem.id
            );
    
            state.cartItems = nextCartItems;
    
            toast.error("Producto eliminado del carrito", {
                position: "bottom-left",
            });
            }
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            return state;
        });
        },
        decreaseCart(state, action) {
        const itemIndex = state.cartItems.findIndex(
            (item) => item.id === action.payload.id
        );
    
        if (state.cartItems[itemIndex].cartQuantity > 1) {
            state.cartItems[itemIndex].cartQuantity -= 1;
    
            toast.info("Disminución en cantidad de producto", {
            position: "bottom-left",
            });
        } else if (state.cartItems[itemIndex].cartQuantity === 1) {
            const nextCartItems = state.cartItems.filter(
            (item) => item.id !== action.payload.id
            );
    
            state.cartItems = nextCartItems;
    
            toast.error("Producto eliminado del carrito", {
            position: "bottom-left",
            });
        }
    
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        },
        clearCart(state, action) {
            state.cartItems = [];
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
            toast.error("Carrito vaciado", { position: "bottom-left" });
        },
    }
});

export const {addToCart, removeFromCart, decreaseCart, clearCart} = cartSlice.actions;

export default cartSlice.reducer;