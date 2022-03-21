


import { useState } from 'react';
import './App.css';

function App() {
  const [cats, setCats] = useState("")
  const [btn, setbtn] = useState('')



  const fetchImg = async () => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search');
    const imgBlob = await res.blob();
    const imageurl = URL.createObjectURL(imgBlob);
    setCats(imageurl);
  }

  addHandler


  return (
    <div className="App">
      <h2>Hello</h2>
      <img src={cats} alt="" />
      <button onClick={addHandler}>Submit</button>


    </div>
  );
}

export default App;
