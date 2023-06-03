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
                            <NavLink className={"my-auto"} to="/"><li className='my-auto text-xl font-bold rounded-full hover:bg-orange-200 p-2 transition-colors'>Home</li></NavLink>
                            <NavLink className={"my-auto"} to="/kendaraan"><li className='my-auto text-xl font-bold rounded-full hover:bg-orange-200 p-2 transition-colors'>Kendaraan</li></NavLink>
                            <NavLink className={"my-auto"} to="/jadwal"><li className='my-auto text-xl font-bold rounded-full hover:bg-orange-200 p-2 transition-colors'>Jadwal</li></NavLink>
                            <NavLink className={"my-auto"} to="/kendaraan"><li className='my-auto text-xl font-bold bg-blue-300 rounded-full py-2 px-4'>Profile</li></NavLink>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}
