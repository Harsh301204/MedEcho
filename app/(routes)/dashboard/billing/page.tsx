import { PricingTable } from '@clerk/nextjs'

export default function billing() {
  return (
    <div>
        <h1 className='font-bold text-2xl'>Subscription Plans</h1>
      <PricingTable />
    </div>
  )
}