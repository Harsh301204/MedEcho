"use client"

import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Doctor } from '../../_components/DoctorAgentCard'
import { Circle } from 'lucide-react'
import Image from 'next/image'

type sessionDetail = {
    id : number,
    sessionId : string,
    notes : string,
    report : JSON,
    selectedDoctor : Doctor,
    createdBy : string
}

function MedicalVoiceAgent() {
    const {sessionId} = useParams()
    const [sessionDetail , setSessionDetail] = useState<sessionDetail>()

    useEffect(() => {
        sessionId && getSessionDetails()
    } , [sessionId])

    const getSessionDetails = async () => {
        const result = await axios.get('/api/session-chat?sessionId=' + sessionId)
        console.log(result.data)
        setSessionDetail(result.data)
    }
  return (
    <div>
        <div className='flex justify-between'>
            <h2 className='border rounded-md flex p-1 gap-2 px-2 items-center'> <Circle className='h-4 w-4'/> Not Connected </h2>
            <h2 className='font-bold text-xl text-gray-500'>00:00</h2>
        </div>

        {sessionDetail && <div className='flex flex-col justify-center items-center mt-10'>
            <Image src={sessionDetail?.selectedDoctor?.image} alt={sessionDetail?.selectedDoctor?.specialist} 
            height={120}
            width={120}
            className='rounded-full object-cover'/>

            <h2 className='text-2xl font-bold mt-3'>{sessionDetail.selectedDoctor.specialist}</h2>
            <p className='text-sm text-gray-400'>AI Medical Voice Agent</p>
            </div>}
    </div>
  )
}

export default MedicalVoiceAgent