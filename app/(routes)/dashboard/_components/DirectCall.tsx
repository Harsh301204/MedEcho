"use client"

import axios from 'axios'

import { Doctor } from './DoctorAgentCard'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Loader2 } from 'lucide-react'


type DirectCallProps = {
    selectedDoctor : Doctor
}


export default function DirectCall({selectedDoctor} : DirectCallProps) {

    const [loading , setLoading] = useState<boolean>(false)

    const router = useRouter()
    const onStartConsultation = async () => {
    setLoading(true)
    const result = await axios.post('/api/session-chat' , {
      notes : `The user wants to directly consult a ${selectedDoctor.specialist}`,
      selectedDoctor : selectedDoctor
    })

    if(result.data[0]?.sessionId) {
      router.push('/dashboard/medical-agent/' + result.data[0]?.sessionId)

    }
    setLoading(false)
  }
  return (
    <>
        {loading && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <Loader2 className="h-10 w-10 animate-spin text-white" />
      </div>
        )}

        <Button className={`w-full mt-2`} onClick={() => onStartConsultation()}>Start Consultation</Button>
    </>
    
  )
}

