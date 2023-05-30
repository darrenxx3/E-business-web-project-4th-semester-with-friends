import React from 'react'
import orang from "../assets/orang.png"

export default function Pembayaran() {
  return (
    <div className='w-full'>
      <div className="flex relative">
        <div className="mx-auto max-w-xs ">
          <div className="relative">
            <h1 className='text-3xl font-bold text-center '>Autogear</h1>
            <h1 className='text-xl text-center '>Jl. Curug Sangereng</h1>
            <img src={orang} className='absolute w-36 -translate-y-1/2 -translate-x-1/2 top-1/2 -right-64' alt="" />
          </div>

        </div>
      </div>

      <ul className="menu mx-auto max-w-4xl rounded-lg">
        <br />
        <h1 className='text-lg font-bold'>No. Invoice: INV001/2023</h1>
        <h1 className='text-lg'>Tanggal: 2 Juni 2023</h1>
        <br />
        <h1 className='text-lg'>Bill to: Rahmad</h1>
        <h1 className='text-lg'>For: Service Mobilio</h1>
        <h1 className='text-lg'>Tipe: 1.000 KM</h1>
        <h1 className='text-lg'>Paket: A</h1>

        {/* Table biaya suku cadang */}
        <div className="">
          <h1 className='text-xl mt-4 font-bold'>Biaya Suku Cadang</h1>
          <div className="overflow-x-auto ">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Harga</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>Oli mesin</td>
                  <td>4</td>
                  <td>Free</td>
                  <td>Free</td>
                </tr>
                {/* row 2 */}
                <tr>
                  <th>2</th>
                  <td>Filter udara</td>
                  <td>1</td>
                  <td>Free</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th></th>
                  <td className='font-bold'>Subtotal</td>
                  <td></td>
                  <td></td>
                  <td className='font-bold'>Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="">
          <h1 className='text-xl mt-4 font-bold'>Biaya Jasa servis</h1>
          <div className="overflow-x-auto ">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className=''>Deskripsi</th>
                  <th></th>
                  <th className=''>Harga</th>
                  <th className=''>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className=''>1</th>
                  <td className=''>Jasa servis</td>
                  <td></td>
                  <td className=''>Rp. 900.000</td>
                  <td className=''>Rp. 900.000</td>
                </tr>
                <tr>
                  <th></th>
                  <td className='font-bold '>Subtotal</td>
                  <td></td>
                  <td></td>
                  <td className='font-bold '>Rp. 900.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <h3 className='text-end font-bold text-xl mr-32 mt-5'>Total: Rp 900.000</h3>
        {/* Table biaya jasa */}
        {/* <div className="">
          <h1 className='text-xl mt-4 font-bold'>Biaya Jasa</h1>
          <div className="overflow-x-auto my-2">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Item</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <td>Pengecekan oli mesin</td>
                  <td>Rp. 100.000</td>
                </tr>
                <tr>
                  <th>2</th>
                  <td>Pengecekan aki</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>3</th>
                  <td>Pengecekan oli transmisi</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>4</th>
                  <td>Pengecekan air radiator</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>5</th>
                  <td>Pengecekan minyak rem</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>6</th>
                  <td>Pengecekan filter udara</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>7</th>
                  <td>Pengecekan baut-baut roda</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>8</th>
                  <td>Pengecekan tekanan ban</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>9</th>
                  <td>Pengecekan AC</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th>10</th>
                  <td>Pengecekan Komstir</td>
                  <td>Free</td>
                </tr>
                <tr>
                  <th></th>
                  <td>TOTAL</td>
                  <td>Free</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div> */}
        <div className="btn btn-primary mt-4">Download PDF</div>
      </ul>
    </div>
  )
}
