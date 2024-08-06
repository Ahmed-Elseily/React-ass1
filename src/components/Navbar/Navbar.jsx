import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Portfolio from '../Portfolio/Portfolio'

export default function Navbar() {
  return (
    

<nav className="bg-white border-gray-200 dark:bg-gray-700 py-6 fixed w-full z-10">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <span  className="flex items-center space-x-3 rtl:space-x-reverse">
      <Link  to={""} className="self-center text-4xl font-semibold whitespace-nowrap dark:text-white uppercase">Start Framework</Link>
    </span>
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span className="sr-only">Open main menu</span>
      <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
      </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-700 dark:border-gray-700">
        <li>
          <NavLink  to={"about"}  className="block py-2 px-3 text-white  text-xl font-bold " aria-current="page">ABOUT</NavLink>
        </li>
        <li>
          <NavLink  to={"portfolio"}  className="block py-2 px-3 text-white text-xl font-bold ">PORTFOLIO</NavLink>
        </li>
        <li>
          <NavLink  to={"contact"}  className="block py-2 px-3 text-white text-xl font-bold ">CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>


    
    
    // <nav className='nav-bg p-5'>
    //     <div className="container mx-auto top-0 flex justify-between items-center">
    //         <div className="">
    //             <a className='uppercase text-4xl font-bold text-white hover:text-white cursor-pointer'>Start Framework</a>
    //         </div>
    //         <div className="flex gap-5">
    //             <a className='text-xl uppercase mx-2 text-white hover:text-white'>About</a>
    //             <a className='text-xl uppercase mx-2 text-white hover:text-white'>Portfolio</a>
    //             <a className='text-xl uppercase mx-2 text-white hover:text-white'>Contact</a>
    //         </div>
    //     </div>
    // </nav>
  )
}
