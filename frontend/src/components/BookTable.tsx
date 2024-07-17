import React, { useEffect, useState } from "react";

interface Book {
  isbn: string;
  title: string;
  author: string;
  genre: string;
}

const BookTable = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    fetch("http://localhost:5258/api/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(filter.toLowerCase()) ||
      book.author.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="book-table-container">
      <div className="table-header">
        <input
          type="text"
          placeholder="Cerca per titolo, autore"
          value={filter}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>

      <div className="table-body">
        <table className="book-table">
          <thead>
            <tr className="book-table-row">
              <th className="w-3/20">ISBN</th>
              <th className="w-3/10">Title</th>
              <th className="w-1/4">Autore</th>
              <th className="w-1/4">Genere</th>
              <th className="w-1/20">Disponibile</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks &&
              filteredBooks.map((book) => (
                <tr className="book-table-row" key={book.isbn}>
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td className="status avaible">Si</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookTable;
