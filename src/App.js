import React, { useState, useEffect } from "react";
import Image from './components/Image';
import Header from './components/Header';
import "./css/App.css";

function App() {
  const [Url, setUrl] = useState('');
  const [load, setLoad] = useState(false);


  const get = () => {
    setLoad(true);
    fetch('https://picsum.photos/400/400')
      .then(res => res.url)
      .then(url => {
        setLoad(false);
        setUrl(url);
      }).catch(error => console.log(error))
  }
  useEffect(() => {get();}, [])
  return (
    <div className="App">
      <Header />
         <Image Url={Url} load={load} />
      <button className="btn" 
          style={{ marginLeft: "615px" , marginTop: "30px"}}
          onClick={() => get()}>Generate</button>
    </div>
  );
}

export default App;
