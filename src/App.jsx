import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './pages/home'
import Jadwal from './pages/jadwal'
import Kendaraan from './pages/kendaraan'
import Maintenance from './pages/maintenance'

function App() {

  const [page, setPage] = useState("home")
  console.log(page)
  return (
    <div className="">
      <Header setPage={setPage} />
      <div className="my-10">
        {page === "home" ? <Home setPage={setPage} /> :
          page === "kendaraan" ? <Kendaraan setPage={setPage} /> :
            page === "jadwal" ? <Jadwal /> :
              <Maintenance />}
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default App
