import React from 'react'
import './App.css'
import Topbar from './Components/topbar/Topbar'
import Head from './Components/header/Head'

const App = () => {
  return (
    <div className="wrapper">
      <Topbar />
      <Head />
    </div>
  )
}

export default App