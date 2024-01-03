import React from 'react'
import { ItemContext } from '../hooks/trekBag/ItemContext'

export default function ItemList() {
  
  const { items } = ItemContext();

  return (
    <div className='w-[50vw] flex flex-wrap border-r-2'>
      <ul>
        {items.map( (item, index) => {
          return (
            <Item key={index} name={item.name}/>
          )
        })}
      </ul>
    </div>
  )
}

function Item ({name}) {
  return (
    <li className='w-[50vw] flex justify-between border-b cursor-pointer hover:bg-slate-50'>
      <input type='checkbox'></input>
      <p>{name}</p>
      <button className='bg-transparent fill-none text-red-600 border-none'>X</button>
    </li>
  )
}
