import { ensayos } from "../../utils/ensayos";
import { useEffect, useState } from "react";
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getDetail from "../GetDetail/GetDetail"
import { useParams } from "react-router-dom";


const ItemDetailConteiner = () => {

    const [detail, setDetail]= useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams(); //tengo acceso a lo que está en la URL


    useEffect(()=> {
        setLoading(true)
        getDetail (1000, ensayos)
        .then(result => setDetail(result.find(detail => detail.id === parseInt(id))))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
       }, []);

    return (
        <>

{loading ? <div className="spinner-grow text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div> : <ItemDetail item={detail} />}

        </>
    );
}

export default ItemDetailConteiner;