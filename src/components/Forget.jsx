import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";


const Forget = () => {
    const auth = getAuth();

    const [email, setEmail]= useState("")
    const [emailError, setEmailError] = useState("")

    const handelEmail =(event)=>{
        setEmail(event.target.value)
        setEmailError("")
         
    }

    const handelSubmit =()=>{
        if(email==""){
            setEmailError("Email Required")
        }
        else{
            sendPasswordResetEmail(auth, email)
            .then(() => {
                alert("check your email")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                console.log(errorMessage)
            });
        }

    }

  return (
    <div className='container mx-auto'>
        <div>
            <h1 className='text-center text-red-600 text-4xl mb-20'> Forget Password</h1>
        </div>

       <div className='mb-20'>
       <input onChange={handelEmail} type="text" className='w-[350px] border-2 rounded-lg border-blue-700 px-3 py-3' placeholder='enter your email address' />
       <p className='text-center text-red-400'>{emailError}</p> <br />
       <button onClick={handelSubmit} className=' py-2 px-2 mt-10 rounded-md w-64 border border-gray-600 bg-[#1877f2] text-white font-bold'> Send email</button>
       </div>

        <NavLink to={"/"} className='text-xl text-blue-500 text-center font-mono ' >Back to Login page</NavLink>  
      
    </div>
  )
}

export default Forget
