import React from 'react'
import { Netflix_Bkg} from '../utils/constants'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
    const [SignInbtn, setSignInbtn] = useState(true);
    const toggleSignInForm = ()=>{
        setSignInbtn(!SignInbtn);
    }
  return (
    <div>
        <Header/>
        <div>
        <img alt="bkg" src={Netflix_Bkg} className='absolute'></img>
        <form className='w-3/12 absolute p-12 bg-black left-0 right-0 mx-auto my-36 text-white rounded-lg bg-opacity-80'>
            <h1 className='font-bold text-3xl py-4'>{!SignInbtn?"Sign Up": "Sign In"}</h1>
            {!SignInbtn && <input type='text' placeholder='Full Name' className='p-4 my-2 bg-gray-700 w-full rounded-lg'></input>}
            <input type='text' placeholder='Email' className='p-4 my-2 w-full bg-gray-700 rounded-lg'></input>
            <input type='password' placeholder='Password' className='p-4 my-2 bg-gray-700 w-full rounded-lg'></input>
            <button className='bg-red-700 p-4 my-6 w-full rounded-lg'>{!SignInbtn?"Sign Up": "Sign In"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{!SignInbtn?"Already an user? Sign In now!":"New to Netflix? Sign Up now!"}</p>
        </form>
        </div>
    </div>
  )
}

export default Login