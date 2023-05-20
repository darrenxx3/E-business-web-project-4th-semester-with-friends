import React from 'react'
import teknisi from "../assets/undraw_automobile_repair_ywci.svg"
import rumah from "../assets/undraw_at_home_re_1m0v.svg"

export default function Home({ setPage }) {

    return (
        <div className="">
            <div className="leading-normal tracking-normal text-white gradient">
                <section className="bg-white border-b py-8">
                    <div className="container max-w-5xl mx-auto m-8">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Autogear
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                        </div>
                        <div className="flex flex-wrap">
                            <div className="w-5/6 sm:w-1/2 p-6">
                                <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                    Teknisi terpercaya untuk kendaraan kesayangan anda
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Teknisi kami sangat bisa dipercaya
                                    <br />
                                    <br />

                                </p>
                            </div>
                            <div className="w-full sm:w-1/2 p-6">
                                <img src={teknisi} alt="" className='max-h-60 mx-auto' />
                            </div>
                        </div>
                        <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                            <div className="w-full sm:w-1/2 p-6 mt-6">
                                <img src={rumah} alt="" className='max-h-60 mx-auto' />

                            </div>
                            <div className="w-full sm:w-1/2 p-6 mt-6">
                                <div className="align-middle">
                                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                                        Panggil montir ke rumah
                                    </h3>
                                    <p className="text-gray-600 mb-8">
                                        Tidak perlu repot-repot ke bengkel kami karena anda bisa memanggil montir kami untuk melakukan perawatan di rumah anda
                                        <br />
                                        *Syarat dan ketentuan berlaku
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div >
                </section >
                {/* <section className="bg-white border-b py-8">
                    <div className="container mx-auto flex flex-wrap pt-4 pb-12">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Title
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                        </div>
                        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <a
                                    href="#"
                                    className="flex flex-wrap no-underline hover:no-underline"
                                >
                                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                        xGETTING STARTED
                                    </p>
                                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        at ipsum eu nunc commodo posuere et sit amet ligula.
                                    </p>
                                </a>
                            </div>
                            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                <div className="flex items-center justify-start">
                                    <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        Action
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <a
                                    href="#"
                                    className="flex flex-wrap no-underline hover:no-underline"
                                >
                                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                        xGETTING STARTED
                                    </p>
                                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        at ipsum eu nunc commodo posuere et sit amet ligula.
                                    </p>
                                </a>
                            </div>
                            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                <div className="flex items-center justify-center">
                                    <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        Action
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink">
                            <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                <a
                                    href="#"
                                    className="flex flex-wrap no-underline hover:no-underline"
                                >
                                    <p className="w-full text-gray-600 text-xs md:text-sm px-6">
                                        xGETTING STARTED
                                    </p>
                                    <div className="w-full font-bold text-xl text-gray-800 px-6">
                                        Lorem ipsum dolor sit amet.
                                    </div>
                                    <p className="text-gray-800 text-base px-6 mb-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        at ipsum eu nunc commodo posuere et sit amet ligula.
                                    </p>
                                </a>
                            </div>
                            <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                <div className="flex items-center justify-end">
                                    <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                        Action
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
                < section className="bg-gray-100 py-8" >
                    <div className="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
                            Pricing
                        </h2>
                        <div className="w-full mb-4">
                            <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t" />
                        </div >
                        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
                            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                                    <div className="p-8 text-3xl font-bold text-center border-b-4">
                                        Paket A
                                    </div>
                                    <ul className="w-full text-center text-sm">
                                        <div className="tooltip" data-tip="Pengecekan oli, radiator, minyak rem, dan kampas rem">
                                            <li className="border-b py-4">Perawatan dasar komponen kendaraan</li>
                                        </div>
                                        <li className="border-b py-4">Perawatan baut-baut kendaraan</li>
                                        <li className="border-b py-4">Perawatan tekanan ban</li>
                                    </ul>
                                </div >
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                        Rp 350.000
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={(e) => setPage("maintenance")}>
                                            Pesan
                                        </button >
                                    </div >
                                </div >
                            </div >
                            <div className="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10">
                                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                                    <div className="p-8 text-3xl font-bold text-center border-b-4">
                                        Paket B
                                    </div>
                                    <div className="h-1 w-full gradient my-0 py-0 rounded-t" />
                                    <ul className="w-full text-center text-base font-bold">
                                        <li className="border-b py-4">Seluruh paket A</li>
                                        <li className="border-b py-4">Ganti aki</li>
                                        <li className="border-b py-4">Ganti oli</li>
                                        <li className="border-b py-4">Ganti/tambah minyak rem</li>
                                    </ul >
                                </div >
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div className="w-full pt-6 text-4xl font-bold text-center">
                                    Mulai dari Rp 500.000
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={(e) => setPage("maintenance")}>
                                            Pesan
                                        </button >
                                    </div >
                                </div >
                            </div >
                            <div className="flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4">
                                <div className="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow">
                                    <div className="p-8 text-3xl font-bold text-center border-b-4">
                                        Paket C
                                    </div>
                                    <ul className="w-full text-center text-sm">
                                        <li className="border-b py-4">Seluruh paket A dan B</li>
                                        <li className="border-b py-4">Perawatan kelistrikan kendaraan</li>
                                        <li className="border-b py-4">Perawatan AC kendaraan</li>
                                    </ul >
                                </div >
                                <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6">
                                    <div className="w-full pt-6 text-3xl text-gray-600 font-bold text-center">
                                        Rp 200.000
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <button className="mx-auto lg:mx-0 hover:underline gradient text-black font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" onClick={(e) => setPage("maintenance")}>
                                            Pesan
                                        </button >
                                    </div >
                                </div >
                            </div >
                        </div >
                    </div >
                </section >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="wave-top"
                    viewBox="0 0 1439 147"
                >
                    <g fill="none" fillRule="nonzero">
                        <path
                            d="M1440 84c-56.445-19.7-97.445-32.7-123-39-57.5-14.176-110.293-19.474-148-23-39.289-3.674-124.574-3.525-189 0-25.75 1.409-57.75 4.742-96 10-38.878 5.787-65.545 10.121-80 13-27.167 5.41-75.864 16.77-91 20-52.977 11.309-91.456 22.729-129 29-66.475 11.104-99.475 12.438-155 14-49.51-1.516-86.177-3.516-110-6-40.429-4.217-87.263-13.264-114-18C154.629 75.076 86.296 57.743 0 32V0h1440v84z"
                            transform="translate(-1 -14)"
                            className={0}
                            fill="#f8fafc"
                        />
                        <g fill="#FFF">
                            <path
                                d="M0 0c90.728.928 147.913 27.188 291.91 59.912C387.908 81.728 543.605 89.335 759 82.732c-289.664 73.522-542.664 70.936-759-7.759"
                                opacity="0.1"
                                transform="translate(-1 -14) translate(1 15) rotate(-180 719.5 68.5)"
                            />
                            <path
                                d="M100 104.708c177.413-32.473 326.148-52.183 446.204-59.13 120.055-6.945 264.32-3.78 432.796 9.496-47.93 1.049-168.697 19.772-362.3 56.17-193.603 36.397-365.837 34.219-516.7-6.536z"
                                opacity="0.1"
                                transform="translate(-1 -14) translate(1 15) rotate(-180 719.5 68.5)"
                            />
                            <path
                                d="M1046 51.652c84.83-22.323 233.083-34.044 393-11.486V120c-167.828-42.056-298.828-64.84-393-68.348z"
                                opacity="0.2"
                                transform="translate(-1 -14) translate(1 15) rotate(-180 719.5 68.5)"
                            />
                        </g>
                    </g >
                </svg >
                {/* <section className="container mx-auto text-center py-6 mb-12">
                    <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                        Call to Action
                    </h2>
                    <div className="w-full mb-4">
                        <div className="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t" />
                    </div>
                    <h3 className="my-4 text-3xl leading-tight">
                        Main Hero Message to sell yourself!
                    </h3>
                    <button className="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Action!
                    </button>
                </section> */}
                < footer className="bg-white" >
                    <div className="container mx-auto px-8">
                        <div className="w-full flex flex-col md:flex-row py-6">

                            <div className="flex-1">
                                <p className="uppercase text-gray-500 md:mb-6">Links</p>
                                <ul className="list-reset mb-6">
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            FAQ
                                        </a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            Help
                                        </a >
                                    </li >
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            Support
                                        </a >
                                    </li >
                                </ul >
                            </div >
                            <div className="flex-1">
                                <p className="uppercase text-gray-500 md:mb-6">Legal</p>
                                <ul className="list-reset mb-6">
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            Terms
                                        </a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            Privacy
                                        </a >
                                    </li >
                                </ul >
                            </div >
                            {/* <div className="flex-1">
                                <p className="uppercase text-gray-500 md:mb-6">Social</p>
                                <ul className="list-reset mb-6">
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            Facebook
                                        </a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            Linkedin
                                        </a >
                                    </li >
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            Twitter
                                        </a >
                                    </li >
                                </ul >
                            </div >
                            <div className="flex-1">
                                <p className="uppercase text-gray-500 md:mb-6">Company</p>
                                <ul className="list-reset mb-6">
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            Official Blog
                                        </a>
                                    </li>
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            About Us
                                        </a >
                                    </li >
                                    <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                                        <a
                                            href="#"
                                            className="no-underline hover:underline text-gray-800 hover:text-pink-500"
                                        >
                                            Contact
                                        </a >
                                    </li >
                                </ul >
                            </div > */}
                        </div >
                    </div >
                </footer >
            </div >
        </div >
    )
}
