"use client";
import { getSession, signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Appbar = () => {
    const session = useSession();
   const da = getSession();
    console.log("🚀 ~ Appbar ~ da:", da)
    // console.log("🚀 ~ Appbar ~ session:", session)
    return (
        <div className='bg-white py-10'>
            <button className='text-red-500 text-xl' onClick={signIn}>
                Sign In
            </button>

            <button className='text-red-500 text-xl ml-10' onClick={signOut}>
                Log Out
            </button>
            <div className='text-red-800'> {JSON.stringify(session)}</div>
           
        </div>
    )
}

export default Appbar