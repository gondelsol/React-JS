import { useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../CartContext/CartContext";
import { collection, doc, setDoc, serverTimestamp } from "firebase/firestore";
import db from "../../utils/firebaseConfig";
import { Link } from "react-router-dom";


const Cart = () => {

useParams();

const test = useContext (CartContext);

const createOrder = () => {
    alert ("has generado una orden de compra");

    const itemsForDB = test.cartList.map( item => ({
        title: item.name,
        idItem: item.id,
        costItem: item.precio,
        cantidad: item.qtyItem
    }) )



    let order = {
        buyer: {
            nameCustomer: "José Armando",
            surname: "Perez Pérez",
            email: "JoseArmando@PerezPerez.com"
        },
        date: serverTimestamp(),
        total: test.calcSubTotal(),
        item: itemsForDB
    };
    console.log(order);


    const createOrderInFireStore = async () => {
        const newOrderRef = doc(collection(db, "ordenes"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
    }

    createOrderInFireStore()
    .then(result => alert('El Id de tu orden es: ' + result.id))
    .catch(err => console.log(err))
}


    return (
    <div className="container">

    <h1>Carro de compras</h1>

        {
            test.cartList.length === 0
        ? <p>Inicie compra </p>
        : test.cartList.map ((item) =>  <div className="container carroContenedor">
                                            <h3>Servicio {item.name}</h3>
                                            <p>Cantidad: {item.qtyItem}.</p>
                                            <p>Precio: $ {item.precio}.</p>
                                            <p>Precio del item {test.calcTotalPerItem(item.id)}</p>
         <button type="button" className="btn btn-warning" onClick={()=> test.removeItem(item.id)}>Remove Item</button> </div> )
        }

        {
            test.cartList.length === 0
            ?  <div className="text-center">
                    <p>Seleccione Productos</p>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
             </div>

            : <div className="container general">
                          <p>El subtotal es: ${test.calcSubTotal()}</p>
                        <Link to='/' ><button type="button" className="btn btn-success">Continuar compra</button></Link>
                        <button type="button" className="btn btn-secondary" onClick={() => test.clearList()}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>  Delete cart</button>
                        <button type="button" className="btn btn-primary" onClick={()=> createOrder() }>Confirmar compra</button>
                </div>
        }

    </div>
    );
}

export default Cart;