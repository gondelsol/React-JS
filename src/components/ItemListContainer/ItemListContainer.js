import customFetch from "../../utils/customFetch";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
const {ensayos} = require('../../utils/ensayos');



const ItemListContainer = () => {
    const [datos, setDatos]=useState([]);
    const [cargando, setCargando] = useState(false)

    useEffect(()=> {
        setCargando(true);
        customFetch (3000, ensayos)
        .then(result => setDatos(result))
        .catch((err => console.log(err)))
        .finally(()=> setCargando(false))
    }, []);

    return (
        <>
        {cargando ? <div className="spinner-border text-primary" role="status">
  <span className="sr-only"></span>
</div> : <ItemList items={datos} />}
  
        </>

    );
}

export default ItemListContainer;

