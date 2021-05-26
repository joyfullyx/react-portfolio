import React from "react";
import "../../styles/Work.css";
import Oui from "./Images/Oui.png";
import Vaccine from "./Images/Vaccine.png";
import NoteTaker from "./Images/NoteTaker.png";
import Ecommerce from "./Images/Ecommerce.png";
import Employee from "./Images/Employee.png";
import ReactEmployee from "./Images/ReactEmployee.png";

function Work() {
  return (
    <div>
      <h1 class="d-flex justify-content-around p-4">Work</h1>

      <div className="d-flex justify-content-around align-self-center p-4">
        <img src={Oui} alt="oui community board" className="oui rounded"></img>
        <div className="d-flex justify-content-around align-self-center p-4">
          <p>
            <strong>Oui Circle</strong>
            <br></br>
            <br></br>
            Oui Circle Community Bulletein is an online community board where
            neighbors can create an account to post, view, or comment on
            neighborhood events.
            <br></br>
            <br></br>
            <a
              href="http://oui-circle-app.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui"
              >
                Oui Circle
              </button>
            </a>
            <a
              href="https://github.com/joyfullyx/project-2"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui-repo"
              >
                Github Repo
              </button>
            </a>
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around align-self-center p-4">
        <img
          src={Vaccine}
          alt="vaccine finder"
          className="vaccine rounded"
        ></img>
        <div className="d-flex align-self-center p-4">
          <p>
            <strong>Covid-19 Vaccine Finder</strong>
            <br></br>
            <br></br>
            Vaccine Finder is a location based Covid-19 vaccine administration
            locator. Users can see which type of vaccine is offered, make or
            view appointments for the vaccine, and can be directed directly to
            the location offering the vaccine.
            <br></br>
            <br></br>
            <a
              href="https://joyfullyx.github.io/project-covid/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui"
              >
                Vaccine Finder
              </button>
            </a>
            <a
              href="https://github.com/joyfullyx/project-covid"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui-repo"
              >
                Github Repo
              </button>
            </a>
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around align-self-center p-4">
        <img
          src={ReactEmployee}
          alt="vaccine finder"
          className="vaccine rounded"
        ></img>
        <div className="d-flex align-self-center p-4">
          <p>
            <strong>Employee Directory</strong>
            <br></br>
            <br></br>
            React app that allows employers to search a directory with
            non-sensitive information to easily find employees through forward
            and reverse alphabetical order and search.
            <br></br>
            <br></br>
            <a
              href="https://jr-employee-directory-react.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui"
              >
                Employee Directory
              </button>
            </a>
            <a
              href="https://github.com/joyfullyx/employee-directory-react"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui-repo"
              >
                Github Repo
              </button>
            </a>
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around align-self-center p-4">
        <img
          src={NoteTaker}
          alt="vaccine finder"
          className="notes rounded"
        ></img>
        <div className="d-flex align-self-center p-4">
          <p>
            <strong>Express Note Taker</strong>
            <br></br>
            <br></br>
            Note taker is an express.js application for note taking. Users can
            create, edit, and delete notes with smooth functionality and ease.
            <br></br>
            <br></br>
            <a
              href="https://joys-note-taker.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui"
              >
                Note Taker
              </button>
            </a>
            <a
              href="https://github.com/joyfullyx/note-taker"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui-repo"
              >
                Github Repo
              </button>
            </a>
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around align-self-center p-4">
        <img
          src={Employee}
          alt="vaccine finder"
          className="notes rounded"
        ></img>
        <div className="d-flex align-self-center p-4">
          <p>
            <strong>Employee Tracker</strong>
            <br></br>
            <br></br>
            Node.js using MySql database that allows employers to add
            information about employees. Information and categories available to
            add include name, manager, role, department, and salary.
            <br></br>
            <br></br>
            <button
              type="button"
              className="btn btn-outline-secondary"
              disabled
              id="oui"
            >
              Terminal only!
            </button>
            <a
              href="https://github.com/joyfullyx/employee-tracker"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui-repo"
              >
                Github Repo
              </button>
            </a>
          </p>
        </div>
      </div>

      <div className="d-flex justify-content-around align-self-center p-4">
        <img
          src={Ecommerce}
          alt="vaccine finder"
          className="inventory rounded"
        ></img>
        <div className="d-flex align-self-center p-4">
          <p>
            <strong>Express E-Commerce Inventory Tracker</strong>
            <br></br>
            <br></br>
            E-commerce Inventory Tracker is an express.js application using the
            MySQL database with sequelize for an online business to keep track
            of inventory by product, product type, tags, and tag id's.
            <br></br>
            <br></br>
            <button
              type="button"
              className="btn btn-outline-secondary"
              disabled
              id="oui"
            >
              Backend only!
            </button>
            <a
              href="https://github.com/joyfullyx/express-ecommerce"
              target="_blank"
              rel="noreferrer"
            >
              <button
                type="button"
                className="btn btn-outline-secondary"
                id="oui-repo"
              >
                Github Repo
              </button>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;
