import logo from './logo.svg';
import './App.css';
import Allroutes from './components/Allroutes';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [git, setGit] = useState("");
  const [flag,setFlag]=useState(false)
  const [data,setData]=useState([])
  
  const navigate=useNavigate()
  const handleSubmit = () => {
    console.log(git);
    
    fetch(`https://api.github.com/users/${git}/repos`).then(res=>res.json()).then(res=>{
        // console.log(res)
        localStorage.setItem('username',JSON.stringify(git))
        setFlag(true)
        setData(res)
        if(res.length>0){
          navigate("/repo")
        }
    }).catch(err=>{
        console.log(err)
    })
  };
  const handleToggle=()=>{
    setFlag(!flag)
  }
  return (
    <div className="App">
      <h1>Fithub</h1>
      <input
        type="text"
        placeholder="Github Username"
        name="git"
        value={git}
        onChange={(e) => setGit(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <Allroutes data={data}/>
    </div>
  );
}

export default App;
