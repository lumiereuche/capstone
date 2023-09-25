import React from 'react'
import { BiSearch  } from "react-icons/bi";

export default function SearchBar() {
  return (
    <main className='flex'>
     <div className='text-center pt-[45px] flex items-center justify-center  min-height-[200px] w-screen'>
       <p className='border-solid bg-blue-300 rounded px-3 p-3'><input type="search" name="search" id="search"    placeholder='input your search here!'/></p>
     
       <p className='bg-blue-300  text-lg rounded p-3 text-white text-center min-w-[10px] ml-[200px]'> <BiSearch /></p>
     
     </div>

   
   </main>
  )
}
