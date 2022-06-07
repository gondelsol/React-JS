import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";




const Cart = () => {

useParams();

const test = useContext (CartContext);

console.log(test);

    return (
    <>
        <h1>Carro de compras</h1>

        {
            test.cartList.length === 0
        ? <p> El carro está vacío</p>
        : test.CartList.cartList.map ((item) => <p>{item.name}</p>)
        }

        <button type="button" class="btn btn-warning" onClick={""}>Remove Item</button>
        <button type="button" class="btn btn-dark" onClick={()=> clear()}>Delete cart</button>

    </>
    );
}

export default Cart;