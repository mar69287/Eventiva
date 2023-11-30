import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import { BsPlusLg } from "react-icons/bs";

const Dashboard = () => {
  const [upcoming, setUpcoming] = useState(false)

  return (
    <div className='min-h-[100vh] pt-[70px] flex justify-start items-center flex-col relative'>
      <NavBar />
      <div className='w-full flex flex-row shadow-[0_0_5px_0_rgba(0,0,0,0.3)]'>
        <div onClick={() => setUpcoming(true)} className='relative flex-1 flex flex-col justify-center items-center p-3 border-3 border-primary hover:shadow-[inset_6px_6px_6px_6px_rgb(0,0,0,0.04)] cursor-pointer'>
          <p>Upcoming</p>  
          {upcoming && (
            <div className='w-[10rem] border-b-4 border-ttertiary h-5 absolute bottom-0 left-0 right-0 m-auto'/>
          )}
        </div>
        <div onClick={() => setUpcoming(false)} className='relative flex-1 flex flex-col justify-center items-center p-3 border-3 border-primary hover:shadow-[inset_6px_6px_6px_6px_rgb(0,0,0,0.04)] cursor-pointer'>
          <p>Past</p>
          {!upcoming && (
            <div className='w-[10rem] border-b-4 border-ttertiary h-5 absolute bottom-0 left-0 right-0 m-auto'/>
          )}
        </div>
      </div>
      <div className='w-full max-w-3xl relative'>
        <div className="flex justify-between items-center w-full pt-10">
          <h1 className='text-2xl font-semibold'>My {upcoming ? 'upcoming' : 'past'} events</h1>
          <div className='shadow-[0_0_5px_0_rgba(0,0,0,0.3)] rounded-full text-xl p-2'><BsPlusLg /></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard