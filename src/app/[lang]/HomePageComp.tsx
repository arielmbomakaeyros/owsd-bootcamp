"use client"
import React from 'react'
import { useForm } from 'react-hook-form';
import logo from "../../../public/images/logo.png"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Parteners from './components/Parteners';
import SignUpForm from './components/form/SignUpForm';

const HomePageComp = () => {

    const router = useRouter ()
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-col gap-4 mb-4'>
            <div className=" h-[200px]  w-full flex">
                {/* <div>
                </div> */}
                    <Image
                        onClick={() => {
                            router.push("https://kaeyros-analytics.com")
                        }}
                        className="cursor-pointer w-[200px] m-auto"
                        src={ logo }
                        alt="Kaeyros-analytics logo"
                    />
            </div>
            <div className='flex justify-center'>
                <h1 style={{
                    fontFamily: "visby-bold"
                }} className='text-center text-black text-[2rem]'>Kindly Put you contacts details</h1>
            </div>
        </div>
        
        <div className='flex flex-col border border-white rounded-3xl justify-center gap-20 mt-[2rem] w-[100%] sm:w-[80%] lg:w-[50%] bg-slate-100'>
            <SignUpForm />
        </div>
        <div className='sticky flex justify-center bottom-0 lg:relative w-[100%]  lg:bg-transparent'>
            <Parteners /> 
        </div>
        {/* <ClientForm /> */}
    </div>
  )
}

export default HomePageComp