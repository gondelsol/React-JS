import { ensayos } from "../../utils/ensayos";
import { useEffect, useState } from "react";
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getDetail from "../GetDetail/GetDetail"
import { useParams } from "react-router-dom";


const ItemDetailConteiner = () => {

    const [detail, setDetail]= useState([]);
    const [loading, setLoading] = useState(false);
    const { id } = useParams(); //tengo acceso a lo que está en la URL


    useEffect(()=> {
        setLoading(true)
        getDetail (1000, ensayos.find(detail => detail.id === parseInt(id)))
        .then(result => setDetail(result))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
       }, []);

console.log("detail", detail);

    return (
        <>

{loading ? <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : <ItemDetail  key={detail.id} id={detail.id} name={detail.name} description={detail.description} precio={detail.precio} image={detail.image} stock={detail.stock} />}

        </>
    );
}

export default ItemDetailConteiner;