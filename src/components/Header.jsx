import React from 'react'
import logo from "../assets/logo.jpg"

export default function Header({setPage}) {

    return (
        <header className="bg-orange-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex justify-items-center">
                        <img className="block lg:hidden h-16 w-auto" src={logo} alt="Logo" />
                        <img className="hidden lg:block h-16 w-auto" src={logo} alt="Logo" />
                    </div>
                    <div className="">
                        <ol className='flex h-full justify-center mx-16 gap-14 align-middle'>
                            <li className='my-auto'><button onClick={(e)=> setPage("home")}>Home</button></li>
                            <li className='my-auto'><button onClick={(e)=> setPage("kendaraan")}>Kendaraan</button></li>
                            <li className='my-auto'><button onClick={(e)=> setPage("jadwal")}>Jadwal</button></li>
                        </ol>
                    </div>
                </div>
            </div>
        </header>
    )
}
