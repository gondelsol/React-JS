import ItemCount from "../ItemCount/ItemCount";
import customFetch from "../../utils/customFetch";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
const {ensayos} = require('../../utils/ensayos');



const ItemListContainer = () => {
    const [datos, setDatos]=useState([]);
    const [cargando, setCargando] = useState(false)

    useEffect(()=> {
        customFetch (2000, ensayos)
        .then(result => setDatos(result))
        .catch((err => console.log(err)), ()=> setCargando(true))
    }, []);

    return (
        <>
        <h2> Hi!</h2>
        <p> I am Item list container</p>
        {cargando ? <p>Cargando...</p> : <ItemList items={datos} />}
  
        <ItemCount stock="18" initial="5" />

        </>

    );
}

export default ItemListContainer;

