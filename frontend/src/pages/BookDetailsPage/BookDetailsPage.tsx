import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./BookDetails.css";

interface Book {
  title: string;
  isbn: string;
  author: string;
  genre: string;
}

export default function BookDetails() {
  const [book, setBookDetails] = useState<Book | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const { isbn } = useParams<{ isbn: string }>();

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`http://localhost:5258/api/books/${isbn}`);
      const data = await response.json();
      setBookDetails(data);
    };

    fetchBookDetails();
  }, [isbn]);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  return (
    <>
      <Header />
      {book && (
        <div className="book-container">
          <div className="details-container">
            <span className="genre">{book.genre}</span>
            <h2 className="title">{book.title}</h2>
            <span className="author">Autore: {book.author}</span>
            <span className="isbn">ISBN: {book.isbn}</span>
          </div>
          <div className="btn-container">
            <button className="btn btn--edit" onClick={handleEditClick}>
              {isEditing ? "Salva" : "Modifica"}
            </button>
            <button className="btn btn--delete">Elimina</button>
          </div>
        </div>
      )}
    </>
  );
}
