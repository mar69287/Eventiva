import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import { BsPlusLg } from "react-icons/bs";
import travel from '../assets/travel.png'
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle } from "react-icons/fi";
import CreateEventModal from '../components/CreateEventModal';
import ExampleComponent from '../components/ExampleComponent';

const Dashboard = () => {
  const [upcoming, setUpcoming] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='min-h-[100vh] pt-[70px] flex justify-start z-0 items-center flex-col relative'>
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
      <div className='w-full max-w-3xl relative flex flex-col justify-center items-center px-2'>
        <div className="flex justify-between items-center w-full pt-10">
          <h1 className='text-2xl font-semibold'>My {upcoming ? 'upcoming' : 'past'} events</h1>
          <div className='shadow-[0_0_5px_0_rgba(0,0,0,0.3)] rounded-full text-xl p-2' onClick={() => setIsOpen(true)}><BsPlusLg /></div>
        </div>
        <img src={travel} className='h-52 sm:h-72 my-10' alt='people traveling'/>
        <h1 className='text-md sm:text-lg font-semibold text-center mb-6'>It is scientifically proven that the company of good friends reduces stress in life.</h1>
        <button
          onClick={() => setIsOpen(true)}
          className="bg-gradient-to-r from-primary to-quaternary  text-white mb-4 font-semibold px-4 py-2 rounded hover:opacity-90 transition-opacity"
        >
          So... lets plan your first outing!
        </button>
        <CreateEventModal isOpen={isOpen} setIsOpen={setIsOpen} />
        <ExampleComponent />
      </div>
    </div>
  )
}

export default Dashboard
