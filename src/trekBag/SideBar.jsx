import React from 'react'
import { ItemContext } from '../hooks/trekBag/ItemContext'

export default function SideBar() {
  
  const { handleAddItem } = ItemContext();

  return (
        <form 
        className='mr-5 ml-5 flex flex-col'
        onSubmit={(e) => {e.preventDefault()}}
        >
            <label>
                Add an item
                <input className='border border-black'></input>
            </label>
            <button onClick={(e) => (handleAddItem({name: 'poker', packed: false}))}>Add to list</button>

            <section className='flex flex-col'>
            <button>Add to list</button>
            <button>Add to list</button>
            <button>Add to list</button>
            <button>Add to list</button>
            </section>
        </form>

        
  )
}
