"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/categories/list")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }, []);

  const createNew = () => {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/categories/list${name}`)
      .then((res) => res.json())
      .then((data) => {});
  }

  return(
    <main>
      <button onClick={createNew}>Add New</button>
     {categories.map((category) => (
      <div key={category.name}>{category.name}</div>
     ))}
    </main>
  );
}
