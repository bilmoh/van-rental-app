import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";



const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: "vanlife-ae3cd.firebaseapp.com",
    projectId: "vanlife-ae3cd",
    storageBucket: "vanlife-ae3cd.appspot.com",
    messagingSenderId: "961496925032",
    appId: "1:961496925032:web:64644aa214b78d316accdd"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//
const vansCollectionRef = collection(db, "vans")

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    return {
        ...snapshot.data(),
        id: snapshot.id
    }
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}