import React from 'react'
import { toyotaCars } from '@/app/toyotacars/page'
import Image from 'next/image'

export default function page({params}) {
    const motor = toyotaCars.find(cars => cars.id == params.slug)
  return (
    <section>
      <div className='md:flex gap-x-3 justify-center '>
      <Image src={`/${motor.imageKey}`} alt={motor.model} width={300} height={300} className='shadow-lg rounded-lg hover:shadow-2xl'/>
      <Image src={`/${motor.engineImg}`} alt={motor.model} width={300} height={300} className='shadow-lg rounded-lg hover:shadow-2xl'/>
      </div>
    </section>
  )
}
