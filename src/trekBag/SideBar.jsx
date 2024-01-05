import React from 'react'
import { ItemContext } from '../hooks/trekBag/ItemContext'

export default function SideBar() {
  const inputRef = React.useRef();  
  const { handleAddItem, handleRemoveAllItems, handleCompleteAllItems, loadDefault} = ItemContext();

  function submitFunction (e) {
    e.preventDefault()
    handleAddItem(inputRef.current.value);
    inputRef.current.value = "";
  }

  return (
        <form 
        className='mr-5 ml-5 flex flex-col'
        onSubmit={submitFunction}
        >
            <label>
                Add an item
                <input ref={inputRef} className='border border-black'></input>
            </label>
            <button type="submit">Add to list</button>

            <section className='flex flex-col'>
            <button type="button" onClick={handleRemoveAllItems}>Remove All Items</button>
            <button type="button" onClick={handleCompleteAllItems}>Complete All Items</button>
            <button type="button" onClick={handleRemoveAllItems}>Add to list</button>
            <button type="button" onClick={loadDefault}>Load Default</button>
            </section>
        </form>

        
  )
}
