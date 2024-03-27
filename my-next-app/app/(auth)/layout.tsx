"use client"
import React, { useState } from 'react'

export default function Layout({  children }: Readonly<{children: React.ReactNode;}>){
  const [state , setState] = useState('');
    return (
      <div className="">
               Layout 
               <input type="text" className="border border-red-500 p-5 text-red-700" onChange={(e)=>setState(e.target.value)} value={state}/>
            {children}
      </div>
    )
}