import React from 'react'
import Header from './_components/Header'
import HistoryList from './_components/HistoryList'
import { Button } from '@/components/ui/button'
import DoctorsList from './_components/DoctorsList'
import DialogSession from './_components/DialogSession'
import ViewReportDialog from './_components/ViewReportDialog'
import { auth } from '@clerk/nextjs/server'

export default async function DashBoard() {

  const { has } = await auth()
  
  const hasSubscription = has({ plan: 'pro' })
  return (
      <div>
        <div className='flex justify-between items-center'>
        <h2 className='font-bold text-2xl'>My Dashboard</h2>
        <div> <DialogSession props={!hasSubscription}/>  </div>
        </div>
        <HistoryList/>
        <DoctorsList/>
    </div>
  )
}
