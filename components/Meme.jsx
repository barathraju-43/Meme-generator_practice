import React, { useState, useEffect } from "react";


export default function Meme() {
 
  const [memeImg, setMemeImg] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([])
  /**
useEffect takes a function as its parameter. If that function
returns something, it needs to be a cleanup function. Otherwise,
it should return nothing. If we make it an async function, it
automatically retuns a promise instead of a function or nothing.
Therefore, if you want to use async operations inside of useEffect,
you need to define the function separately inside of the callback
function, as seen below:
*/
  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data.data.memes)
    }
  getMemes()
  }, [])
  
  function handleChange(){
      const{name, value} = event.target;
     setMemeImg(prev =>({
      ...prev,
      [name]: value
     }))
  }

  function randomMeme() {
    const randomItem = Math.floor(Math.random() * allMemes.length);
    let url = allMemes[randomItem].url;
    setMemeImg(prevState => ({
      ...prevState,
      randomImage: url
    }));
  };

  

  return (
    <main>
      <div className="form">
        <input 
              type="text"
              placeholder="Top text" 
              className="form--input"
              name="topText"
              onChange={handleChange}
              value={memeImg.topText}
        />
        <input 
              type="text" 
              placeholder="Bottom text" 
              className="form--input"
              name="bottomText"
              onChange={handleChange}
              value={memeImg.bottomText}
        />
        <button 
              onClick={randomMeme} 
              className="form--button"
        >
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={memeImg.randomImage} className="meme-img" />
        <h3 className="meme--text top">{memeImg.topText}</h3>
        <h3 className="meme--text bottom">{memeImg.bottomText}</h3>
      </div>
    </main>
  );
}
