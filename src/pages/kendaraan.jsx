import React, { useState } from 'react'
import mobil from "../assets/mobilio.png"
import motor from "../assets/motor.jpeg"
import { Link, NavLink } from 'react-router-dom'

export default function Kendaraan() {
  const [isRemoved, setIsRemoved] = useState(false)
  const [isRemoved2, setIsRemoved2] = useState(false)
  return (
    <>
      <h2 className="w-full my-10 text-4xl font-bold leading-tight text-center text-gray-800">
        Kendaraan saya
      </h2>
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 justify-items-center gap-y-10">
        {
          isRemoved ? <></> :
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
                  {/* Open the modal using ID.showModal() method */}
                  <button className="btn btn-error" onClick={() => window.my_modal_1.showModal()}>Delete</button>
                  <dialog id="my_modal_1" className="modal">
                    <form method="dialog" className="modal-box">
                      <h3 className="font-bold text-lg">Are you sure you want to remove this vehicle?</h3>
                      <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-error" onClick={() => setIsRemoved(true)}>Yes</button>
                        <button className="btn">No</button>
                      </div>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
        }
        {
          isRemoved2 ? <></> :
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
                  <button className="btn btn-error" onClick={() => window.my_modal_2.showModal()}>Delete</button>
                  <dialog id="my_modal_2" className="modal">
                    <form method="dialog" className="modal-box">
                      <h3 className="font-bold text-lg">Are you sure you want to remove this vehicle?</h3>
                      <div className="modal-action">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-error" onClick={() => setIsRemoved2(true)}>Yes</button>
                        <button className="btn">No</button>
                      </div>
                    </form>
                  </dialog>
                </div>
              </div>
            </div>
        }

        <div className="card w-96 bg-base-100 shadow-xl min-h-max py-64">
          <Link className='btn my-auto mx-auto' to="/tambah">Tambah Kendaraan</Link>
        </div>
      </div>
    </>
  )
}
