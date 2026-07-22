import React from 'react'
import { Doctor } from './DoctorAgentCard'
import Image from 'next/image'

type DoctorProps = {
    props : Doctor
    setSelectedDoctor : any
    selectedDoctor : Doctor
}

function SuggestedDoctorCard({props , setSelectedDoctor , selectedDoctor} : DoctorProps) {
  return (
    <div className={`flex flex-col items-center border  rounded-2xl shadow p-3 hover:border-black cursor-pointer
     ${selectedDoctor?.id === props.id && `border-blue-700`}`}
    onClick={() => setSelectedDoctor(props)}>
        <Image src={props.image}
        alt={props.specialist}
        height={70}
        width={70} 
        className='w-12.5 h-12.5 rounded-4xl'
        />

        <h2 className='font-bold text-sm text-center'>{props.specialist}</h2>
        <p className='text-xs text-center line-clamp-2'>{props.description}</p>
    </div>
  )
}

export default SuggestedDoctorCard