"use client";
import { useState } from "react";
import Image from "next/image";
import listya from '../app/source/img/listya.png'
import ttp from '../app/source/img/xmark-solid.svg'
import bka from '../app/source/img/bars-solid.svg'

const Navbar = () => {
    const [navbar,setnavbar] = useState(false);

    const clickNavbar = () => {
        setnavbar(!navbar)
    }


    return (
        <>
        <header className="fixed bg-gray-800 top-0 right-0 left-0 md:py-1 transition-all duration-300">
          <nav className="max-w-7xl mx-auto bg-gray-800 md:bg-transparent p-5 order-[10001]">
            <div className="flex items-center justify-between">
          <a href="#" className="text-white font-bold text-lg flex items-center gap-3">
            <Image src={listya} alt='listya' className='rounded-xl w-12' />ListyaPradnyani</a>
          {/* <!-- only for large device --> */}
          <div className="hidden md:flex space-x-10">
            <a href="#home" className="text-white hover:text-gray-300">Home</a>
            <a href="#projects" className="text-white hover:text-gray-300">Projects</a>
            <a href="#service" className="text-white hover:text-gray-300">Service</a>
          </div>
          <div className="flex items-center md:hidden px-4">
            <button id='burger' name='burger' type='button' className='block absolute right-4 delay-500 duration-700 ease-in-out' onClick={clickNavbar}>
                {navbar ?(
                    <Image src={ttp} width={24} height={24} alt="close"/>
                ) : (
                    <Image src={bka} width={24} height={24} alt="open"/>
                )}
            </button>
          </div>
        </div>
      </nav>
      {navbar && (
        <div className="h-80 flex md:hidden before:transition animate-blur duration-700 ease-in-out">
            <div className="md:hidden flex animate-geser items-center justify-center w-full
            bg-tale-500/75 backdrop-blur-sm text-center rounded-xl">
                <ul className="flex flex-col space-y-10 text-xl font-normal text-center align-middle text-white">
                    <li className="hover:text-teal-500 transition duration-300 ease-in-out flex space-x-4">
                        <a onClick={() => setnavbar(!navbar)} href="#home">Home</a></li>
                    <li className="hover:text-teal-500 transition duration-300 ease-in-out flex space-x-4">
                        <a onClick={() => setnavbar(!navbar)} href="#projects">Projects</a></li>
                    <li className="hover:text-teal-500 transition duration-300 ease-in-out flex space-x-4">
                        <a onClick={() => setnavbar(!navbar)} href="#service">Service</a></li>
                </ul>
            </div>
        </div>
      )}
    </header>

        
        </>
    )
}

export default Navbar;