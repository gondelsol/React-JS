import ItemCount from "./ItemCount";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
const {ensayos} = require('../utils/ensayos');



const ItemListContainer = () => {
    const [datos, setDatos]=useState([]);

    useEffect(()=> {
        customFetch (2000, ensayos)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
    }, []);


    return (
        <>
        <h2> Hi!</h2>
        <p> I am Item list container</p>
        <ItemList items={datos} />
        <ItemCount stock="18" initial="5" />

        </>

    );
}

export default ItemListContainer;

