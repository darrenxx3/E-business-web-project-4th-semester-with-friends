import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/home/Home'

function App() {

  // const nav = [
  //   {
  //     title: "Tambah Kendaraan",
  //     caption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quod!",
  //     img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
  //   },
  //   {
  //     title: "Liat Schedule",
  //     caption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quod!",
  //     img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
  //   },
  //   {
  //     title: "Lorem",
  //     caption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quod!",
  //     img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
  //   },
  // ]

  const [page, setPage] = useState("Home")

  return (
      <div className="">
        <Header setPage={setPage}/>
        <div className="my-10">
          <Home />
        </div>


        {/* <Footer /> */}
      </div>
  )
}

export default App
