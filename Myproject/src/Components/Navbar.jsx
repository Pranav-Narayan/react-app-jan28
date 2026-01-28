import React, { useState } from 'react'
import Login from './Login'

const Navbar = () => {

    const [showLogin, setShowLogin] = useState(false)

    const onHandleClick = () => {
        setShowLogin(true)
    }

    return (
        <>
            <div className='p-8 bg-amber-300 flex justify-between items-center'>
                <div>
                    <h1 className='text-4xl font-bold'>Logo</h1>
                </div>
                <ul className='flex gap-3'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
                <div>
                    <button
                        onClick={onHandleClick}
                        className='bg-blue-700 text-white px-6 py-2 text-lg'>Login</button>
                </div>
            </div>
            {showLogin && <Login close = {()=> setShowLogin(false)}/>}
        </>
    )
}

export default Navbar