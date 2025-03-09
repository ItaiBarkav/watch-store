"use client";

import { useEffect, useState } from "react";
import Card, { Item } from "./card";
import "./content.css";
import { readItems } from "./dataHandler";

export default function Content() {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    readItems().then((data) => setItems(data));
  }, []);

  // const item: Item = {
  //   title: "Longines CONQUEST",
  //   price: 1600,
  //   image: "/longines_conquest.png",
  //   description:
  //     "CONQUEST, L3.830.4.02.6, Automatic watch, Ø 41.00 mm, Stainless steel. Date, Self-winding mechanical movement beating at 25'200 vibrations per hour, with a monocrystalline silicon balance-spring power reserve up to 72 hours. Screw-in crown, Water-resistant to 10 bar, Scratch-resistant sapphire crystal, with several layers of anti-reflective coating on both sides. Sunray green dial, Swiss Super-LumiNova®. Stainless steel bracelet, With triple safety folding clasp and push-piece opening mechanism.",
  // };

  // addItem(item);

  return (
    <>
      <div className="content">
        {items.map((item, index) => (
          <Card key={index} item={item}></Card>
        ))}
      </div>
    </>
  );
}
