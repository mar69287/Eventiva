import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { IoPersonAddSharp } from "react-icons/io5";
import { FiMonitor, FiSave, FiSearch } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Overview from '../components/Overview';
import DateContainer from '../components/DateContainer';

const EventDetail = () => {
    const [selected, setSelected] = useState(0);

  return (
    <div className='min-h-[100vh] pt-[70px] flex justify-start z-0 items-center flex-col relative bg-white'>
        <NavBar />
        <div className='w-full h-[15rem] min-[600px]:h-[18rem] bg-slate-400 flex justify-center items-center relative'>
            image placeholder
            <h1 className='absolute left-6 bottom-9 text-white text-2xl font-bold min-[600px]:hidden'>Event Name</h1>
        </div>
        <div className='w-full py-5 flex justify-center items-center max-[600px]:hidden border-b-[1px] bg-quaternary  border-primary'>
            <h1 className=' text-[#f2decb] text-2xl font-bold '>Event Name</h1>
        </div>
        <div className='w-full p-2 flex flex-row justify-center bg-quaternary items-center border-b-[1px] border-primary font-semibold gap-2 min-[400px]:gap-4'>
            <div className='bg-[#f2decb] w-full min-[600px]:max-w-xs  rounded p-3 flex justify-center items-center'>
                <p className='text-tsecondary  '>Name</p>
                <div className='ml-4 bg-[#F79257] px-3 py-[1px] font-semibold rounded text-white text-sm '>Planner</div>
            </div>
            <div className='bg-tprimary w-full min-[600px]:max-w-xs gap-4 rounded p-3 flex justify-center items-center text-white '>
                <IoPersonAddSharp />
                <p className=''>Invite</p>
            </div>
        </div>
        <div className="w-full max-w-6xl mx-auto pb-2">
            <Tabs selected={selected} setSelected={setSelected} />

            <AnimatePresence mode="wait">
                {FEATURES.map((tab, index) => {
                    return selected === index ? (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        key={index}
                    >
                        <tab.Feature />
                    </motion.div>
                    ) : undefined;
                })}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default EventDetail

const Tabs = ({ selected, setSelected }) => {
    return (
      <div className='w-full justify-center items-center bg-white'>
          <div className="flex justify-start w-full  max-w-max mx-auto overflow-y-auto scroll-y">
            {FEATURES.map((tab, index) => {
              return (
                <Tab
                  key={index}
                  setSelected={setSelected}
                  selected={selected === index}
                  title={tab.title}
                  tabNum={index}
                />
              );
            })}
          </div>
      </div>
    );
  };

const Tab = ({ selected, title, setSelected, tabNum }) => {
    return (
      <div className="relative w-[8rem] font-bold ">
        <button
          onClick={() => setSelected(tabNum)}
          className="relative z-0 flex w-full flex-row items-center justify-center border-b-4 border-slate-200 bg-white p-6 transition-colors hover:bg-slate-100"
        >
          <span
            className={`text-start text-xs text-slate-600 transition-opacity md:text-center ${
              selected ? "opacity-100" : "opacity-50"
            }`}
          >
            {title}
          </span>
        </button>
        {selected && (
          <motion.span
            layoutId="tabs-features-underline"
            className="absolute bottom-0 left-0 right-0 z-10 h-[5px] bg-ttertiary"
          />
        )}
      </div>
    );
  };

const ExampleFeature = ({title}) => (
    <div className="w-full px-3 py-6 md:px-8 bg-slate-400">
      {title}
    </div>
  );
  

const FEATURES = [
    {
      title: "Overview",
      Feature: () => <Overview title={'Overview'} />,
    },
    {
      title: "Dates",
      Feature: () => <DateContainer />,
    },
    {
      title: "Location",
      Feature: () => <ExampleFeature title={'Destinations'} />,
    },
    {
      title: "Activity",
      Feature: () => <ExampleFeature title={'Activity'} />,
    },
    {
      title: "Travelers",
      Feature: () => <ExampleFeature title={'Polls'} />,
    },
    {
      title: "Polls",
      Feature: () => <ExampleFeature title={'Members'} />,
    },
    {
      title: "Notes",
      Feature: () => <ExampleFeature title={'Notes'} />,
    },
];