"use client";

import { useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { Item } from "../configs/item";
import { readItems } from "../services/dataHandler";
import "./../styles/content.css";
import Card from "./card";

export default function Content() {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    readItems().then((data) => setItems(data));
  }, []);

  const filteredItems = items.filter(({ title }) =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => <Card key={index} item={item} />)
          ) : (
            <div className="no-results">No items found</div>
          )}
        </div>
      </div>
    </>
  );
}
