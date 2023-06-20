import memesDat from "../Meme-generator/src/memesData.js";

function randomMeme() {
  const memes = memesDat.data.memes;
  const randomItem = Math.floor(Math.random() * memes.length);
  return console.log(memes[randomItem].url);
}

randomMeme();
