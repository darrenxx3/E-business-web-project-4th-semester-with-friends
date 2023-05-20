import React from 'react'

export default function Maintenance() {
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
                <h4 htmlFor="" className='font-bold'>Pilih paket servis</h4>
                <select className="select max-w-xs mx-auto text-left ">
                  <option>Paket Dibawah 10.000 KM</option>
                  <option>Paket 10.000 - 100.000 KM</option>
                  <option>Paket Diatas 100.000 KM</option>
                </select>
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
                  <input type="text" placeholder="HH:MM" className="input w-full max-w-xs" />
                </div>
                <div className="my-1">
                  <input type="text" placeholder="DD/MM/YYYY" className="input w-full max-w-xs" />
                </div>
              </div>
              <button type="submit" className='btn btn-warning'>Pesan</button>
            </div>
          </div>
        </div >
      </section >
    </form>
  )
}
