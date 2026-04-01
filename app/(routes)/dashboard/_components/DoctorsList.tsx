import { AIDoctorAgents } from '@/shared/list'
import Image from 'next/image'
import React from 'react'
import DoctorAgentCard, { Doctor } from './DoctorAgentCard'

function DoctorsList() {
  return (
    <div className='mt-10'>
        <h2 className='font-bold text-xl'>AI Doctor Agents</h2>

        <div className='gap-10 grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center rounded-xl'>
            {AIDoctorAgents.map((agent : Doctor , index) => (
                <div key={index}>
                    <DoctorAgentCard props={agent}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default DoctorsList