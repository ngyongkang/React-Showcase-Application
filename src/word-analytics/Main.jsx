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
    <div className='flex mt-5 mb-5'>
      <textarea 
      placeholder='Enter your text' 
      value={text} onChange={checkInput}
      className="w-[70vw] h-[30vh] bg-slate-100 rounded-[20px] mr-5"
      />
      <Stats stats={stats}/>
    </div>
  )
}
