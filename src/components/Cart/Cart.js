import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";


const Cart = () => {

    const carro = useContext (CartContext);


useParams();

    return (
    <>
        <h1>Este es el carro de compras</h1>
        <p>{carro}</p>
    </>
    );
}

export default Cart;