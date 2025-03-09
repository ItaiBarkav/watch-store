import { addDoc, collection, getDocs } from "@firebase/firestore";
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
