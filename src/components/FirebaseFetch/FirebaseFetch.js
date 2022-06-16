import db from "../../utils/firebaseConfig";
import { collection, query, where, getDocs, DocumentSnapshot } from "firebase/firestore";

export const firebaseFetch = async (id) => {
    let q;

    if (id) {
        q = query(collection(db, "Services"), where("Services", "==", id));
    } else {
        q = query(collection(db, "Services"));
    }

    const querySnapshot = await getDocs(q);
    const dataFromFirebaseFetch = querySnapshot.docs.map(document => ({
                                                                        id: document,
                                                                    ...DocumentSnapshot.data()
                                                                }));
    return dataFromFirebaseFetch;
}



export default firebaseFetch;