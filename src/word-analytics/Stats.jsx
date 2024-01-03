import React from 'react'

export default function Stats({stats}) {
  return (
    <section className='w-[20vw] h-[30vh] flex flex-wrap'>
      <Stat name="Words" value={stats.numOfWords}/>
      <Stat name="Characters" value={stats.numOfCharacters}/>
      <Stat name="Instagram" value={stats.instaCharacters}/>
      <Stat name="Facebook" value={stats.faceCharacter}/>
    </section>
  )
}

function Stat(props) {
  return (
    <div className='w-[10vw] h-[15vh] relative bg-stone-50 rounded-3xl border-2 border-neutral-200 center'>
       <h2 className='mt-10 text-3xl font-bold'>{props.value}</h2>
       <p>{props.name}</p>
    </div>
  )
}
