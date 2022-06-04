import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";


const ItemDetail = (props) => {

    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        alert ("has selccionado" + qty + "productos");
        setItemCount (qty);
    }



    return (
        <>
        <div className="Container itemDetail">
        <h1>Servicio</h1>
        <h2>Análisis {props?.name}</h2>
        <h3>Descripción</h3>
        <p> {props?.description}</p>
        <h3>Precio</h3>
        <p>$ {props?.precio}</p>
        <img src={props?.image} alt={props.title} />

            </div>

        {
              itemCount === 0
              ? <ItemCount stock={props?.stock} initial={itemCount} onAdd={onAdd} />
              : <Link to={'/cart'}><button type="button" class="btn btn-success">Terminar compra</button> </Link>
        }

        </>
    );

}

export default ItemDetail;