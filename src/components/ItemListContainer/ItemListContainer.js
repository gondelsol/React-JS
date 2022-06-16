import customFetch from "../../utils/customFetch";
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
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });

        return querySnapshot;
    }

    const filtrarDatos = async(id) => {
        const q = query(collection(db, "Servicios"), where("categoryId", "==", parseInt(id)));

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });

        return querySnapshot;

    }

    useEffect(()=> {


        if ( id ==='1' || id ==='2') {
            setCargando(true);
            customFetch (1000, filtrarDatos(id) )
            .then(result => setDatos(result))
            .catch((err => console.log(err)))
            .finally(()=> setCargando(false))

        } else {
            setCargando(true);
            customFetch (2000, mostrarTodosLosDatos())
            .then(result => setDatos(result))
            .catch((err => console.log(err)))
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