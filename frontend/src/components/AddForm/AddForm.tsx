import React, { useState } from "react";
import "./AddForm.css";

interface AddFormProps {
  type: "book" | "user";
  fields: string[];
  onSubmit: (data: any) => void;
  onClose: () => void;
}

export default function AddForm({
  type,
  fields,
  onSubmit,
  onClose,
}: AddFormProps) {
  const [formData, setFormData] = useState<any>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="overlay">
      <div className="modal">
        <h2>{type === "book" ? "Aggiungi Libro" : "Aggiungi Utente"}</h2>
        <form onSubmit={handleSubmit}>
          {fields.map((field) => (
            <label key={field}>
              {field.charAt(0).toUpperCase() + field.slice(1)}:
              <input
                type="text"
                name={field}
                onChange={handleChange}
                required
              />
            </label>
          ))}
          <div className="btn-container">
            <button type="submit">Invia</button>
            <button type="button" onClick={onClose}>
              Annulla
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
