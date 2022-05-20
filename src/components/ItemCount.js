import { useState } from "react";

const ItemCount = () => {

        const [cantidad1, setCantidad1] = useState(1);

        const add = () => {
                if (cantidad1 < 6) setCantidad1 (cantidad1+1);
                console.log(cantidad1);
        }

        const sustract = () => {
                if (cantidad1 > 0) setCantidad1 (cantidad1-1);
                console.log(cantidad1);
        }

        const remove = () => {
                if (cantidad1 > 0) setCantidad1 (cantidad1-cantidad1);
                console.log(cantidad1);

        }



    return (
        <>
        <h1> Hello!!!</h1>
        <div className="container">
        <button type="button" id="btnSustract" className="btn btn-primary position-relative" onClick={sustract}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
</svg>
        </button> 

        Producto 1

        <button type="button" id="btnRestar" className="btn btn-primary position-relative" onClick={add}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
        </button>

                <button type="button" id="btnRemove" className="btn btn-danger position-relative" onClick={remove}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
</svg>Eliminar</button>   
        </div>


        </>

    );
}





export default ItemCount;