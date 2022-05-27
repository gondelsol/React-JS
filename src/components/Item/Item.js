
const Item = (props) => {

  return (

    <>
<div className="card" style={{width:'18rem', margin:'.5rem'}}>
<img className="card-img-top" src={props?.image} alt={props.title} />
<div className="card-body">
    <h5 className="card-title">{props?.title}</h5>
    <p className="card-text">{props?.resumen}</p>
    <button type="button" class="btn btn-primary" onClick="">Info</button>

  </div>

</div>

    </>

  );

};

export default Item;
