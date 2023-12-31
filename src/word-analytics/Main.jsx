import React from 'react'
import Stats from './Stats'

function countWord(string) {
  let wordArray = string.split(/\s/);
  let filterArray = wordArray.filter((word) => word !== "");
  return filterArray.length;
}

export default function Main() {
  const [text, setText] = React.useState("");
  let stats = {
    numOfCharacters: text.length,
    numOfWords: countWord(text),
    instaCharacters: 280 - text.length,
    faceCharacter: 2200 - text.length
  };

  function checkInput(event) {

    setText(event.target.value);
  }
  

  return (
    <div>
      <textarea placeholder='Enter your text' value={text} onChange={checkInput}/>
      <Stats stats={stats}/>
    </div>
  )
}
