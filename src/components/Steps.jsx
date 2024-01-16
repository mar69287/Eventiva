import React from 'react'

const Steps = ({title}) => {
  return (
    <div className='flex justify-center w-full items-start gap-2 px-2 mb-6'>
        <div className='flex flex-col sm:flex-row justify-center items-center gap-2 w-14 sm:w-max'>
            <div className='h-6 w-6 text-xs font-semibold rounded-full border-2 border-ttertiary bg-primary text-white flex justify-center items-center'>
                1
            </div>
            <p className="text-xs md:text-sm text-center font-bold">Suggest {title}</p>
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
            <p className="text-xs md:text-sm text-center font-bold">Finalize {title}</p>
        </div>
    </div>
  )
}

export default Steps