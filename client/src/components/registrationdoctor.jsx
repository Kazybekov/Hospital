import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const regdoctor = () => {
return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="/css/stylelogin.css" />
      <div className="container">
        <div className="title">Registration for doctor</div>
        <div className="content">
          <form action="/register/doctor" method="post">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Date of birth</span>
                <input name="bdate" type="date" required />
              </div>
              <div className="input-box">
                <span className="details">IIN number</span>
                <input name="iin" type="text" placeholder="Enter doctor's IIN number" required />
              </div>
              <div className="input-box">
                <span className="details">ID number</span>
                <input name="id" type="text" placeholder="Enter doctor's ID number" required />
              </div>
              <div className="input-box">
                <span className="details">Name</span>
                <input name="name" type="text" placeholder="Enter doctor's name" required />
              </div>
              <div className="input-box">
                <span className="details">Surname</span>
                <input name="surname" type="text" placeholder="Enter doctor's surname" required />
              </div>
              <div className="input-box">
                <span className="details">Middlename</span>
                <input name="middlename" type="text" placeholder="Enter doctor's middlename" required />
              </div>
              <div className="input-box">
                <span className="details">Contact number</span>
                <input name="number" type="text" placeholder="Enter doctor's contact number" required />
              </div>
              <div className="input-box">
                <span className="details">Department ID</span>
                <input name="department_id" type="text" placeholder="Enter doctor's department ID" required />
              </div>
              <div className="input-box">
                <span className="details">Specialization details ID</span>
                <input name="spec_id" type="text" placeholder="Enter doctor's specialization details ID" required />
              </div>
              <div className="input-box">
                <span className="details">Expetrience in years</span>
                <input name="experience" type="text" placeholder="Enter doctor's experience in years" required />
              </div>
              <div className="details">
                <span className="details">Photo of the doctor</span> <br /> <br />
                <input name="photo" type="file" accept="image/*" required />
              </div>
              <div className="input-box">
                <span className="details">Category</span>
                <input name="category" type="text" placeholder="Enter doctor's category" required />
              </div>
              <div className="input-box">
                <span className="details">Price of the appointment</span>
                <input name="price" type="text" placeholder="Enter price of the appointment" required />
              </div>
              <div className="input-box">
                <span className="details">Schedule details</span>
                <input name="schedule" type="text" placeholder="Enter doctor's schedule details" required />
              </div>
              <div className="input-box">
                <span className="details">Degree/education(MD, PhD, etc.)</span>
                <input name="degree" type="text" placeholder="Enter doctor's degree/education" required />
              </div>
              <div className="input-box">
                <span className="details">Rating</span>
                <div className="form_radio_btn">
                  <input id="radio-1" type="radio" name="radio" defaultValue={1} defaultChecked />
                  <label htmlFor="radio-1">1</label>
                </div>
                <div className="form_radio_btn">
                  <input id="radio-2" type="radio" name="radio" defaultValue={2} />
                  <label htmlFor="radio-2">2</label>
                </div>
                <div className="form_radio_btn">
                  <input id="radio-3" type="radio" name="radio" defaultValue={3} />
                  <label htmlFor="radio-3">3</label>
                </div>
                <div className="form_radio_btn">
                  <input id="radio-4" type="radio" name="radio" defaultValue={4} />
                  <label htmlFor="radio-4">4</label>
                </div>
                <div className="form_radio_btn">
                  <input id="radio-5" type="radio" name="radio" defaultValue={5} />
                  <label htmlFor="radio-5">5</label>
                </div> <br />
                <div className="form_radio_btn">
                  <input id="radio-6" type="radio" name="radio" defaultValue={6} />
                  <label htmlFor="radio-6">6</label>
                </div>
                <div className="form_radio_btn">
                  <input id="radio-7" type="radio" name="radio" defaultValue={7} />
                  <label htmlFor="radio-7">7</label>
                </div>
                <div className="form_radio_btn">
                  <input id="radio-8" type="radio" name="radio" defaultValue={8} />
                  <label htmlFor="radio-8">8</label>
                </div>
                <div className="form_radio_btn">
                  <input id="radio-9" type="radio" name="radio" defaultValue={9} />
                  <label htmlFor="radio-9">9</label>
                </div>
                <div className="form_radio_btn">
                  <input id="radio-10" type="radio" name="radio" defaultValue={10} />
                  <label htmlFor="radio-10">10</label>
                </div>
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input name="address" type="text" placeholder="Enter doctor's address" required />
              </div>
              <div className="input-box">
                <span className="details">Homepage url</span>
                <input name="url" type="text" placeholder="Enter doctor's homepage url" />
              </div>
              <div className="button">
                <input type="submit" defaultValue="Register" />
              </div>
            </div>
          </form>
          <div id="containr">
            <Link to="/registrationpatient"> Register Patient </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default regdoctor;