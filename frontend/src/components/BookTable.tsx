import React, { useEffect, useState } from "react";

interface Book {
  isbn: string;
  title: string;
  author: string;
  genre: string;
}

const BookTable = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("http://localhost:5258/api/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      });
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Caricamento in corso...</div>;
  }

  return (
    <div className="book-table-container">
      <table className="book-table">
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Title</th>
            <th>Autore</th>
            <th>Genere</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => (
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.genre}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
