import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home'
import Jadwal from './pages/jadwal'
import Kendaraan from './pages/kendaraan'
import Maintenance from './pages/maintenance'
import History from './pages/history'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>

      <div className="">
        <Header />
        <div className="my-10">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/kendaraan" element={<Kendaraan />} />
            <Route exact path="/jadwal" element={<Jadwal />} />
            <Route exact path="/history" element={<History />} />
            <Route exact path="/maintenance" element={<Maintenance />} />
          </Routes>

        </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  )
}

export default App
