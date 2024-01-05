import ItemList from './ItemList'
import SideBar from './SideBar';

export default function Main() {

  return (
      <div className='flex'>
        <ItemList />
        <SideBar />
      </div>
  )
}
