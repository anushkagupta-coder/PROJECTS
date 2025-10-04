// src/components/BookList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books")
      .then(res => setBooks(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Book Reviews</h1>
      {books.map((book, i) => (
        <div key={i} style={{border: "1px solid gray", margin: "10px", padding: "10px"}}>
          <h2>{book.name}</h2>
          <p>{book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default BookList;
