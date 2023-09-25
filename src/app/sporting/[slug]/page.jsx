import React from 'react'
import { sports } from '@/app/sports/page'
import Image from 'next/image'


export default function page({params}) {
    const spoter = sports.find(spo =>{
      
       return spo.id == params.slug
      })
    console.log("jij: ", spoter)
  return (
    <section className='p-4'>
        <div className='bg-black text-white text-center w-[50vw]'>    

          <Image  src={`/${spoter?.imageKey}`}className='mb-5'
           alt={spoter?.sport} width={600} height={400} />
           
            
             <h2>{spoter.sport}</h2>
            <h2>{spoter.majorEvents}</h2>
            <h2>{spoter.description}</h2>


            <div>
              <div>
                {spoter?.title?.map(sp => (
                  <p
                  className='item-justify my-4 text-orange-300'
                  >{sp}</p>
                ))}
              </div>
            </div>
          
        </div>
    </section>
  )
}
