import { LuCalendarRange } from "react-icons/lu";
import { BsPinMap } from "react-icons/bs";
import { TbBeach } from "react-icons/tb";
import TabComponentHeader from "./TabComponentHeader";

const Overview = ({title}) => {
  return (
    <>
        <div className='w-full max-w-3xl mx-auto px-3 py-6 md:px-8 flex justify-center items-center flex-col gap-3'>
            <TabComponentHeader title={'Event Details'} description={'Collaborate with your group and keep track of decisions for this trip.'} />
            {eventFeatures.map((feature, index) => (
                <FeatureContainers key={index} {...feature} />
            ))}
            <div className="border-b-[1px] border-primary w-full max-w-3xl mt-4"></div>
        </div>
        <div className="flex flex-col justify-center items-center w-full max-w-3xl mx-auto">
            <h1 className="font-bold text-[1.3rem] md:text-2xl text-center">The Who</h1>
            <p className="text-base md:text-lg text-center">Here's who joined this trip so far.</p>
            <div className="flex flex-col w-[8rem] justify-center items-center my-5 gap-3">
                <div className="flex w-full gap-4 justify-start items-center">
                    <div className="rounded-full h-9 w-9 bg-primary"></div>
                    <p className="text-sm md:text-base text-center">Marco R.</p>
                </div>
                <div className="flex w-full gap-4 justify-start items-center">
                    <div className="rounded-full h-9 w-9 bg-primary"></div>
                    <p className="text-sm md:text-base text-center">Carla P.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Overview

const FeatureContainers = ({ title, button, description, icon }) => {
    return (
        <div className="rounded-lg w-full max-w-lg border-[1px] bg-[#f7bca8aa] border-ttertiary flex flex-col justify-center items-center px-2 py-3 gap-2">
            <div className="flex w-full justify-between items-center">
                <div className="flex-1 flex justify-start flex-col items-start">
                    <h1 className="text-tsecondary font-bold text-left mb-2">{title}</h1>
                    <div className="rounded-full text-sm px-2 py-1 border-2 border-primary text-tprimary">
                        {button}
                    </div>
                </div>
                <div className="text-[3rem] text-quaternary">
                    {icon}
                </div>
            </div>
            <div className="w-full">
                <p className="text-ellipsis text-sm overflow-hidden whitespace-nowrap">
                    {description}
                </p>
            </div>
        </div>
    )
}

const eventFeatures = [
    {
        title: 'Date',
        button: 'Add Suggestions',
        description: 'Pick a date that works for the group.',
        icon: <LuCalendarRange />
    },
    {
        title: 'Activity',
        button: 'Add Suggestions',
        description: 'Make your trip memorable with the perfect group activity.',
        icon: <TbBeach />
    },
    {
        title: 'Location',
        button: 'Add Suggestions',
        description: 'Select the best destination for your activity.',
        icon: <BsPinMap />
    },
]