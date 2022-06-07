import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";


const ItemDetail = ({item}) => {

    const [itemCount, setItemCount] = useState(0);
    const [cambiarEstado, setCambiarEstado] = useState (true);

    const test = useContext (CartContext);

    const onAdd = (qty) => {
        alert ("has selccionado" + qty + "productos");
        setItemCount (qty);

        //agregar producto al carro desde una función global
        test.addToCart(item);
    }



    return (
        <>
        <div className="Container itemDetail">
        <h1>Servicio</h1>
        <h2>Análisis {item.name}</h2>
        <h3>Descripción</h3>
        <p> {item.description}</p>
        <h3>Precio</h3>
        <p>$ {item.precio}</p>
        <img src={item.image} alt={item.title} />

            </div>

            {cambiarEstado ? (

<ItemCount
  stock={item.stock}
  initial={itemCount}
  onAdd={onAdd}
  cambiar={setCambiarEstado} />
)
: ( <Link to={"/cart"}>
  <button type="button" class="btn btn-success">Terminar compra</button>{" "}
  </Link>

)}

        </>
    );

}

export default ItemDetail;