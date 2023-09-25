import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className='mb-4'>
    <ul className=' bg-blue-700 text-white p-4 fixed w-full top-0 flex justify-around evenly min-height-[100px] rounded text-2xl mx-[10px]  '>
         <li className='cursor-pointer shadow-lg rounded-lg hover:shadow-2xl hover:bg-blue-200 text-black p-2'>sUgA</li>
         <Link href="/">
         <li className=' rounded ml-20 hover:bg-blue-300 text-black p-2'> Home</li>
         </Link>
         <Link href="/toyotacars">
         <li className=' rounded ml-20 hover:bg-blue-300 text-black p-2'>Toyota Cars</li>
         </Link>
         <Link href="/sports">
         <li className=' rounded ml-20 hover:bg-blue-300 text-black p-2'>Sports</li>
         </Link>
         <Link href='/signup'>
         <li className=' rounded ml-20 hover:bg-blue-300 text-black p-2'>Signup </li>
         </Link>  
         <Link href="/login">
         <li className='  ml-20 hover:bg-blue-300 text-black rounded p-2'>Login</li>
         </Link>
         {/* <Link href="/about">
         <li className=' text-white rounded-full'>About</li>
         </Link>
         <Link href="/contact">
         <li className=' text-white rounded-full'>Contact</li>
         </Link> */}
    </ul>
    </nav>
  )
}

