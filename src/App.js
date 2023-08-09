import React from 'react'
import './App.css'
import Topbar from './Components/topbar/Topbar'
import Head from './Components/header/Head'
import Pages from './Components/Pages/Pages'

const App = () => {
  return (
    <div className="wrapper">
      <Topbar />
      <Head />
      <Pages/>
    </div>
  )
}

export default App