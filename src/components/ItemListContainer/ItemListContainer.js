import customFetch from "../../utils/customFetch";
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
const {ensayos} = require('../../utils/ensayos');



const ItemListContainer = () => {
    const [datos, setDatos]=useState([]);
    const {id} = useParams();
    const [cargando, setCargando] = useState(false);

    useEffect(()=> {

            setCargando(true);
            customFetch (2000, ensayos.filter( datos => datos.categoryId === parseInt(id)))
            .then(result => setDatos(result))
            .catch((err => console.log(err)))
            .finally(()=> setCargando(false))
    }, [id]);

    return (
        <>
        {cargando ? <div className="spinner-border text-primary" role="status">
  <span className="sr-only"></span>
</div> : <ItemList items={datos} />}
  
        </>

    );
}

export default ItemListContainer;

