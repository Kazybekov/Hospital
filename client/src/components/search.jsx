import { useState } from "react";
import React from "react";
var data = require("./speclist.json"); 
class App extends React.Component {
   
  // Constructor 
  constructor(props) {
      super(props);
 
      this.state = {
          items: [],
          DataisLoaded: false
      };
  }
 
  // ComponentDidMount is used to
  // execute the code 
  componentDidMount() {
      fetch("https://localhost:1234/views/doctor")
          .then((res) => res.json())
          .then((json) => {
              this.setState({
                  items: json,
                  DataisLoaded: true
              });
          })
  }
  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;
 
      return (
      <div className = "App">
          <h1> Fetch data from an api in react </h1>  {
              items.map((item) => ( 
              <ol key = { item.id } >
                  User_Name: { item.username }, 
                  Full_Name: { item.name }, 
                  User_Email: { item.email } 
                  </ol>
              ))
          }
      </div>
  );
}

// ComponentDidMount is used to
// execute the code 
}
export default function () {

const [value, setValue] = useState("");

const onChange = (event) => {
  setValue(event.target.value);
};

const onSearch = (searchTerm) => {
  setValue(searchTerm);
  // our api to fetch the search result
  console.log("search ", searchTerm);
};

return (
  <div className="App">
    <h1>Search</h1>

    <div className="search-container">
      <div className="search-inner">
        <input type="text" value={value} onChange={onChange} />
        <button onClick={() => onSearch(value)}> Search </button>
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            const searchTerm = value.toLowerCase();
            const fullName = item.full_name.toLowerCase();

            return (
              searchTerm &&
              fullName.startsWith(searchTerm) &&
              fullName !== searchTerm
            );
          })
          .slice(0, 10)
          .map((item) => (
            <div
              onClick={() => onSearch(item.full_name)}
              className="dropdown-row"
              key={item.full_name}
            >
              {item.full_name}
            </div>
          ))}
      </div>
    </div>
  </div>
);
          }