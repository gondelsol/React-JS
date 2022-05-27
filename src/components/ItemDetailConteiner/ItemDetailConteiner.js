import { ensayos } from "../../utils/ensayos";
import { useEffect, useState } from "react";
import React from "react";
import ItemDetail from "../ItemContainer/ItemDetail";
import getDetail from "../GetDetail/GetDetail"


const ItemDetailConteiner = () => {

    const [detail, setDetail]= useState([]);
    const [loading, setLoading] = useState(false);





    useEffect(()=> {
        setLoading(true)
        getDetail (6000, ensayos[5])
        .then(result => setDetail(result))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
       }, []);

console.log("detail", detail);

    return (
        <>

{loading ? <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : <ItemDetail  key={detail.id} title={detail.name} description={detail.description} precio={detail.precio} image={detail.image} stock={detail.stock} />}

        </>
    );
}

export default ItemDetailConteiner;