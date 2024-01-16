import React from 'react'
import Steps from './Steps'
import TabComponentHeader from './TabComponentHeader'

const LocationConatiner = () => {
  return (
    <div className='w-full max-w-4xl mx-auto px-3 py-6 md:px-8 flex justify-center items-center flex-col gap-3'>
        <TabComponentHeader title={'Locations'} description={'Suggest new locations using the "+ Add" button below.'} />
        <Steps title={'locations'} />
    </div>
  )
}

export default LocationConatiner