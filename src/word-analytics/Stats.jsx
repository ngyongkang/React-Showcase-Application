import React from 'react'

export default function Stats({stats}) {
  return (
    <section>
      <Stat name="Words" value={stats.numOfWords}/>
      <Stat name="Characters" value={stats.numOfCharacters}/>
      <Stat name="Instagram" value={stats.instaCharacters}/>
      <Stat name="Facebook" value={stats.faceCharacter}/>
    </section>
  )
}

function Stat(props) {
  return (
    <section>
       {props.value}<br/>
       {props.name}
    </section>
  )
}
