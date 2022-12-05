import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { useSelector,useDispatch } from 'react-redux';
import { register,reset,logout, login  } from '../../redux/authSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BiArrowBack} from 'react-icons/bi'

const Index = () => {
    const router = useRouter();
    const name = useRef("")
    const password = useRef("")
    const email = useRef("")

    const [isLogin, setIsLogin] = useState(true)
    
    const dispatch = useDispatch()
    
    const { user,isLoading,isError,isSuccess,message } = useSelector((state) => state.auth)
    
    useEffect(() => {
        if (user) {
            if(user.isAdmin) {
                router.push('/admin')
            } 
        } 
    },[user])
    
    const submit = (e) => {
        e.preventDefault()

        const userData = {
            name:name.current.value,
            email:email.current.value,
            password:password.current.value,
        }
        if(isLogin) {
            dispatch(login(userData))
        }
        if(!isLogin) {
            dispatch(register(userData))
        }
        
    }   

    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess) {
            toast.success("Success")
        }

        dispatch(reset())
    }, [isSuccess,isError,user])
    
    

    

  return (
    <>
    <div className='back flex items-center p-10 fixed cursor-pointer' onClick={() => {
        router.back()
    }}>
        <BiArrowBack size={50} opacity={0.6}/>
    </div>
    <div className='login-form flex flex-col w-pcent justify-center items-center h-pcent'>
        {isLogin ? (
            <form className='flex flex-col' onSubmit={(e) => submit(e)}>
                <input placeholder='Enter Email' id='email' required={true} className="pr-10 pl-5 py-3 outline-none my-3" ref={email}/>
                <input placeholder='Enter Password' id='password' required={true} className="pr-10 pl-5 py-3 outline-none " ref={password}/>
                <button className='bg-black text-white p-3 mt-2'>Login</button>
            </form>
        ) : (
        <form className='flex flex-col' onSubmit={(e) => submit(e)}>
            <input placeholder='Enter name' id='name' required={true} className="pr-10 pl-5 py-3 outline-none" ref={name}/>
            <input placeholder='Enter Email' id='email' required={true} className="pr-10 pl-5 py-3 outline-none my-3" ref={email}/>
            <input placeholder='Enter Password' id='password' required={true} className="pr-10 pl-5 py-3 outline-none " ref={password}/>
            <button className='bg-black text-white p-3 mt-2'>Register</button>
        </form>
        )}
        
            
            {isLogin ? (
                <div className='pt-10'>
                    <p>Dont Have An Account <button onClick={() => setIsLogin(false)} className='cursor-pointer font-medium outline-none'>Sign In</button></p>
                </div>
            ) : (
                <div className='pt-10'>
                    <p>Already Have An Account <button onClick={() => setIsLogin(true)} className='cursor-pointer font-medium outline-none'>Log In</button></p>
                </div>
            )}
    </div>
    </>
  )
}

export default Index