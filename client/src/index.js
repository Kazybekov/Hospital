import React from 'react';
import ReactDOM from 'react-dom/client';
import  { Fragment } from "react";
import './index.css';
import App from './App';
import Mainpage from './components/mainpage';
import Adminpage from './components/adminpage';
import Regdoctor from './components/regdoctor';
import Search from './components/search';


//ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
          <Search/>
);
