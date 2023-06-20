import React, {useState}from "react";
import memesData from "../src/memesData";

export default function Meme() {
  const [memeImg, setImg] = useState(
    {
      "topText": "",
      "bottomText": "",
      "randomImage": ""
    }
  );
  const [allMemeImages, setMemes] = useState(memesData);
  const randomMeme = () => {
    const memes = memesData.data.memes;
    const randomItem = Math.floor(Math.random() * memes.length);
    let url = memes[randomItem].url;
    setImg(prevState => ({
      ...memeImg,
      "randomImage": url
    }))
  };
  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button onClick={randomMeme} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div>
        <img src={memeImg.randomImage} className="meme-img" />
      </div>
    </main>
  );
}
