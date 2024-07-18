import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import BookDetails from "./pages/BookDetails/BookDetails";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "bookdetails", element: <BookDetails /> },
  { path: "bookdetails/:isbn", element: <BookDetails /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
