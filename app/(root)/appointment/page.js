"use client"
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect } from 'react'
import img from './doctor.png'
import DoctorList from './card'
import axios from 'axios'

const Appointment = () => {

    const doctorList = [{
        "Name": "Tarun Kumar",
        "Year_of_Experience": "12",
        "Address": "12,9/c,Bokaro",
        "id": "1234",
    },
    {
        "Name": "Tarun Kumar",
        "Year_of_Experience": "12",
        "Address": "12,9/c,Bokaro",
        "id": "1234",
    },
    {
        "Name": "Tarun Kumar",
        "Year_of_Experience": "12",
        "Address": "12,9/c,Bokaro",
        "id": "1234",
    },
    {
        "Name": "Tarun Kumar",
        "Year_of_Experience": "12",
        "Address": "12,9/c,Bokaro",
        "id": "1234",
    },
    {
        "Name": "Tarun Kumar",
        "Year_of_Experience": "12",
        "Address": "12,9/c,Bokaro",
        "id": "1234",
    },
    {
        "Name": "Tarun Kumar",
        "Year_of_Experience": "12",
        "Address": "12,9/c,Bokaro",
        "id": "1234",
    },

    ]
    return (
        <>
            <section>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                        <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                            <Image
                                alt=""
                                src={img}
                                width={800}
                                height={800}
                                className="absolute inset-0 h-full
              rounded-3xl 
              w-full object-cover"
                            />
                        </div>

                        <div className="lg:py-24">
                            <h2 className="text-4xl font-bold sm:text-4xl">
                                Find & Book
                                <span className='text-primary'> Appointment </span>
                                with your Fav
                                <span className='text-primary '> Doctors</span></h2>

                            <p className="mt-4 text-gray-500">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque tenetur quis
                                eius quos ea neque sunt, accusantium soluta minus veniam tempora deserunt? Molestiae eius
                                quidem quam repellat.
                            </p>

                            <Button className="mt-10 bg-blue-500 hover:bg-blue-700 text-white" variant="new_Button" >Explore Now</Button>
                        </div>
                    </div>
                </div>
            </section>
            <DoctorList doctorList={doctorList} />
        </>
    )
}

export default Appointment