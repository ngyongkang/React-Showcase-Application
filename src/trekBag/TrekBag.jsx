import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import ItemsContextProvider from '../context/trekBag/ItemsContextProvider'

export default function WordApp() {
  return (
    <>
      <ItemsContextProvider>
      <div className='border'>
        <Header />
        <Main />
      </div>
        <Footer />
      </ItemsContextProvider>
    </>
  )
}
