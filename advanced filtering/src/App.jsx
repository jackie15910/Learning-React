import React from 'react'
import Navigation from './Navigation/Nav'
import Products from './Products/Products'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'

const App = () => {
  return (
    <>
      <Navigation/>
      <Products/>
      <Recommended/>
      <Sidebar/>
    </>
  )
}

export default App