import React, { useRef } from 'react'
import { Netflix_Bkg} from '../utils/constants'
import Header from './Header'
import { useState } from 'react'
import { validData } from "../utils/validData";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [SignInbtn, setSignInbtn] = useState(true);
    const [errMessage, seterrMessage] = useState(null);
    const navigate = useNavigate();

    const toggleSignInForm = ()=>{
        setSignInbtn(!SignInbtn);
    }
    const email = useRef(null);
    const password = useRef(null);
    // const name = useRef(null);

    //email and password validation function (using regex and useRef hook)
    const toggleSubmitbtn = ()=>{
        const message = validData(email.current.value, password.current.value);
        seterrMessage(message);

        if(message) return;

    //Sign in/ Sign up (to the firebase) logic

    if(!SignInbtn){
        //Sign Up logic
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorCode + "-" + errorMessage);
  });
    }else{
        //Sign In logic
signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrMessage(errorCode + "-" + errorMessage);
  });

    }
    }
    

  return (
    <div>
        <Header/>
        <div>
        <img alt="bkg" src={Netflix_Bkg} className='absolute'></img>
        <form className='w-3/12 absolute p-12 bg-black left-0 right-0 mx-auto my-36 text-white rounded-lg bg-opacity-80' onSubmit={(e)=>e.preventDefault()}>
            <h1 className='font-bold text-3xl py-4'>{!SignInbtn?"Sign Up": "Sign In"}</h1>
            {!SignInbtn && <input type='text' placeholder='Full Name'  className='p-4 my-2 bg-gray-700 w-full rounded-lg'></input>}
            <input type='text' placeholder='Email' ref={email} className='p-4 my-2 w-full bg-gray-700 rounded-lg'></input>
            <input type='password' placeholder='Password' ref={password} className='p-4 my-2 bg-gray-700 w-full rounded-lg'></input>
            <p className='text-red-700'>{errMessage}</p>
            <button className='bg-red-700 p-4 my-6 w-full rounded-lg' onClick={toggleSubmitbtn}>{!SignInbtn?"Sign Up": "Sign In"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{!SignInbtn?"Already an user? Sign In now!":"New to Netflix? Sign Up now!"}</p>
        </form>
        </div>
    </div>
  )
}

export default Login