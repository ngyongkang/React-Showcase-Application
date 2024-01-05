import { ItemContext } from '../hooks/trekBag/ItemContext'

export default function Header() {
  const { items, getCompleteItems } = ItemContext();
  return (
    <div className='p-2 h-[10vh] flex justify-between bg-slate-50 border-b'>
      <h2>Item list</h2>
      <h2 className=''>{getCompleteItems()}/{items.length} items packed</h2>
    </div>
  )
}
