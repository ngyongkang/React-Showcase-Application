import { ItemContext } from '../hooks/trekBag/ItemContext'

export default function ItemList() {
  
  const { items } = ItemContext();
  
  return (
    <div className='w-[50vw] flex flex-wrap border-r-2'>
      <ul>
        {items.map( (item) => {
          return (
            <Item key={item.id} id={item.id} name={item.name} state={item.state}/>
          )
        })}
      </ul>
    </div>
  )
}

function Item ({id, name, state}) {
  const { handleDeleteItem } = ItemContext();

  return (
    <li className='w-[50vw] flex justify-between border-b cursor-pointer hover:bg-slate-50'>
      <input type='checkbox' checked={state} readOnly></input>
      <p>{name}</p>
      <button onClick={() => handleDeleteItem(id)}className='bg-transparent fill-none text-red-600 border-none'>X</button>
    </li>
  )
}
