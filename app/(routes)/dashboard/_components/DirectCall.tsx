"use client"

import axios from 'axios'

import { Doctor } from './DoctorAgentCard'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'


type DirectCallProps = {
    selectedDoctor : Doctor
}


export default function DirectCall({selectedDoctor} : DirectCallProps) {

    const router = useRouter()
    const onStartConsultation = async () => {
    const result = await axios.post('/api/session-chat' , {
      notes : `The user wants to directly consult a ${selectedDoctor.specialist}`,
      selectedDoctor : selectedDoctor
    })

    if(result.data[0]?.sessionId) {
      router.push('/dashboard/medical-agent/' + result.data[0]?.sessionId)

    }
  }
  return (
    <Button className={`w-full mt-2`} onClick={() => onStartConsultation()}>Start Consultation</Button>
  )
}

