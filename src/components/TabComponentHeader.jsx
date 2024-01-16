import React from 'react'

const TabComponentHeader = ({ title, description}) => {
  return (
    <div className="flex justify-center items-center flex-col gap-2 text-tsecondary mb-5">
        <h1 className="font-bold text-[1.3rem] md:text-2xl">{title}</h1>
        <p className="text-base md:text-lg text-center">{description}</p>
    </div>
  )
}

export default TabComponentHeader