import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";

const Cart = () => {

useParams();

const context = useContext (CartContext);

console.log(context);

    return (
    <>
        <h1>Este es el carro de compras</h1>

        <button type="button" class="btn btn-warning" onClick={()=>removeItem()}>Remove Item</button>
        <button type="button" class="btn btn-dark" onClick={()=>clear()}>Delete cart</button>

    </>
    );
}

export default Cart;