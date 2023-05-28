import React from 'react'
import mobil from "../assets/mobilio.png"
import motor from "../assets/motor.jpeg"
import { NavLink } from 'react-router-dom'

export default function Kendaraan() {
  return (
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
              <div className="stat-title">Nomor Mesin</div>
              <div className="stat-desc text-xl">M1251923</div>
            </div>

            <div className="stat">
              <div className="stat-title">Nomor Rangka</div>
              <div className="stat-desc text-xl">R89HA1292021</div>
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
              <div className="stat-title">Nomor Mesin</div>
              <div className="stat-desc text-xl">D190VA5</div>
            </div>

            <div className="stat">
              <div className="stat-title">Nomor Rangka</div>
              <div className="stat-desc text-xl">PK92782022</div>
            </div>
          </div>
          <div className="card-actions justify-between">
            <NavLink className="btn btn-primary" to="/history">Activity</NavLink>
            <NavLink className="btn btn-primary" to="/maintenance">Service</NavLink>
          </div>
        </div>
      </div>
      <div className="my-auto">
        <button className='btn my-auto mx-auto'>Tambah Kendaraan</button>
      </div>
    </div>
  )
}
