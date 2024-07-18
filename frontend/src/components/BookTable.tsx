import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Book {
  isbn: string;
  title: string;
  author: string;
  genre: string;
}

export default function BookTable() {
  const [books, setBooks] = useState<Book[]>([]);
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5258/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(filter.toLowerCase()) ||
      book.author.toLowerCase().includes(filter.toLowerCase())
  );

  const handleRowClick = (isbn: string): void => {
    navigate(`/bookdetails/${isbn}`);
  };

  return (
    <div className="book-table-container">
      <div className="table-header">
        <input
          type="text"
          placeholder="Cerca per titolo o autore"
          value={filter}
          onChange={handleFilterChange}
          className="filter-input"
        />
      </div>

      <div className="table-body">
        <table className="book-table">
          <thead>
            <tr className="book-table-row">
              <th>ISBN</th>
              <th>Titolo</th>
              <th>Autore</th>
              <th>Genere</th>
              <th>Disponibile</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks &&
              filteredBooks.map((book) => (
                <tr
                  className="book-table-row"
                  key={book.isbn}
                  onClick={() => handleRowClick(book.isbn)}
                >
                  <td>{book.isbn}</td>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.genre}</td>
                  <td className="status available">Si</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
