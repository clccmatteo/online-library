import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import "./BookDetailsPage.css";
import AddForm from "../../components/AddForm/AddForm";

interface Book {
  title: string;
  isbn: string;
  author: string;
  genre: string;
}

export default function BookDetails() {
  const [book, setBookDetails] = useState<Book | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [showFormDialog, setShowFormDialog] = useState(false);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const { isbn } = useParams<{ isbn: string }>();
  const navigate = useNavigate();

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
    if (isEditing && book) {
      fetch(`http://localhost:5258/api/books/${isbn}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(book),
      });
    }
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setBookDetails((prevBook) =>
      prevBook ? { ...prevBook, [name]: value } : null
    );
  }

  function handleDeleteClick() {
    setShowConfirmDialog(true);
  }

  function handleConfirmDelete() {
    if (book) {
      fetch(`http://localhost:5258/api/books/${isbn}`, {
        method: "DELETE",
      }).then(() => {
        navigate("/");
      });
    }
    setShowConfirmDialog(false);
  }

  function handleCancelDelete() {
    setShowConfirmDialog(false);
  }

  function handleCtaClick() {
    setShowFormDialog(true);
  }

  return (
    <>
      <Header cta="Nuovo libro" ctaOnClick={handleCtaClick} />
      {book && (
        <div className="book-container">
          <div className="details-container edit-container">
            {isEditing ? (
              <>
                <div className="edit-line">
                  <label htmlFor="title">Titolo:</label>
                  <input
                    className="input-edit"
                    type="text"
                    id="title"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                  />
                </div>

                <div className="edit-line">
                  <label htmlFor="author">Autore:</label>
                  <input
                    className="input-edit"
                    type="text"
                    id="author"
                    name="author"
                    value={book.author}
                    onChange={handleChange}
                  />
                </div>
                <div className="edit-line">
                  <label htmlFor="genre">Genere:</label>
                  <input
                    className="input-edit"
                    type="text"
                    id="genre"
                    name="genre"
                    value={book.genre}
                    onChange={handleChange}
                  />
                </div>
              </>
            ) : (
              <>
                <span className="genre">{book.genre}</span>
                <span className="title">{book.title}</span>
                <span className="author">Autore: {book.author}</span>
                <span className="isbn">ISBN: {book.isbn}</span>
              </>
            )}
          </div>
          <div className="btn-container">
            <button className="btn btn--edit" onClick={handleEditClick}>
              {isEditing ? "Salva" : "Modifica"}
            </button>
            <button className="btn btn--delete" onClick={handleDeleteClick}>
              Elimina
            </button>
          </div>
          {showConfirmDialog && (
            <ConfirmDialog
              message="Sei sicuro di voler eliminare questo libro?"
              onConfirm={handleConfirmDelete}
              onCancel={handleCancelDelete}
            />
          )}
        </div>
      )}
      {showFormDialog && (
        <AddForm
          type="book"
          fields={["isbn", "name", "author", "genre"]}
          onSubmit={() => {}}
          onClose={() => {}}
        />
      )}
    </>
  );
}
