import React from 'react'

export default function MenuItem({ val, setPage }) {

    return (
        <div className=''>
            <button onClick={(e) => setPage(val["title"])} >
                <figure className="relative transition-all duration-300 cursor-pointer lg:max-w-sm aspect-square">
                    <img className="inset-0 h-full w-full object-cover object-center rounded" src={val["img"]} alt="image description" />
                    <figcaption className="absolute px-4 lg:text-lg md:text-sm text-white bottom-6 bg-gray-900 opacity-100">
                        <h1>{val["title"]}</h1>
                        {/* <p>{val["caption"]}</p> */}
                    </figcaption>
                </figure>
            </button>
        </div>
    )
}
