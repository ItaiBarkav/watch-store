import { addDoc, collection, doc, getDocs, setDoc } from "@firebase/firestore";
import { Item } from "./card";
import { db } from "./firebaseConfig";

const WATCH = "watch";

export async function readItems(): Promise<Item[]> {
  const snapshot = await getDocs(collection(db, WATCH));

  return snapshot.docs.map((item) => ({
    title: item.data().title,
    price: item.data().price,
    image: item.data().image,
    description: item.data().description,
  }));
}

export async function addItem(item: Item): Promise<void> {
  addDoc(collection(db, WATCH), {
    title: item.title,
    price: item.price,
    image: item.image,
    description: item.description,
  });
}

export async function setItem(item: Item, id: number): Promise<void> {
  const docRef = doc(collection(db, WATCH), id.toString()); // Use item.id as the document ID
  await setDoc(docRef, {
    title: item.title,
    price: item.price,
    image: item.image,
    description: item.description,
  });
}
