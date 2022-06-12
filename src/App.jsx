import React from 'react'
import './App.css'

import Header from './components/Header'
import Body from './components/Body'
import Search from './components/Search'
import Modal from './components/Modal/Modal'

const App = () => {
  return (
    <>
        <Header/>
        <Search/>
        <Body/>
    </>
  )
}

export default App