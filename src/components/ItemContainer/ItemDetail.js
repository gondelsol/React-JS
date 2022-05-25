import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = (props) => {
    return (
        <>
        <h1>Detalles del producto</h1>
        <h2> {props?.name}</h2>
        <h2>{props?.detail}</h2>
        <p className="card-text"><ItemCount stock="18" initial="0" /></p>

        </>
    );

}

export default ItemDetail;