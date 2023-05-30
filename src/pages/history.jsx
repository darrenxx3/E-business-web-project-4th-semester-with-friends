import React from 'react'
import { Link } from 'react-router-dom'

export default function History() {
  return (
    <div className='w-full'>
      <ul className="menu mx-auto max-w-2xl rounded-lg">
        <li>
          <label htmlFor="my-modal-pending" className='btn btn-info my-2'>Upcoming | 2 Juni 2023
            <Link className='absolute right-10 bg-amber-300 hover:bg-amber-100 p-2 rounded-lg' to="/pembayaran">
              Rincian Biaya
            </Link>
          </label>
        </li>
        <li><label htmlFor="my-modal-cancel" className='my-2 btn btn-error'>Batal | 22 Mei 2022</label></li>
        <li><label htmlFor="my-modal-history" className='my-2 btn btn-success'>Selesai | 11 Januari 2021</label></li>
        <li><label htmlFor="my-modal-history" className='my-2 btn btn-success'>Selesai | 10 Januari 2020</label></li>
      </ul>

      <input type="checkbox" id="my-modal-cancel" className="modal-toggle" />
      <label htmlFor="my-modal-cancel" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">22 Mei 2023 15:00 WIB</h3>
          <div className="stat">
            <div className="stat-title ">Nomor Invoice</div>
            <div className="stat-value text-xl font-bold">INV005/2023</div>
            <div className="stat-title mt-5">Nama Kendaraan</div>
            <div className="stat-value text-xl font-bold">Honda Mobilio</div>
            <div className="stat-title mt-5">Nomor Polisi</div>
            <div className="stat-value text-xl font-bold">B 9612 UVS</div>
            <div className="stat-title mt-5">Lokasi Servis</div>
            <div className="stat-value text-xl font-bold">Rumah</div>

            <div className="stat-title mt-5">Nama Montir</div>
            <div className="stat-value text-xl font-bold">Agung</div>
            <div className="stat-title mt-5">Deskripsi</div>
            <div className="stat-value text-xl font-bold">
              <li>Pengecekan oli mesin</li>
              <li>Pengecekan aki</li>
              <li>Pengecekan oli transmisi</li>
              <li>Pengecekan air radiator</li>
              <li>Pengecekan minyak rem</li>
              <li>Pengecekan filter udara</li>
              <li>Pengecekan baut-baut</li>
              <li>Pengecekan tekanan ban</li>
              <li>Pengecekan AC</li>
              <li>Pengecekan Komstir</li>
            </div>
            <div className="stat-title mt-5">Tambahan</div>
            <div className="stat-value text-xl font-bold">-</div>

            <div className="stat-title mt-5">Tipe servis</div>
            <div className="stat-value text-xl font-bold">1.000 KM</div>
            <div className="stat-title mt-5">Paket</div>
            <div className="stat-value text-xl font-bold">A</div>
            <div className="stat-title mt-5">Total Biaya</div>
            <div className="stat-value text-xl font-bold">-</div>
            <div className="stat-title mt-5">Metode Pembayaran</div>
            <div className="stat-value text-xl font-bold">-</div>
          </div>

        </label>
      </label>

      <input type="checkbox" id="my-modal-history" className="modal-toggle" />
      <label htmlFor="my-modal-history" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">3 Mei 2023 14:00 WIB</h3>
          <div className="stat">
            <div className="stat-title ">Nomor Invoice</div>
            <div className="stat-value text-xl font-bold">INV005/2023</div>
            <div className="stat-title mt-5">Nama Kendaraan</div>
            <div className="stat-value text-xl font-bold">Honda Mobilio</div>
            <div className="stat-title mt-5">Nomor Polisi</div>
            <div className="stat-value text-xl font-bold">B 9612 UVS</div>
            <div className="stat-title mt-5">Lokasi Servis</div>
            <div className="stat-value text-xl font-bold">Rumah</div>

            <div className="stat-title mt-5">Nama Montir</div>
            <div className="stat-value text-xl font-bold">Agung</div>
            <div className="stat-title mt-5">Deskripsi</div>
            <div className="stat-value text-xl font-bold">
              <li>Cek oli</li>
              <li>Cek mesin</li>
              <li>Cek moda</li>
            </div>
            <div className="stat-title mt-5">Tambahan</div>
            <div className="stat-value text-xl font-bold">-</div>

            <div className="stat-title mt-5">Tipe servis</div>
            <div className="stat-value text-xl font-bold">1.000 KM</div>
            <div className="stat-title mt-5">Paket</div>
            <div className="stat-value text-xl font-bold">A</div>
            <div className="stat-title mt-5">Total Biaya</div>
            <div className="stat-value text-xl font-bold">Rp 900.000</div>
            <div className="stat-title mt-5">Metode Pembayaran</div>
            <div className="stat-value text-xl font-bold">Transfer - BCA</div>
          </div>

        </label>
      </label>

      <input type="checkbox" id="my-modal-pending" className="modal-toggle" />
      <label htmlFor="my-modal-pending" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold text-center">3 Mei 2023 14:00 WIB</h3>
          <div className="stat">
            <div className="stat-title ">Nomor Invoice</div>
            <div className="stat-value text-xl font-bold">INV002/2022</div>
            <div className="stat-title mt-5">Nama Kendaraan</div>
            <div className="stat-value text-xl font-bold">Honda Mobilio</div>
            <div className="stat-title mt-5">Nomor Polisi</div>
            <div className="stat-value text-xl font-bold">B 9612 UVS</div>
            <div className="stat-title mt-5">Lokasi Servis</div>
            <div className="stat-value text-xl font-bold">Rumah</div>

            <div className="stat-title mt-5">Nama Montir</div>
            <div className="stat-value text-xl font-bold">Agung</div>
            <div className="stat-title mt-5">Deskripsi</div>
            <div className="stat-value text-xl font-bold">
              <li>Cek oli</li>
              <li>Cek mesin</li>
              <li>Cek moda</li>
            </div>
            <div className="stat-title mt-5">Tambahan</div>
            <div className="stat-value text-xl font-bold">Ganti Aki</div>
            <div className="stat-title mt-5">Tipe servis</div>
            <div className="stat-value text-xl font-bold">1.000 KM</div>
            <div className="stat-title mt-5">Paket</div>
            <div className="stat-value text-xl font-bold">A</div>
            <div className="stat-title mt-5">Total Biaya</div>
            <div className="stat-value text-xl font-bold">Rp 900.000</div>
            <div className="stat-title mt-5">Metode Pembayaran</div>
            <div className="stat-value text-xl font-bold">-</div>
          </div>
        </label>
      </label>

    </div>
  )
}
