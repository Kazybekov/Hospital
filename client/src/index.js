import React from 'react';
import ReactDOM from 'react-dom/client';
import  { Fragment } from "react";
import './index.css';
import App from './App';
import Mainpage from './mainpage';
import Adminpage from './adminpage';
import Regdoctor from './regdoctor';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    //<Fragment>
        //<div className="container">

          < Regdoctor/>

        //</div>
        // <div className="container">
        //
        //   <App />
        //
        // </div>
      //</Fragment>
);
