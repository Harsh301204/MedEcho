import { AIDoctorAgents } from '@/shared/list'
import DoctorAgentCard, { Doctor } from './DoctorAgentCard'
import { auth, currentUser } from '@clerk/nextjs/server';
import { getConsultationCount } from '@/lib/consultation';

async function DoctorsList() {
    const { has } = await auth();
    const user = await currentUser()

    // @ts-ignore
    const consultationCount = await getConsultationCount(user);
    
    const hasSubscription = has({ plan: "pro" });
  return (
    <div className='mt-10'>
        <h2 className='font-bold text-xl'>AI Doctor Agents</h2>

        <div className='gap-10 grid sm:grid-col-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center rounded-xl'>
            {AIDoctorAgents.map((agents : Doctor) => (
                <div key={agents.id}>
                    <DoctorAgentCard 
                    props={agents} 
                    consultationCount ={consultationCount}
                    hasSubscription={hasSubscription}/>
                </div>
            ))}
        </div>
    </div> 
  )
}

export default DoctorsList