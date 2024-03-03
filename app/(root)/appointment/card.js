import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import img from './doctor.png'

function DoctorList({ doctorList}) {
    // console.log(doctorList)
    return (
        <div className='mb-10 px-8'>
            <h2 className='font-bold text-xl'>
                {'Popular Doctors'}</h2>

            <div className='grid grid-cols-2 
        sm:grid-cols-2 md:grid-cols-3
        gap-7 mt-4
         lg:grid-cols-4'>
                {doctorList.length > 0 ? doctorList.map((doctor, index) => (
                    <div className='border-[1px] rounded-lg p-3
                cursor-pointer hover:border-primary
                hover:shadow-sm transition-all ease-in-out'
                        key={index}>
                        <Image src={img}
                            alt='doctor'
                            width={500}
                            height={200}
                            className='h-[200px] w-full object-cover rounded-lg'
                        />
                        <div className='mt-3 items-baseline flex flex-col gap-1'>
                            {/* <h2 className='text-[10px] bg-blue-100 p-1 rounded-full
                        px-2 text-primary'>{doctor.Name}</h2> */}
                            <h2 className='font-bold'>{doctor.Name}</h2>
                            <h2 className='text-primary text-sm'>{doctor.Year_of_Experience}</h2>
                            <h2 className='text-gray-500 text-sm'>{doctor.Address}</h2>
                            <Link href={'/details/' + doctor.id} className='w-full'>
                                <h2 className='p-2 px-3 border-[1px] border-primary
                        text-primary rounded-full w-full text-center
                        text-[11px] mt-2
                        cursor-pointer 
                        hover:bg-primary hover:text-white'>Book Now</h2>
                            </Link>
                        </div>
                    </div>
                // console.log(doctor)
                ))
                    :
                    <div>NO DATA</div>

                }
            </div>
        </div>
    )
}

export default DoctorList