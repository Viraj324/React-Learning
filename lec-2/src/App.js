import { useState } from "react";
import './App.css';

function App() {
  // const [age, setAge] = useState(0);
  
  // const increaseAge = () => {
  //   setAge(age + 1); // Corrected: Use setAge to update the age state
  // };

  // return (
  //   <div className="App">
  //     {age}<button onClick={increaseAge}>Increase Age</button>
  //   </div>
  // );

//----------------------------------------------

//   const [inputVal, setInputVal] = useState("");
//   const handleInputChange = (event) => {
//     console.log(event.target.value);
//   }
//     return (
//     <div className="App">
//       <input type="text" onChange={handleInputChange}/>{inputVal}
//      </div>);
// }

//---------------------------------------------------
// const [showText, setshowText] = useState(false);

//   return (
//   <div className="App">
//     <button onClick={
//       () => 
//       {
//         setshowText(!showText);
//       }
//       }> Show/hide </button>
//     {showText && <h1>Hello I am Viraj</h1>}
//    </div>);
// }

// ------------------------------------------
// const [showColor, setshowColor] = useState("black");

//   return (
//   <div className="App">
//     <button onClick={
//       () => 
//       {
//         //setshowText(!showText);
//         setshowColor(showColor === 'black' ? "red" : "black")
//       }
//       }> Show/hide </button>
//     {<h1 style={{color : showColor}}>Hello I am Viraj</h1>}
//    </div>);
// }




// ---------------------------------------
//Test 
const [count,setCount] = useState(0);

const increase = () => {
  setCount(count + 1);
};

const decrease = () => {
  setCount(count - 1);
};

const setToZero = () => {
  setCount(0);
};

return (
  <div className="App">
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
    <button onClick={setToZero}>Set to zero</button>{count}
  </div>
)

}

export default App;
