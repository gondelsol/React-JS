import { Link } from "react-router-dom";


const Item = (item) => {

  return (

    <>
<div className="card" style={{width:'18rem', margin:'.5rem'}}>
<img className="card-img-top img-thumbnail" src={item.image} alt={item.name} />
<div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">{item.resumen}</p>
    {<Link to= { `/item/${item.id}` } style={{color: 'white'}}> <button type="button" className="btn btn-primary" >  Info</button> </Link>}
</div>

</div>

    </>

  );

};


export default Item;

