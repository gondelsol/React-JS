import ItemCount from "../ItemCount/ItemCount";

const Item = (props) => {

  return (

    <>
<div className="card" style={{width:'18rem', margin:'.5rem'}}>
<img className="card-img-top" src={props?.image} alt={props.name} />
<div className="card-body">
    <h5 className="card-title">{props?.title}</h5>
    <p className="card-text">{props?.description}</p>
    <p className="card-text">Precio: ${props?.precio}</p>
    <p className="card-text"><ItemCount stock="18" initial="0" /></p>

  </div>

</div>

    </>

  );

};

export default Item;
