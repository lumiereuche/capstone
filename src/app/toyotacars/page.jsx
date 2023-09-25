import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const toyotaCars = [
    {
      id: 1,
      price: 25000,
      engineNumber: 'ABC12345',
      model: 'Camry',
      productionYear: 2022,
      imageKey: 'Toyota-Camry-2022.avif',
      engineImg: 'Camry_2022_engine.jpg'
    },
    {
      id: 2,
      price: 30000,
      engineNumber: 'XYZ67890',
      model: 'Corolla',
      productionYear: 2023,
      imageKey: 'toyota-corrolla-2023.png',
      engineImg: 'corrolla_2023_engine.jpg'
      
    },
    {
      id: 3,
      price: 35000,
      engineNumber: 'DEF54321',
      model: 'RAV4',
      productionYear: 2022,
      imageKey: 'RAV4-2022.png',
      engineImg: 'Toyota-RAV4-engine-2022.jpeg'
    },
    {
      id: 4,
      price: 27000,
      engineNumber: 'GHI98765',
      model: 'Highlander',
      productionYear: 2023,
      imageKey: 'highlander_2023.png',
      engineImg: 'highlander-2023-engine.webp'
    },
    {
      id: 5,
      price: 32000,
      engineNumber: 'JKL45678',
      model: 'Sienna',
      productionYear: 2022,
      imageKey: 'Toyota-Sienna-2022.png',
      engineImg: 'toyota-sienna-engine-2022.jpg'
    },
    {
      id: 6,
      price: 40000,
      engineNumber: 'MNO12345',
      model: 'Tacoma',
      productionYear: 2023,
      imageKey: 'toyota-tacoma-2023.webp',
      engineImg: 'toyota-tacoma-2023.webp'
    },
    {
      id: 7,
      price: 29000,
      engineNumber: 'PQR67890',
      model: 'Prius',
      productionYear: 2022,
      imageKey: 'toyota_prius_2022.webp',
      engineImg: 'toyota-prius-engine-2022.jpg'
    },
    {
      id: 8,
      price: 38000,
      engineNumber: 'STU54321',
      model: '4Runner',
      productionYear: 2023,
      imageKey: 'toyota_4runner_2023.png',
      engineImg: 'toyota-4runner-engine-2023.jpg'
    
    },
    {
      id: 9,
      price: 26000,
      engineNumber: 'VWX98765',
      model: 'Yaris',
      productionYear: 2022,
      imageKey: 'toyota_yaris_2022.png',
      engineImg: 'toyota-yaris-engine-2022.jpg'
    },
    {
      id: 10,
      price: 31000,
      engineNumber: 'YZA45678',
      model: 'Avalon',
      productionYear: 2023,
      imageKey: 'Toyota_Avalon_2023.jpg',
      engineImg: 'toyota-avalon-engine-2023.jpeg'
    },
    {
      id: 11,
      price: 36000,
      engineNumber: 'BCD12345',
      model: 'C-HR',
      productionYear: 2022,
      imageKey: 'toyota_c-hr_2023.png',
      engineImg: 'toyota-c-hr-engine-2023.jpg'
    },
    {
      id: 12,
      price: 27000,
      engineNumber: 'EFG67890',
      model: 'Land Cruiser',
      productionYear: 2023,
      imageKey: 'toyota_land_cruiser_2023.png',
      engineImg: 'toyota-land-cruiser-engine-2023.jpg'
    },
    {
      id: 13,
      price: 33000,
      engineNumber: 'HIJ54321',
      model: 'Sequoia',
      productionYear: 2022,
      imageKey: 'toyota-sequoia-2022.webp',
      engineImg: 'toyota-sequoia-engine-2022.jpg'
    },
    {
      id: 14,
      price: 35000,
      engineNumber: 'KLM98765',
      model: 'Tundra',
      productionYear: 2023,
      imageKey: 'toyota-tundra-2023.webp',
      engineImg: 'toyota-tundra-2023-engine.jpg'
    },
    {
      id: 15,
      price: 28000,
      engineNumber: 'NOP45678',
      model: 'Venza',
      productionYear: 2022,
      imageKey: 'Toyota_Venza_2022.png',
      engineImg: 'toyota-venza-engine-2022.jpg'
    },
  ]
  

export default function page() {
  return (
    <main className='pt-0'>
    <div className='grid grid-cols-3 bg-black px-5'>
        {toyotaCars.map(car =>(
            <article className='hover:bg-blue-200 hover:shadow w-[200px] rounded-xl text-red-700 text-lg'>
              <Link href={`/cars/${car.id}`}>
                <Image src={`/${car.imageKey}`} alt={car.model} height={250} width={250}/>
                <h2>{car.model}</h2>
                <h2>{car.productionYear}</h2>
                <h2>{car.price}</h2>
              </Link>
            </article>
        ))}
    </div>
    </main>
  )
}
