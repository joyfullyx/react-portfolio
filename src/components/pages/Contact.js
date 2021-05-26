import React from "react";
// import { Link, Route } from "react-router-dom";
import "../../styles/Contact.css";

function Contact() {
  return (
    <div id="info">
      <h1 class="d-flex justify-content-around p-4">Contact</h1>
      <div class="p-5" id="contact">
      <p>
        <strong>Email: </strong>{" "}
        <a href="mailto:joyfullyx@gmail.com" id="email" className="text-secondary">
          joyfullyx@gmail.com
        </a>
      </p>
      <p>
        <strong>Github: </strong>{" "}
        <a href="https://github.com/joyfullyx" target="_blank" rel="noreferrer" id="github" className="text-secondary">
          Github
        </a>
      </p>
      <p>
        <strong>LinkedIn: </strong>{" "}
        <a href="https://www.linkedin.com/in/joy-rhee/" target="_blank" rel="noreferrer"id="linkedin" className="text-secondary">
          LinkedIn
        </a>
      </p>
      </div>
    </div>
  );
}

export default Contact;
