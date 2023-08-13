import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../firebaseConfig"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Singup = () => {

  const auth = getAuth();

  const navigate = useNavigate("")

  const [email, setEmail]= useState("")
  const[ emailError, setEmailError]= useState("")
  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")


  const handelEmail =(event)=>{
    setEmail(event.target.value)
    setEmailError("")
  }

  const handelPassword =(event)=>{
    setPassword(event.target.value)
    setPasswordError("")
  }

  const handelSubmit=(event)=>{
      event.preventDefault()
    if(email==""){
      setEmailError("Email requred")
    }
    else if(password==""){
      setPasswordError("requred password")
      
    }
    else{
      createUserWithEmailAndPassword(auth, email, password)
      .then((user) => {
        // // Signed in 
        // const user = userCredential.user;
        // // ...
        setEmail("")
        setPassword("")

        console.log(user)

        navigate("/")


        
      })
      .catch((error) => {
        const errorCode = error.code;
        if(errorCode=="auth/email-already-in-use"){
          setEmailError("This email was already used")
          toast.error('This email was already used', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        }
      
      });
        }
  }



  return (
    <div className='container mx-auto'>
       <ToastContainer />
         

            <div>
              <p>Whether you are a brand new church planter with a dream to change the world or a seasoned ministry veteran with decades of experience, these posts will help you articulate what you've always felt deep within you.</p>
            </div>

             
                
             <div className=' bg-white rounded-xl border shadow-lg font-mono mt-48' >
             <form  onSubmit={handelSubmit} >

                <div className='py-5 pb-2'> 
                  <input value={email} onChange={handelEmail} className=' py-2 px-2 rounded-md w-96 border border-gray-600' type="email" placeholder='Email address or phone number' />
                  <p className='text-red-500'>{emailError}</p>
                </div>
                <div className='py-5 pb-2'>
                <input value={password} onChange={handelPassword} className=' py-2 px-2 rounded-md w-96 border border-gray-600' type="password" placeholder='Password' />
                <p className='text-red-500'>{passwordError}</p>
                </div>
                <div className='py-5 pb-2'>
                <button className=' py-2 px-2 rounded-md w-96 border border-gray-600 bg-[#1877f2] text-white font-bold'> Sing Up</button>
                </div>
                <div className='py-5 pb-2'>
                <span href="" className=' py-2 px-2 rounded-xl w-64   text-[#1877f2] font-bold' >Already have an account</span>
                </div>

                <hr className='bg-slate-600' />


                <NavLink to={"/"} >  <button className=' mt-7 mb-7 py-2 px-2 rounded-xl w-52 border border-gray-600 bg-[#2cb337] text-white font-bold'>  Login  </button> </NavLink>
                </form>


                </div>
              
       
      
    </div>
  )
}

export default Singup
