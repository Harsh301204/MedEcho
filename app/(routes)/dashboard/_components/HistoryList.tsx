"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'

function HistoryList() {
    const [historyList , setHistoryList] = useState([])
  return (
    <div className='mt-10'>
        {historyList.length == 0 ?     
        <div className='flex flex-col justify-center p-7 items-center border border-black border-dashed rounded'>
        <Image src={'/medical-assistance.png'} alt='Doc' width={200} height={200}/>
        <h2 className='font-bold text-2xl mt-2'>No Recent Consultations</h2>
        <p className=''>It looks like you haven't consulted with any doctors yet</p>
        <Button className='mt-3'>+ Start a Consultation</Button>
    </div>: <div>List</div>}

    </div>
  )
}

export default HistoryList