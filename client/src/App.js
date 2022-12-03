import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
  

import Login from "./components/loginpage";
import Main from "./components/mainpage";
import Admin from "./components/adminpage";
import RegDoctor from "./components/registrationdoctor";
import RegPatient from "./components/registrationpatient";
import Search from "./components/search";
  
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/loginpage" element={<Login />} />   
          <Route path="/adminpage" element={<Admin />} />   
          <Route path="/registrationdoctor" element={<RegDoctor />} />   
          <Route path="/registrationpatient" element={<RegPatient />} />   
          <Route path="/search" element={<Search />} />   
        </Routes>
      </Router>
  );
};
  
export default App;

