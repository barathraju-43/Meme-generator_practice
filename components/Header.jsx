import React from "react";
import memeLogo from "../src/assets/memelogo.png";

export default function Header() {
  return (
    <header className="head-container">
      <img className="logo" src={memeLogo} alt="logo" />
      <h2 className="head-title">Meme Generator</h2>
      <h4>Custom Memes</h4>
    </header>
  );
}
