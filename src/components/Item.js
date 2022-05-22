
const Item = (props) => {

    return (
        <>
        <h1>Producto {props.id}</h1>
              <div className="producto container">
              <h3>{props.name}</h3>
              <p>{props.precio}</p>
              <p>{props.id}</p>
            </div>

        
        </>

    );
}

export default Item;
