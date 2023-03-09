import { CssBaseline } from '@mui/material'
import { GlobalStyles } from '@mui/styled-engine'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  
  return (
    <div className="App">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <Navbar/>
    </div>
  )
}

export default App
