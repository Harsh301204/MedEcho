"use client"

import axios from 'axios'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Doctor } from '../../_components/DoctorAgentCard'
import { Circle, PhoneCall } from 'lucide-react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Vapi from '@vapi-ai/web';

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
    const vapi = new Vapi(process.env.NEXT_PUBLIC_API_KEY!);
    

    useEffect(() => {
        sessionId && getSessionDetails()
    } , [sessionId])

    const getSessionDetails = async () => {
        const result = await axios.get('/api/session-chat?sessionId=' + sessionId)
        console.log(result.data)
        setSessionDetail(result.data)
    }

    const startCall = ()=> {
        vapi.start(process.env.NEXT_PUBLIC_VAPI_VOICE_ASSISTANT_ID);
    }
  return (
    <div className='p-5 border rounded-3xl  bg-secondary'>
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

            <div className='mt-32'>
                <h2 className='text-gray-500'>Assistant Msg</h2>
                <h2 className='text-lg justify-center'>User message</h2>
            </div>

            <Button className='mt-10 p-2 px-4 text-xl'> <PhoneCall/> Start Call</Button>
            </div>}
    </div>
  )
}

export default MedicalVoiceAgent