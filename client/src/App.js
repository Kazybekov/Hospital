import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
  

import Login from "./components/loginpage";
import Main from "./components/mainpage";

  
function App() {
  return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/loginpage" element={<Login />} />   
        </Routes>
      </Router>
  );
};
  
export default App;
