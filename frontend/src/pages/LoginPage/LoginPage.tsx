import React from "react";
import "./LoginPage.css";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="container">
      <form action="">
        <h1>Accesso</h1>
        <div className="input-box">
          <input type="text" placeholder="Username" required />
          <FaUser className="icon" />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Password" required />
          <FaLock className="icon" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
