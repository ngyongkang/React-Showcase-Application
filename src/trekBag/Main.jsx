import React from 'react'
import ItemList from './ItemList'
import SideBar from './SideBar';
import ItemsContextProvider from '../context/trekBag/ItemsContextProvider';

export default function Main() {

  return (
    <ItemsContextProvider>
      <div className='flex'>
        <ItemList />
        <SideBar />
      </div>
    </ItemsContextProvider>
  )
}
