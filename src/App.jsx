import { useState } from "react";
import "./App.css";
import users from "./users.json";





function App() {

  const randomChange = Math.floor(Math.random() * users.length)
  const [change,setChange]= useState(randomChange);
  const colors =[ '#2080d8','#20a7d8','#20d7d8',
  '#35304e','#604167','#ef7cb0','#f6a5c9','#000000','#113631','#1aa3b1',
,'#6b9438','#d6bc6b','#3eb62c','#002446','#ff6451'
];
  const randomChangeb = Math.floor(Math.random() * colors.length)
  document.body.style= `background:${colors[randomChangeb]}`;
  let changeBackgrounds=()=>{
  setChange(change+1)
  }
  return (

      <div className="QuoteBox">
        <p style={{color:`${colors[randomChangeb]}`}}>  <i className="fas fa-quote-left"></i> {users[change].quote}</p>
        <div className="secondLine">
          <p style={{color:`${colors[randomChangeb]}`}}>{users[change].author}</p>
          <button   style={{color:`${colors[randomChangeb]}`}} onClick={changeBackgrounds} className="button">
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>
      </div>
   
  );
}

export default App;
