import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import "./BookDetails.css";

interface BookDetailsProps {
  isbn: string;
}

interface Book {
  title: string;
  isbn: string;
  author: string;
  genre: string;
}

export default function BookDetails() {
  const [bookDetails, setBookDetails] = useState<Book | null>(null);
  const { isbn } = useParams<{ isbn: string }>();

  useEffect(() => {
    const fetchBookDetails = async () => {
      const response = await fetch(`http://localhost:5258/api/books/${isbn}`);
      const data = await response.json();
      setBookDetails(data);
    };

    fetchBookDetails();
  }, [isbn]);

  if (!bookDetails) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <h1>Dettagli del libro</h1>
        <p className="title">{bookDetails.title}</p>
        <p>ISBN: {bookDetails.isbn}</p>
        <p>Autore: {bookDetails.author}</p>
        <p>Genere: {bookDetails.genre}</p>
      </div>
    </>
  );
}
