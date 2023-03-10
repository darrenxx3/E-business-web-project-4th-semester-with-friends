import React, { useState } from 'react'
import MenuItem from './MenuItem'

export default function Menu({ nav, setPage }) {
    return (
        <div className="">

            <div className="mx-auto items-center md:columns-2">
                {nav.map((v, i) => {
                    return (
                        <MenuItem val={v} setPage={setPage} />
                    )
                })}

            </div>
        </div>
    )
}
