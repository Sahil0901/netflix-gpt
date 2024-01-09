import React from 'react'
import { Netflix_Logo } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute px-4 py-2 bg-gradient-to-t from-black w-screen z-10'><img alt="logo" src={Netflix_Logo} className=' w-48 '>
    </img></div>
  )
}

export default Header 