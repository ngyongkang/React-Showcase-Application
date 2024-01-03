import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function WordApp() {
  return (
    <>
      <div className='border'>
        <Header />
        <Main />
      </div>
        <Footer />
    </>
  )
}
