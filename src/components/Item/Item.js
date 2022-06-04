import { Link } from "react-router-dom";


const Item = (props) => {

  return (

    <>
<div className="card" style={{width:'18rem', margin:'.5rem'}}>
<img className="card-img-top img-thumbnail" src={props?.image} alt={props.name} />
<div className="card-body">
    <h5 className="card-title">{props?.name}</h5>
    <p className="card-text">{props?.resumen}</p>
    <button type="button" class="btn btn-primary" onClick=""> <Link to= { `/item/${props?.id}` } style={{color: 'white'}}> Info</Link></button>
</div>

</div>

    </>

  );

};


export default Item;

