import React from 'react'
import logo from "../assets/logo.png"
import { NavLink } from 'react-router-dom'

export default function Header() {

    return (
        <div className="bg-orange-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-orange-400">
                <div className="flex justify-between h-24">
                    <div className="flex-shrink-0 flex justify-items-center">
                        <img className="block h-24 w-auto" src={logo} alt="Logo" />
                    </div>
                    <div className="bg-orange-400">
                        <ol className='flex h-full justify-center md:mx-16 gap-2 md:gap-14 align-middle'>
                            <li className='my-auto text-xl'><NavLink to="/">Home</NavLink></li>
                            <li className='my-auto text-xl'><NavLink to="/kendaraan">Kendaraan</NavLink></li>
                            <li className='my-auto text-xl'><NavLink to="/jadwal">Jadwal</NavLink></li>
                            <li className='my-auto text-xl bg-blue-300 rounded-full py-2 px-4'><NavLink to="/kendaraan">Profile</NavLink></li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
