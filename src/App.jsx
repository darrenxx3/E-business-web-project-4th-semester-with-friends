import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Menu from './components/menu/Menu'

function App() {

  const nav = [
    {
      title: "Tambah Kendaraan",
      caption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quod!",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
    },
    {
      title: "Liat Schedule",
      caption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quod!",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
    },
    {
      title: "Lorem",
      caption: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, quod!",
      img: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png",
    },
  ]

  const [page, setPage] = useState("Home")
  console.log(page)
  return (
    <div className="">
      <div className="absolute top-5 left-1/2 -translate-x-1/2">

        <Menu nav={nav} setPage={setPage} />


        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
