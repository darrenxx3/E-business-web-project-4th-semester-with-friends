import React from 'react'
import mobil from "../../assets/mobilio.png"
import motor from "../../assets/motor.jpeg"

export default function Home() {

    return (
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 justify-items-center gap-y-10">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={mobil} alt="Mobil" className='h-32'/></figure>
                <div className="card-body">
                    <h2 className="card-title">Mobilio</h2>
                    <div className="stats stats-vertical shadow">

                        {/* <div className="stat">
                            <div className="stat-title">Plat Nomor</div>
                            <div className="stat-value">B 12345 ABI</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Nomor Mesin</div>
                            <div className="stat-desc text-xl">1234567890</div>
                        </div>

                        <div className="stat">
                            <div className="stat-title">Nomor Rangka</div>
                            <div className="stat-desc text-xl">1234567890abcd</div>
                        </div> */}

                    </div>
                    <div className="card-actions justify-between">
                        <button className="btn btn-primary">View Detail</button>
                        <button className="btn btn-primary">Service</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}