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
  };

  useEffect(() => {
    loadList();
  }, []);

  const createNew = () => {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/categories/create`, {
      method: "POST" ,
      body: JSON.stringify({name: name})
    })
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  };

  const deleteTask = () => {
    const  id = alert("Are you sure?")
    fetch(`http://localhost:4000/categories/delete?id=${id}`)
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  };

  return (
    <main className="container mx-auto">
      <button onClick={createNew}>Add New</button>
      {categories.map((category) => (
        <div key={category.name}>
          {category.name}
          <button>update</button>
          <button onClick={deleteTask}>delete</button>
        </div>
      ))}
    </main>
  );
}
