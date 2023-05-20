import React from 'react'
import logo from "../assets/logo.jpg"

export default function Header({setPage}) {

    return (
        <div className="bg-orange-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-orange-400">
                <div className="flex justify-between h-16">
                    <div className="flex-shrink-0 flex justify-items-center">
                        <img className="block h-16 w-auto" src={logo} alt="Logo" />
                    </div>
                    <div className="bg-orange-400">
                        <ol className='flex h-full justify-center md:mx-16 gap-2 md:gap-14 align-middle'>
                            <li className='my-auto'><button onClick={(e)=> setPage("home")}>Home</button></li>
                            <li className='my-auto'><button onClick={(e)=> setPage("kendaraan")}>Kendaraan</button></li>
                            <li className='my-auto'><button onClick={(e)=> setPage("jadwal")}>Jadwal</button></li>
                            <li className='my-auto bg-blue-300 rounded-full py-2 px-4'><button onClick={(e)=> setPage("kendaraan")}>My Profile</button></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
