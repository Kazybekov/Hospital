import React from "react";
import {useState } from "react";
import { useNavigate } from 'react-router-dom';


// const Loginpage= () =>{
//
// }

const Loginpage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate();

  const clickLogin = async(e) =>  {
  e.preventDefault();
  //console.log("here2")

  let b={
    "login":username,
    "password":password
  }

  console.log(b)

  await fetch ("http://localhost:1234/users/login", {
     method: "POST",
     headers: {
       'Content-Type': 'application/json'
    },
     body: JSON.stringify(b)
  })
  .then((response) => response.json())
  .then((result) => {
    if(result.message === "SUCCESS"){
      alert("You are logged in.");
      navigate('/adminpage');
      //console.log("yeap")
      //this.goToMain();
     } else {
         alert("Please check your login information.");
     }
  });
  }

  return (
    <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/css/stylelogin.css" />
          <div className="container">
            <div className="title">Login</div>
            <div className="content">
              <form method="post">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">User ID</span>
                    <input
                    onChange={(q) => setUsername(q.target.value)}
                    name="login" type="text" placeholder="Enter your user ID" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input
                    onChange={(q) => setPassword(q.target.value)}
                    name="password" type="password" placeholder="Enter your password" required />
                  </div>
                  <div className="button">
                    <input
                    onClick={clickLogin}
                    type="submit" defaultValue="Login" />
                  </div>
                </div></form>
            </div>
          </div></div>
  );
};

export default Loginpage;
