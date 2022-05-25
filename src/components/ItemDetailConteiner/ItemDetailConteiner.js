import { ensayos } from "../../utils/ensayos";
import { useEffect, useState } from "react";
import React from "react";
import ItemDetail from "../ItemContainer/ItemDetail";


const ItemDetailConteiner = () => {

    const [detail, setDetail]= useState([]);
    const [loading, setLoading] = useState(false);


    const getDetail = async (time, task) => {
        let confirmacion= true;
        return new Promise ( (resolve, reject) => {
            setTimeout (() => {
                if (confirmacion) {
                    resolve (task);
                } else {
                    reject("Error en getDetail");
                }
            }, time);
        });
    }


    useEffect(()=> {
        setLoading(true)
        getDetail (6000, ensayos[3])
        .then(result => setDetail(result))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
       }, []);

console.log("detail", detail);

    return (
        <>

{loading ? <div class="spinner-grow text-primary" role="status">
  <span class="visually-hidden">Loading...</span>
</div> : <ItemDetail  items={detail} />}

        </>
    );
}

export default ItemDetailConteiner;