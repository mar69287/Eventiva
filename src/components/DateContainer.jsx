import { LuCalendarRange } from "react-icons/lu";
import { MdAdd } from "react-icons/md";


const DateContainer = () => {
  return (
    <div className='w-full max-w-4xl mx-auto px-3 py-6 md:px-8 flex justify-center items-center flex-col gap-3'>
        <div className="flex justify-center items-center flex-col gap-2 text-tsecondary mb-5">
            <h1 className="font-bold text-[1.3rem] md:text-2xl">Dates</h1>
            <p className="text-base md:text-lg text-center">Suggest new dates using the "+ Add" button below.</p>
        </div>
        <div className='flex justify-center w-full items-start gap-2 px-2 mb-6'>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-2 w-14 sm:w-max'>
                <div className='h-6 w-6 text-xs font-semibold rounded-full border-2 border-ttertiary bg-primary text-white flex justify-center items-center'>
                    1
                </div>
                <p className="text-xs md:text-sm text-center font-bold">Suggest dates</p>
            </div>
            <div className='border-[1px] border-stone-300 flex-1 mt-3'></div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-2 w-14 sm:w-max'>
                <div className='h-6 w-6 text-xs font-semibold rounded-full border-2 border-ttertiary bg-primary text-white flex justify-center items-center'>
                    2
                </div>
                <p className="text-xs md:text-sm text-center font-bold">Vote</p>
            </div>
            <div className='border-[1px] border-stone-300 flex-1 mt-3'></div>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-2 w-14 sm:w-max'>
                <div className='h-6 w-6 text-xs font-semibold rounded-full border-2 border-ttertiary bg-primary text-white flex justify-center items-center'>
                    3
                </div>
                <p className="text-xs md:text-sm text-center font-bold">Finalize dates</p>
            </div>
        </div>
        <div className="text-[8rem] md:text-[8.5rem] text-quaternary mb-2">
            <LuCalendarRange />
        </div>
        <div className='bg-tprimary gap-2 rounded py-2 px-6 flex justify-center items-center text-white font-semibold sm:text-lg'>
            <MdAdd />
            <p className=''>Add</p>
        </div>
        <div className="border-b-[1px] border-primary w-full max-w-3xl mt-4" />
        <div className="flex justify-center items-center flex-col gap-2 text-tsecondary mb-0 w-full max-w-3xl">
            <h1 className="font-bold text-[1.3rem] md:text-2xl text-center ">Steps</h1>
            <ol className="list-decimal flex flex-col justify-center items-center">
                <li className="text-sm md:text-base text-left">Add dates</li>
                <li className="text-sm md:text-base text-left">Get your group to vote</li>
                <li className="text-sm md:text-base text-left">Finalize and move to location</li>
            </ol>
        </div>
        <button className='bg-tprimary gap-2 rounded py-2 px-6 flex justify-center items-center text-white font-semibold sm:text-lg'>
            Open Voting
        </button>
    </div>
  )
}

export default DateContainer