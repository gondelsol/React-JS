import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import db from "../../utils/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";


const ItemListContainer = () => {
    const [datos, setDatos]=useState([]);
    const {id} = useParams();
    const [cargando, setCargando] = useState(false);

const mostrarTodosLosDatos = async () => {
    const querySnapshot = await getDocs(collection(db, "Servicios"));
    const todosLosDatos = querySnapshot.docs.map(document =>({
        id: document.id,
        ...document.data()
    }));
    return todosLosDatos;
}

const filtrarDatos = async(id) => {
    const q = query(collection(db, "Servicios"), where("categoryId", "==", parseInt(id)));
    const querySnapshot = await getDocs(q);
    const datosFiltrados = querySnapshot.docs.map(document =>({
        id: document.id,
        ...document.data()
    }));
    return datosFiltrados;
}

    useEffect(()=> {

        if ( id ==='1' || id ==='2') {
            setCargando(true);
            filtrarDatos(id)
            .then(result => setDatos(result))
            .catch((err => console.log(err)))
            .finally(()=> setCargando(false))
        } else {
            setCargando(true);
            mostrarTodosLosDatos()
            .then(result => setDatos(result))
            .catch(err => console.log(err))
            .finally(()=> setCargando(false))
        }
    }, [id]);


    return (
        <>
        {cargando ?
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                <span className="sr-only"></span>
                </div>
        </div> : <ItemList items={datos} />}

        </>

    );
}

export default ItemListContainer;