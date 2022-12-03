import React from 'react';
import ReactDOM from 'react-dom/client';
import  { Fragment } from "react";
import './index.css';
<<<<<<< HEAD
import App from './App';
import Mainpage from './components/mainpage';
import Adminpage from './components/adminpage';
import Regdoctor from './components/regdoctor';

=======
import App from "./App";
import Mainpage from './components/mainpage';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> 4c227ed3e268a64ab3514b21f5488a15d4986da8

//ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
          < Regdoctor/>
=======
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
>>>>>>> 4c227ed3e268a64ab3514b21f5488a15d4986da8
);
