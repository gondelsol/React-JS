import db from "../../utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";


const firebaseFetch = async () => {
    const querySnapshot = await getDocs(collection(db, "Servicios"));
    querySnapshot.forEach((doc) => {
        console.log(doc.id, "=>" , doc.data());
    });
}


export default firebaseFetch;