import './App.css';
import Axios from 'axios';
import { useState,useEffect } from "react";

function App() {
  // fetch("https://catfact.ninja/fact")
  // .then((res) => res.json())  // Call res.json() to parse JSON response
  // .then((data) => {
  //   console.log(data);  // Update the catFact state with the received fact
  // })

  const fetchCatfact = () =>{
    Axios.get("https://catfact.ninja/fact").then((res) => {
      setCatFact(res.data.fact);
    });
  }
  const [catFact,setCatFact] = useState("");
  useEffect(() => {
    fetchCatfact();
  },[]);

  return (
    <div className="App">
      <button onClick={fetchCatfact}>Generate Cat Fact</button>
      <p>{catFact} </p>
    </div>
  );
}

export default App;
