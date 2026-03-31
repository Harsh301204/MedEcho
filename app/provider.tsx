"use client"

import { useUser } from '@clerk/nextjs';
import axios from 'axios'
import React, { useEffect } from 'react'

function Provider({children} : Readonly<{
  children: React.ReactNode;
}>) {

    const {isLoaded , user} = useUser();
    useEffect(() => {
        if(isLoaded && user) createNewUser();
    } , [isLoaded , user?.id])

    const createNewUser = async () => {
        const result = await axios.post('api/users');
        console.log(result.data);
    }

  return (
    <div>{children}</div>
  )
}

export default Provider