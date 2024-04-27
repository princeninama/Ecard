import React from 'react'

const Navbar = () => {
  return (
    <div className=' z-10 text-black space-x-5 '>
       <div className='ml-[67rem] rounded-bl-full pt-3 pl-12 pr-8 rounded-br-full bg-gradient-to-br from-purple-300 via-red-200 to-pink-100  space-x-5 text-xl font-mono  fixed '>

      <button>Home</button>
      <button>Album</button>
      <button>Family</button>
      <button>Map</button>
       </div>
    </div>
  )
}

export default Navbar
