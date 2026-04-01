"use client"

import { UserDetailsContext } from '@/context/UserDetailsContext';
import { useUser } from '@clerk/nextjs';
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export type UserDetail = {
    id : number,
    name : string,
    email : string,
    clerkId : string,
    age? : number | null
}

function Provider({children} : Readonly<{
  children: React.ReactNode;
}>) {

    const {isLoaded , user} = useUser();
    const [userDetail , setUserDetail] = useState<UserDetail | null>(null)
    useEffect(() => {
        if(isLoaded && user) createNewUser();
    } , [isLoaded , user?.id])

    const createNewUser = async () => {
        const result = await axios.post('/api/users');
        console.log(result.data);
        setUserDetail(result.data);
    }

  return (
    <div>
        <UserDetailsContext.Provider value={{userDetail , setUserDetail}}>
        {children}
        </UserDetailsContext.Provider>
    </div>
  )
}

export default Provider