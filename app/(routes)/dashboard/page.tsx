import React from 'react'
import Header from './_components/Header'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'
import DoctorsList from './_components/DoctorsList'

function DashBoard() {
  return (
      <div>
        <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>My Dashboard</h2>
        <Button>+ Consult with Doctor</Button> 
        </div>
        <HistoryList/>
        <DoctorsList/>
    </div>
  )
}

export default DashBoard