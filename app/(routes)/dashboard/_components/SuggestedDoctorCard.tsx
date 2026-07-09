import React from 'react'
import { Doctor } from './DoctorAgentCard'
import Image from 'next/image'

type DoctorProps = {
    props : Doctor
    setSelectedDoctor : any
}

function SuggestedDoctorCard({props , setSelectedDoctor} : DoctorProps) {
  return (
    <div className='flex flex-col items-center border  rounded-2xl shadow p-3 hover:border-black cursor-pointer'
    onClick={() => setSelectedDoctor(props)}>
        <Image src={props.image}
        alt={props.specialist}
        height={70}
        width={70} 
        className='w-[50px] h-[50px] rounded-4xl'
        />

        <h2 className='font-bold text-sm text-center'>{props.specialist}</h2>
        <p className='text-xs text-center line-clamp-2'>{props.description}</p>
    </div>
  )
}

export default SuggestedDoctorCard