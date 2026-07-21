"use client"

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useState } from 'react'
import DialogSession from './DialogSession'
import axios from 'axios'

function HistoryList() {
    const [historyList , setHistoryList] = useState([])

    const getHistoryList = async () => {
      const result = await axios.get('/api/session-chat?sessionId=all');
      // @ts-ignore
      setHistoryList(result.data)
      console.log(result.data)
    }
  return (
    <div className='mt-10'>
        {historyList.length == 0 ?     
        <div className='flex flex-col justify-center p-7 items-center border border-black border-dashed rounded'>
        <Image src={'/medical-assistance.png'} alt='Doc' width={200} height={200}/>
        <h2 className='font-bold text-2xl mt-2'>No Recent Consultations</h2>
        <p className=''>It looks like you haven't consulted with any doctors yet</p>
        <div><DialogSession/></div>
    </div>: <div>List</div>}

    </div>
  )
}

export default HistoryList