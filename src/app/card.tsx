import "./card.css";
import ExpandableText from "./expandableText";

export interface Item {
  title: string;
  price: number;
  image: string;
  description: string;
}

export default function Card({ item }: { item: Item }) {
  return (
    <>
      <div className="card">
        <img className="image" src={item.image}></img>
        <span>{item.title}</span>
        <span>{item.price.toLocaleString()}$</span>
        <ExpandableText text={item.description}></ExpandableText>
      </div>
    </>
  );
}
