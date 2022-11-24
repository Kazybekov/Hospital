import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import {Link} from "react-router-dom";

const mainpage = () => {
  return (
      <div>
        <nav>
          <ul>
            <li>
              <a> HOME </a>
            </li>
            <li>
              <a> ABOUT US </a>
            </li>
            <li>
              <a> DEPARTMENTS </a>
            </li>
            <li>
              <a> SERVICES </a>
            </li>
            <li>
              <a> DOCTORS </a>
            </li>
            <li>
              <a > CONTACT </a>
            </li>
            <li>
              <a> MAKE AN APPOINTMENT </a>
            </li>
            <li>
              <Link to="/loginpage"> LOGIN </Link>
            </li>
          </ul>
        </nav>
      </div>
  );
};

export default mainpage;
