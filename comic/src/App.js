import logo from './logo.svg';
import './App.css';
import Product from './Components/Product';
import { useState } from 'react';
import Favorite from './Components/Favorite';

function App() {

  const [toggle,setToggle]=useState(true)

  const handleSwitch=()=>{
    setToggle(!toggle)
  }
  return (
    <div className="App">
      <h1>Comic Character</h1>
      <button className="favorite-button" onClick={handleSwitch}>Switch</button>
      {toggle===true ? <Product/> : <Favorite/>}
    </div>
  );
}

export default App;
