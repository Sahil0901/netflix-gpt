import React from 'react'
import { Netflix_Logo } from '../utils/constants'

const Header = () => {
  return (
    <div><img alt="logo" src={Netflix_Logo} className='absolute px-4 py-4 w-48 bg-gradient-to-t from-black z-20'>
    </img></div>
  )
}

export default Header