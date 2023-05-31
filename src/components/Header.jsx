import React from 'react'
import logo from "../assets/logo.png"
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    return (
        <div className="bg-orange-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-orange-400">
                <div className="flex justify-between h-24">
                    <div className="flex-shrink-0 flex justify-items-center">
                        <Link to="/">
                        <img className="block h-24 w-auto" src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="bg-orange-400">
                        <ol className='flex h-full justify-center md:mx-16 gap-2 md:gap-14 align-middle'>
                            <li className='my-auto text-xl font-bold rounded-full hover:bg-orange-200 p-2 transition-colors'><NavLink to="/">Home</NavLink></li>
                            <li className='my-auto text-xl font-bold rounded-full hover:bg-orange-200 p-2 transition-colors'><NavLink to="/kendaraan">Kendaraan</NavLink></li>
                            <li className='my-auto text-xl font-bold rounded-full hover:bg-orange-200 p-2 transition-colors'><NavLink to="/jadwal">Jadwal</NavLink></li>
                            <li className='my-auto text-xl font-bold bg-blue-300 rounded-full py-2 px-4'><NavLink to="/kendaraan">Profile</NavLink></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
