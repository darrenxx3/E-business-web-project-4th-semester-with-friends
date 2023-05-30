import React from 'react'

export default function Pembayaran() {
  return (
    <div className='w-full'>
      <ul className="menu mx-auto max-w-2xl rounded-lg">
        <li><label htmlFor="my-modal-4" className='btn btn-warning'>3 May 2023</label></li>
        <li><label htmlFor="my-modal-4" className='btn btn-warning'>22 May 2022</label></li>
        <li><label htmlFor="my-modal-4" className='btn btn-warning'>11 Januari 2021</label></li>
      </ul>

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">3 May 2023 14:00 WIB</h3>
          <div className="stat">
            <div className="stat-title ">Nomor Invoice</div>
            <div className="stat-value text-xl font-bold">A1231029310B</div>
            <div className="stat-title mt-5">Nama Kendaraan</div>
            <div className="stat-value text-xl font-bold">Honda Mobillio</div>
            <div className="stat-title mt-5">Nomor Polisi</div>
            <div className="stat-value text-xl font-bold">B 9612 UVS</div>
            <div className="stat-title ">Lokasi Servis</div>
            <div className="stat-value text-xl font-bold">Rumah</div>

            <div className="stat-title mt-5">Nama Montir</div>
            <div className="stat-value text-xl font-bold">Agung</div>
            <div className="stat-title ">Deskripsi</div>
            <div className="stat-value text-sm font-bold">
              <li>Cek oli</li>
              <li>Cek mesin</li>
              <li>Cek moda</li>
            </div>
            <div className="stat-title mt-5">Tipe servis</div>
            <div className="stat-value text-xl font-bold">10.000 KM</div>
            <div className="stat-title mt-5">Paket</div>
            <div className="stat-value text-xl font-bold">A</div>
            <div className="stat-title mt-5">Total Biaya</div>
            <div className="stat-value text-xl font-bold">Rp 400.000</div>
          </div>

        </label>
      </label>
    </div>
  )
}
