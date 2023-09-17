import Axios from "axios";
import { useState } from "react";
import './App.css';

function App() {
  const [name,setName] = useState("");
  const[PredictedAge,setPredictedAge] = useState(0);
  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${name}`).then((res) =>{
      setPredictedAge(res.data.age);
    });
  }; 
  return (
    <div className="App">
      <input placeholder="Ex.Viraj.." onChange={(event) => {setName(event.target.value)} }></input>
      <button onClick={fetchData}>Predict Age</button>

      <h1> Predicted Age : {PredictedAge}</h1>
    </div>
  );
}

export default App;
