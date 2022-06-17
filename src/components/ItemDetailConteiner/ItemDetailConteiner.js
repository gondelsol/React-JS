
import { useEffect, useState } from "react";
import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import getDetail from "../GetDetail/GetDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";
import db from "../../utils/firebaseConfig";


const ItemDetailConteiner = () => {

    const [detail, setDetail]= useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams(); //tengo acceso a lo que está en la URL

const mostrarUnProducto = async (itemId) => {

    const docRef = doc(db, "Servicios", itemId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: itemId,
        ...docSnap.data()
      }
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
    return docRef;
}

    useEffect(()=> {

        setLoading(true)
        getDetail (1000, mostrarUnProducto(id))
        .then(result => setDetail(result))
        .catch((error) => console.log(error))
        .finally(()=> setLoading(false))
       }, [id]);

 
    return (
        <>
        {loading ?
            <div className="text-center">
                <div className="spinner-grow text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div> : <ItemDetail item={detail} />}
        </>
    );
}

export default ItemDetailConteiner;