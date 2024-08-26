"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [categories, setCategories] = useState([]);

  const loadList = () => {
    fetch("http://localhost:4000/categories")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      });
  };

  useEffect(() => {
    loadList();
  }, []);

  // create
  const createNew = () => {
    const name = prompt("Name...");
    fetch(`http://localhost:4000/categories`, {
      method: "POST",
      body: JSON.stringify({ name: name }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then(() => {
        loadList();
      });
  };

// delete
  const deleteTask = (id) => {
    fetch(`http://localhost:4000/categories/${id}`, {
      method: "DELETE",
    }).then((res) => {
      if(res.status === 404){
        alert("Category not found!")
      }
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
          <button onClick={() => deleteTask(category.id)}>delete</button>
        </div>
      ))}
      <div>
        wrong data
        <button onClick={() => deleteTask("wrongID")}>delete</button>
      </div>
    </main>
  );
}
