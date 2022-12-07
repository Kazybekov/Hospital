import React from "react";
import {useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const Patientpage = (iin) => {
const [products, setProducts] = useState([]);

// useEffect(() => {
//   fetchProducts();
// }, []);

const  fetchProducts =  async () => {

  await fetch ("http://localhost:1234/view/patient/1", {
     method: "GET",
     headers: {
       'Content-Type': 'application/json'
    },
  })
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
  });
};

fetchProducts();

  return (

    <div>
       <meta charSet="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link rel="stylesheet" href="/css/styleadminpage.css" />
       <header>
         <div>
           <a href="index.html">DenSys.me</a>
         </div>
       </header>
       <div className="container" id="container1">
         <span> Doctor 1 </span>
       </div>
       <div className="container" id="container2" style={{height: '500px'}}>
         <div className="block" id="block1">
           <img src="https://cdn-icons-png.flaticon.com/512/306/306473.png" width={300}  height={280} />
         </div>
         <div className="block" id="block2">
           <ul>
             <div className="input-box">
               <span className="details">Date of birth </span>
             </div>
             <div className="input-box">
               <span className="details">IIN number</span>
             </div>
             <div className="input-box">
               <span className="details">ID number</span>
             </div>
             <div className="input-box">
               <span className="details">Name</span>
               </div>
             <div className="input-box">
               <span className="details">Surname</span>
             </div>
             <div className="input-box">
               <span className="details">Middlename</span>
             </div>
             <div className="input-box">
               <span className="details">Contact number</span>
             </div>
             <div className="input-box">
               <span className="details">Department ID</span>
             </div>
             <div className="input-box">
               <span className="details">Specialization details ID</span>
             </div>
             <div className="input-box">
               <span className="details">Expetrience in years</span>
             </div>
             <div className="details">
               <span className="details">Photo of the doctor</span> <br /> <br />
             </div>
             <div className="input-box">
               <span className="details">Category</span>
             </div>
             <div className="input-box">
               <span className="details">Price of the appointment</span>
             </div>
             <div className="input-box">
               <span className="details">Schedule details</span>
             </div>
             <div className="input-box">
               <span className="details">Degree/education(MD, PhD, etc.)</span>
             </div>
             <div className="input-box">
               <span className="details">Rating</span>
             </div>
             <div className="input-box">
               <span className="details">Address</span>
             </div>
             <div className="input-box">
               <span className="details">Homepage url</span>
             </div>
             <button className="edit">Edit</button>
           </ul>
         </div>
       </div>
     </div>

  );
};

export default Patientpage;
