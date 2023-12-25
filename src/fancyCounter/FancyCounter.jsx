import React from 'react'
import Title from './Title'
import Counter from './Counter'
import Reset from './Reset'
import IncrementButtons from './IncrementButtons'
import Button from './Button'

export default function FancyCounter() {
  
  // const [counter, setCounter] = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <Title/>
      <Counter counter={counter}/>
      <Reset>
        <Button type="Reset" counter={counter} setCounter={setCounter}/>
      </Reset>
      <IncrementButtons>
        <Button type="-" counter={counter} setCounter={setCounter}/>
        <Button type="+" counter={counter} setCounter={setCounter}/>
      </IncrementButtons>
    </div>
  )
}
