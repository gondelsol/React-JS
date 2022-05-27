import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = (props) => {
    return (
        <>
        
        <h1>Nuestro Servicio</h1>
        <h1> {props?.title}</h1>
        <h2>Descripción</h2>
        <p> {props?.description}</p>
        <h3>Precio</h3>
        <p>$ {props?.precio}</p>
        <img src={props?.image} alt={props.title} />
        <p className="card-text"><ItemCount stock={props?.stock} initial="0" /></p>

        </>
    );

}

export default ItemDetail;