"use client";

import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import Card, { Item } from "./card";
import "./content.css";
import { readItems } from "./dataHandler";

export default function Content() {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    readItems().then((data) => setItems(data));
  }, []);

  const item: Item = {
    title: "ORIS",
    price: 800,
    image: "https://i.imgur.com/DWCKlFd.png",
    description: "12345",
  };

  // for (let index = 0; index < 10; index++) {
  //   setItem(item, index);
  // }

  return (
    <>
      <div className="content">
        <div className="search">
          <GoSearch className="search-icon"></GoSearch>
          <input
            className="search-input"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          ></input>
        </div>
        <div className="items">
          {items
            .filter(({ title }) =>
              title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((item, index) => (
              <Card key={index} item={item}></Card>
            ))}
        </div>
      </div>
    </>
  );
}
