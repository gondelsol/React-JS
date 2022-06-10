import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../CartContext/CartContext";


const ItemDetail = ({ name, description, precio, image, item}) => {

    const [itemCount, setItemCount] = useState(0);
    const [cambiarEstado, setCambiarEstado] = useState (true);


    const test = useContext (CartContext);

    const onAdd = (qty, item) => {
        alert ("La cantidad seleccionada es:  " + qty + "el objeto es " ,item);
        setItemCount (qty);
        //agregar producto al carro desde una función global
        test.addToCart(item);
    }

    console.log(" el objeto del ItemDetail es: " ,item);
    console.log(" el producto del ItemDetail es: " + item.name);


    return (
        <>
        <div className="Container itemDetail">
        <h1>Servicio</h1>
        <h2>Análisis {name}</h2>
        <h3>Descripción</h3>
        <p> {description}</p>
        <h3>Precio</h3>
        <p>$ {precio}</p>
        <img src={image} alt={name} />

            </div>


            {cambiarEstado ? (

<ItemCount
  name={name}
  precio={precio}
  stock={item.stock}
  initial={itemCount}
  onAdd={onAdd}
  cambiar={setCambiarEstado}
  item={item}
   />
)
: ( <Link to={'/cart'}>
  <button type="button" class="btn btn-success">Go to cart</button>
  </Link>

)}

        </>
    );

}

export default ItemDetail;