import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Tambah() {
  return (
    <form>
      <section className="bg-white border-b py-8">
        <div className="container max-w-5xl mx-auto m-8">
          <h2 className="w-full text-3xl my-2 font-bold leading-tight text-center text-gray-800">
            Tambah Kendaraan
          </h2>
          <div className="w-full mt-10">
            <div className="mx-auto text-center">
              <div className="my-8 max-w-xs mx-auto">
                <h4 htmlFor="" className='font-bold'>Pilih tipe kendaraan</h4>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Mobil</span>
                    <input type="radio" name="radio-10" className="radio " checked />
                  </label>
                </div>
                <div className="form-control">
                  <label className="label cursor-pointer">
                    <span className="label-text">Motor</span>
                    <input type="radio" name="radio-10" className="radio " />
                  </label>
                </div>
              </div>
              <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Merk</h4>
                <input type="text" className="my-2 input input-bordered max-w-xs mx-auto text-left" placeholder="Merk" />
              </div>
              <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Nama Kendaraan</h4>
                <input type="text" className="my-2 input input-bordered max-w-xs mx-auto text-left" placeholder="Brio" />
              </div>
              <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Nomor Polisi</h4>
                <input type="text" className="my-2 input input-bordered max-w-xs mx-auto text-left" placeholder="B 1234 AAA" />
              </div>

              <div className="my-8">
                <h4 htmlFor="" className='font-bold'>Tahun produksi</h4>
                <input type="text" className="my-2 input input-bordered max-w-xs mx-auto text-left" placeholder="2013" />
              </div>

              <Link className='btn btn-warning' to="/kendaraan">Tambah</Link>
            </div>
          </div>
        </div >
      </section >
    </form>
  )
}
