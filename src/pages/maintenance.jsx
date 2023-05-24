import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Maintenance() {
  const [details, setDetails] = useState("A")
  return (
    <form>
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full text-3xl my-2 font-bold leading-tight text-center text-gray-800">
            Autogear
          </h2>
          <div className="w-full mt-10">
            <div className="mx-auto text-center">

              <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Pilih kendaraan yang ingin diservis</h4>
                <select className="select max-w-xs mx-auto text-left ">
                  <option>Mobillio</option>
                </select>
              </div>

              <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Pilih tipe servis</h4>
                <select className="select max-w-xs mx-auto text-left ">
                  <option>1.000 KM</option>
                  <option>5.000 KM</option>
                  <option>10.000 KM</option>
                  <option>15.000 KM</option>
                  <option>20.000 KM</option>
                  <option>25.000 KM</option>
                  <option>30.000 KM</option>
                  <option>35.000 KM</option>
                  <option>40.000 KM</option>
                  <option>45.000 KM</option>
                  <option>50.000 KM</option>
                </select>
              </div>

              <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Pilih paket servis</h4>
                <select className="select max-w-xs mx-auto text-left" onChange={(e) => {
                  e.preventDefault()
                  setDetails(e.target.value)
                }}>
                  <option value={"A"}>A</option>
                  <option value={"B"}>B</option>
                  <option value={"C"}>C</option>
                </select>
              </div>

              <div className="my-8">
                <div className="card max-w-xs bg-base-100 shadow-xl mx-auto">
                  <div className="card-body">
                    <h2 className="card-title">Paket {details}</h2>
                    <ol className=''>
                      {details == "A" ?
                        <>
                          <li>Cek Oli</li>
                          <li>Cek Oli</li>
                          <li>Cek Oli</li>
                          <li>Cek Oli</li>
                        </> :
                        details == "B" ?
                          <>
                            <li>Cek roda</li>
                            <li>Cek roda</li>
                            <li>Cek roda</li>
                            <li>Cek roda</li>
                          </> :
                          <>
                            <li>Cek mesin</li>
                            <li>Cek mesin</li>
                            <li>Cek mesin</li>
                            <li>Cek mesin</li>
                          </>}

                    </ol>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Catatan tambahan</h4>
                <textarea className="textarea textarea-bordered h-24 w-96" placeholder="Jelaskan permasalahan anda jika ada disini"></textarea>
              </div>

              <div className="my-8 ">
                <h4 htmlFor="" className='font-bold'>Lokasi perbaikan</h4>
                <div className="mx-auto max-w-xs">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Bengkel</span>
                      <input type="radio" name="radio-10" className="radio checked:bg-orange-500" defaultChecked={true} />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Rumah anda</span>
                      <input type="radio" name="radio-10" className="radio checked:bg-orange-500" />
                    </label>
                  </div>
                </div>
              </div>

              <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Jadwal Perbaikan</h4>
                <div className="my-1">
                  <select className="select max-w-xs mx-auto text-left">
                    <option>10:00 WIB</option>
                    <option>11:00 WIB</option>
                    <option>12:00 WIB</option>
                    <option>13:00 WIB</option>
                    <option>14:00 WIB</option>
                    <option>15:00 WIB</option>
                    <option>16:00 WIB</option>
                    <option>17:00 WIB</option>
                  </select>
                  {/* <input type="text" placeholder="HH:MM" className="input w-full max-w-xs" /> */}
                </div>
                <div className="my-1">
                  <select className="select max-w-xs mx-auto text-left">
                    <option>20-05-2023</option>
                    <option>21-05-2023</option>
                    <option>23-05-2023</option>
                    <option>24-05-2023</option>
                    <option>25-05-2023</option>
                    <option>26-05-2023</option>
                    <option>27-05-2023</option>
                    <option>28-05-2023</option>
                  </select>
                </div>
              </div>

              {/* Pembayaran*/}
              {/* <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Pembayaran</h4>
                <div className="mx-auto max-w-xs">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">BCA</span>
                      <input type="radio" name="radio-10" className="radio checked:bg-orange-500" defaultChecked={true} />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text">Transfer</span>
                      <input type="radio" name="radio-10" className="radio checked:bg-orange-500" />
                    </label>
                  </div>
                </div>
              </div> */}

              <button className='btn btn-warning'><Link to="/jadwal"> Pesan</Link></button>
            </div>
          </div>
        </div >
      </section >
    </form>
  )
}
