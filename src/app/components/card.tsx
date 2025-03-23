import { Item } from "../configs/item";
import ExpandableText from "../utils/expandableText";
import "./../styles/card.css";

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
