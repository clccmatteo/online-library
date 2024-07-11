const books = [
  {
    isbn: "9780743273565",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Fiction",
    published_date: "1925-04-10",
  },
  {
    isbn: "9780451524935",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian",
    published_date: "1949-06-08",
  },
  {
    isbn: "9780061120084",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Fiction",
    published_date: "1960-07-11",
  },
];

export default function BookTable() {
  return (
    <div className="book-table-container">
      <table className="book-table">
        <thead>
          <tr>
            <th>Titolo</th>
            <th>Autore</th>
            <th>Genere</th>
            <th>Data di Pubblicazione</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.isbn}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.published_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
