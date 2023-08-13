import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "../firebaseConfig"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login =() =>{

    const auth = getAuth();

    const navigate = useNavigate("")

    const [email, setEmail]= useState("")
    const [emailError, setEmailError] = useState("")
    const [password, setPassword ]= useState("")
    const [passwordError, setPasswordError]=useState("")



    const handelEmail =(event)=>{
        setEmail(event.target.value)
        setEmailError("")
    }

    const handelPassword = (event)=>{
        setPassword(event.target.value)
        setPasswordError("")
    }

    const handelSubmit =(event)=>{
            event.preventDefault()
            if(email==""){
                setEmailError("Email Requried")
            }
            else if(password==""){
                setPasswordError("Password Requried")
            }
            else{
                signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    // // Signed in 
                    // const user = userCredential.user;
                    // // ...
                    console.log(user)
                    setEmail("")
                    setPassword("")
                    navigate("/home")
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if(errorCode=="auth/user-not-found"){
                        setEmailError("")
                        toast.error('User not found!', {
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
                    else if(errorCode=="auth/wrong-password")
                    setPasswordError("")
                    toast.error('Wrong password!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                        });
                    console.log(errorCode)
                });
            }
            
            
    }




    return(
            <div className='container mx-auto'>
                 <ToastContainer />
                <div className='flex justify-between items-center pt-28'>
                    <div className='  text-start'>
                        <h1  className=' text-[#1877f2] text-8xl font-bold' >yourbook</h1>
                        <p className='mt-5 w-[650px] text-[#1c3547] text-4xl font-semibold'  > yourbook helps you connect and share with the people in your life.
                        </p>
                    </div>
                   
                   <form onSubmit={handelSubmit}>
                   <div className='w-96 bg-white rounded-xl border shadow-lg font-sans' >

                    <div className='py-5 pb-2'> 
                    <input value={email} onChange={handelEmail} className=' py-2 px-2 rounded-md w-64 border border-gray-600' type="email" placeholder='Email address or phone number' />
                    <p   className='text-red-500' >{emailError}</p>
                    </div>
                    <div className='py-5 pb-2'>
                    <input value={password} onChange={handelPassword} className=' py-2 px-2 rounded-md w-64 border border-gray-600' type="password" placeholder='Password' />
                    <p  className='text-red-500' >{passwordError}</p>
                    </div>
                    <div className='py-5 pb-2'>
                    <button className=' py-2 px-2 rounded-md w-64 border border-gray-600 bg-[#1877f2] text-white font-bold'> Log in</button>
                    </div>
                    <div className='py-5 pb-2'>
                    <NavLink to={"/forgetpassword"} className='text-xl text-blue-500 text-center font-mono' > forget password </NavLink>
                    </div>

                    <hr className='bg-slate-600' />
                    <NavLink to={"/singup"}  >  <button className=' mt-7 mb-7 py-2 px-2 rounded-xl w-52 border border-gray-600 bg-[#2cb337] text-white font-bold'  >   create your account </button> </NavLink>
                    
                   




                    </div>
                  
                   </form>
                </div>
            </div>
    )
}

export default Login;