"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);

  const loadList = () => {
    fetch("http://localhost:4000/categories/list")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  }

  useEffect(() => {
   loadList();
  }, []);

  const createNew = () => {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/categories/create?name=${name}`)
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  }

  return(
    <main>
      <button onClick={createNew}>Add New</button>
     {categories.map((category) => (
      <div key={category.name}>{category.name} <button>edit</button> <button>delete</button></div>
     ))}
    </main>
  );
}
