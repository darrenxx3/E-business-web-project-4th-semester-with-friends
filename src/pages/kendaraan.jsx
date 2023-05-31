import React from 'react'
import mobil from "../assets/mobilio.png"
import motor from "../assets/motor.jpeg"
import { Link, NavLink } from 'react-router-dom'

export default function Kendaraan() {
  return (
    <>
      <h2 className="w-full my-10 text-4xl font-bold leading-tight text-center text-gray-800">
        Kendaraan saya
      </h2>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 justify-items-center gap-y-10">

        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={mobil} alt="Mobil" className='h-32' /></figure>
          <div className="card-body">
            <h2 className="card-title">Mobilio</h2>
            <div className="stats stats-vertical shadow">

              <div className="stat">
                <div className="stat-title">Plat Nomor</div>
                <div className="stat-value">B 9612 UVS</div>
              </div>

              <div className="stat">
                <div className="stat-title">Tahun Produksi</div>
                <div className="stat-desc text-xl">2020</div>
              </div>

              <div className="stat">
                <div className="stat-title">Servis Terakhir</div>
                <div className="stat-desc text-xl">12.312 KM</div>
              </div>
            </div>
            <div className="card-actions justify-between">
              <NavLink className="btn btn-primary" to="/history">Activity</NavLink>
              <NavLink className="btn btn-primary" to="/maintenance">Service</NavLink>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure><img src={motor} alt="Mobil" className='h-32' /></figure>
          <div className="card-body">
            <h2 className="card-title">Honda Beat</h2>
            <div className="stats stats-vertical shadow">

              <div className="stat">
                <div className="stat-title">Plat Nomor</div>
                <div className="stat-value">B 6271 ILP</div>
              </div>

              <div className="stat">
                <div className="stat-title">Tahun Produksi</div>
                <div className="stat-desc text-xl">2021</div>
              </div>

              <div className="stat">
                <div className="stat-title">Servis Terakhir</div>
                <div className="stat-desc text-xl">2.032 KM</div>
              </div>
            </div>
            <div className="card-actions justify-between">
              <NavLink className="btn btn-primary" to="/history">Activity</NavLink>
              <NavLink className="btn btn-primary" to="/maintenance">Service</NavLink>
            </div>
          </div>
        </div>
        <div className="my-auto">
          <Link className='btn my-auto mx-auto' to="/tambah">Tambah Kendaraan</Link>
        </div>
      </div></>
  )
}
