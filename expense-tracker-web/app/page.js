"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/articles")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
      });
  }, []);

  return(
    <main>
     {articles.map((item) => (
      <div key={item.id}>{item.title}, {item.id}</div>
     ))}
    </main>
  );
}
