import { PricingTable } from '@clerk/nextjs'

export default function billing() {
  return (
    <div className='px-10 md:px-24 lg:px-48'>
        <h1 className='font-bold text-3xl mb-7'>Subscription Plans</h1>
      <PricingTable />
    </div>
  )
}