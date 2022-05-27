import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = (props) => {
    return (
        <>
        
        <h1>Servicio</h1>
        <h2>Análisis {props?.title}</h2>
        <h3>Descripción</h3>
        <p> {props?.description}</p>
        <h3>Precio</h3>
        <p>$ {props?.precio}</p>
        <img src={props?.image} alt={props.title} />
        <p className="card-text"><ItemCount stock={props?.stock} initial="0" /></p>

        </>
    );

}

export default ItemDetail;