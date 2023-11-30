import React from 'react'

const AboutCard = () => {
  return (
    <section className='w-full bg-quaternary px-5 py-20 flex items-center justify-center'>
        <div className='max-w-6xl flex flex-col justify-center items-center'>
            <h1 className='text-[#f2decb] text-xl mb-2 text-center uppercase font-medium'>Love hanging out with friends and family?</h1>
            <h1 className='text-accent2 text-3xl font-bold uppercase text-center'>Organize group adventures, hassle free!</h1>
            <p className='text-center text-[#f2decb] mt-7 font-medium text-lg'>With Eventiva, you can engage your friends in dynamic polls to shape crucial aspects of your upcoming group events - from planning a delightful meal together to a sun-soaked beach day.
                Eventiva let's you curate the perfect group outing. Say goodbye to long group texts and email threads. You can now plan your events with AI-driven search functionalities, ensuring you never run out of ideas and tips. With Eventiva, group outings become a smooth experience, making every opportunity a memorable adventure
                with your favorite people.
            </p>
            <button className='uppercase mt-10 text-quaternary bg-[#f2decb] px-10 py-3 rounded-full text-xl font-bold'>explore with ai</button>
        </div>
    </section>
  )
}

export default AboutCard