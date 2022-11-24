import React from "react";
  
const loginpage = () => {
  return (
    <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/css/stylelogin.css" />
          <div className="container">
            <div className="title">Login</div>
            <div className="content">
              <form action="/users/login" method="post">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">User ID</span>
                    <input name="login" type="text" placeholder="Enter your user ID" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Password</span>
                    <input name="password" type="password" placeholder="Enter your password" required />
                  </div>
                  <div className="button">
                    <input type="submit" defaultValue="Login" />
                  </div>
                </div></form>
            </div>
          </div></div>
  );
};
  
export default loginpage;