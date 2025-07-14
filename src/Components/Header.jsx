import React from 'react'
import { assets } from '../assets/assets'
import Home1 from './Home1';
import Home2 from './Home2';





const Header = () => {



  return (
    <div className='absolute z-10 right-0 left-0 top-7'>
        <div className=' flex justify-between px-25 items-center bg-transparent relative'>
        <div className='flex gap-2 items-center'>
        <img 
        className='h-18' 
        src={assets.logo} 
        />
        <h1 className='kfc text-white text-2xl'>Kentucky Fried Chicken</h1>
        </div>

        

        <div className='flex gap-5 text-lg text-white'>
            <a href="#" className='item2'>Home</a>
            <a href="#" className='item2'>About</a>
            <a href="#" className='item2'>Menu</a>
            <a href="#" className='item2'>Contact</a>
        </div>
        </div>
    </div>
  )
}

export default Header