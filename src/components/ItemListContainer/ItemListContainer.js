import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import db from "../../utils/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";






const ItemListContainer = () => {
    const [datos, setDatos]=useState([]);
    const {id} = useParams();
    const [cargando, setCargando] = useState(false);

    const joa = [{
        name: "joaquin",
        stock:37},
        {
            name: "Karina",
            stock: 38
        }
];

const mostrarTodosLosDatos = async () => {
    const querySnapshot = await getDocs(collection(db, "Servicios"));
    console.log("Todos los productos");
    querySnapshot.forEach((doc) => {

      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
}

const filtrarDatos = async(id) => {
    const q = query(collection(db, "Servicios"), where("categoryId", "==", parseInt(id)));
    const querySnapshot = await getDocs(q);
    console.log("productos filtrados");
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
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

        console.log("ESTOS SON LOS DATOS DEL ITEMLISTCONTAINER");
        console.log(datos);


    }, [id, datos]);


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