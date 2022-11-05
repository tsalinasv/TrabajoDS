import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartitems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,

}

const cardSlice = createSlice({
    name:"cart",
    initialState
})