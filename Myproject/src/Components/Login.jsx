import React, { useState } from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";

const Login = ({ close }) => {
    
    const [showPassword, setShowpassword] = useState(false)

    const onSubmit = () => {
        alert("Login Completed")
        close()
    }

    return (
        <div className='h-full w-full absolute top-0 bg-black/50 flex justify-center items-center'>
            <div className='relative bg-white p-8 flex flex-col gap-8'>
                <IoCloseSharp
                    onClick={close}
                    className='absolute right-2 top-2 text-2xl bg-orange-400 rounded-4xl p-1' />
                <h1 className=' text-center text-2xl uppercase'>Login</h1>
                <div className='flex flex-col'>
                    <label>Email</label>
                    <input type="text" className='outline-none border-b-2'/>
                </div>
                <div className='flex flex-col relative'>
                    <label>Password</label>
                    <input type={showPassword ? 'text' : 'password'} className='outline-none border-b-2'/>
                    <div
                        onClick={()=> setShowpassword(!showPassword)}
                        className='absolute right-0 bottom-2'>
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash /> }
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button
                        onClick={onSubmit}
                        className='bg-orange-500 text-white px-8 py-2 text-lg'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login