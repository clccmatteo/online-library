import { useState } from "react";
import "./HomePage.css";
import Header from "../../components/Header";
import BookTable from "../../components/BookTable";
import AddForm from "../../components/AddForm/AddForm";

export default function HomePage() {
  const [showFormDialog, setShowFormDialog] = useState(false);

  function handleCtaClick() {
    setShowFormDialog(true);
  }

  function handleFormSubmit(data: any) {
    fetch("http://localhost:5258/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }

  function handleFormClose() {
    setShowFormDialog(false);
  }

  return (
    <>
      <Header cta="Nuovo libro" ctaOnClick={handleCtaClick} />
      <BookTable />
      {showFormDialog && (
        <AddForm
          type="book"
          fields={["isbn", "title", "author", "genre"]}
          onSubmit={handleFormSubmit}
          onClose={handleFormClose}
        />
      )}
    </>
  );
}
