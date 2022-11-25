import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const regpatient = () => {
return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/css/stylelogin.css" />
      <div className="container">
        <div className="title">Registration for patient</div>
        <div className="content">
          <form action="/register/patient" method="post">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Date of birth</span>
                <input name="bdate" type="date" required />
              </div>
              <div className="input-box">
                <span className="details">IIN number</span>
                <input name="iin" type="text" placeholder="Enter patient's IIN number" required />
              </div>
              <div className="input-box">
                <span className="details">ID number</span>
                <input name="id" type="text" placeholder="Enter patient's ID number" required />
              </div>
              <div className="input-box">
                <span className="details">Name</span>
                <input name="name" type="text" placeholder="Enter patient's name" required />
              </div>
              <div className="input-box">
                <span className="details">Surname</span>
                <input name="surname" type="text" placeholder="Enter patient's surname" required />
              </div>
              <div className="input-box">
                <span className="details">Middlename</span>
                <input name="middlename" type="text" placeholder="Enter patient's middlename" required />
              </div>
              <div className="input-box">
                <span className="details">Blood group</span>
                <input name="bloodgroup" type="text" placeholder="Enter patient's blood group" required />
              </div>
              <div className="input-box">
                <span className="details">Emergency contact number</span>
                <input name="contact_e" type="text" placeholder="Enter patient's emergency contact number" required />
              </div>
              <div className="input-box">
                <span className="details">Contact number</span>
                <input name="contact" type="text" placeholder="Enter patient's contact number" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input name="email" type="text" placeholder="Enter patient's email" />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input name="adress" type="text" placeholder="Enter patient's address" required />
              </div>
              <div className="input-box">
                <span className="details">Marital status</span>
                <input name="marital" type="text" placeholder="Enter patient's marital status" required />
              </div>
              <div className="input-box">
                <span className="details">Registration date</span>
                <input name="reg_date" type="date" required />
              </div>
              <div className="button">
                <input type="submit" defaultValue="Register" />
              </div>
            </div>
          </form>
          <div id="containr">
            <Link to="/registrationdoctor"> Register Doctor </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default regpatient;