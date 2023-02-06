import React,{ useState } from 'react';
import './App.css';
import ImageSlider from './ImageSlider';
import Me from './Me';

const App=()=>{

  const [query, setQuery]=useState("");
  const [images, setImages]=useState([]);

  const handleSubmit=(e)=>{
    e.preventDefault();
	  const k={process.env.REACT_APP_API_KEY};
    console.log("test -> "+k);
    fetch(
      `https://pixabay.com/api/?key=${k}&q=${query}`
    )
      .then((response) => response.json())
      .then(({ hits }) => hits.map(({ webformatURL }) => webformatURL)) // use object destructuring to grab image urls from json response
      .then(setImages); // call setImages to update images state with image urls

  };

  return(
    <div className="App">
     
      <h1>Search for something</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=>setQuery(e.target.value)}/>
        <input type="submit" value="Search" />
      </form>
      <ImageSlider images={images} />
      <br></br>
      <Me />
      <br></br>
    </div>
  );
}

export default App;
