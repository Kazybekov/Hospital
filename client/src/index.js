import React from 'react';
import ReactDOM from 'react-dom/client';
import  { Fragment } from "react";
import './index.css';
import App from "./App";
import Mainpage from './components/mainpage';
import { BrowserRouter } from 'react-router-dom';

//ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
    //<Fragment>
        //<div className="container">
        //  <React.StrictMode>
        //      <App/>
        //      <Mainpage/> 
        //  </React.StrictMode>

        //</div>
        // <div className="container">
        //
        //   <App />
        //
        // </div>
      //</Fragment>
);
