import React, { useState } from 'react'
import LoginForm from './AuthForms/LoginForm'
import SignupForm from './AuthForms/SignUpForm'
import heroImg from '../assets/layered-hero.png'

const HeroContainer = () => {
    const [showLogin, setShowLogin] = useState(true)
  return (
    <section className='max-w-6xl p-5 max-[860px]:flex-col w-full flex flex-row items-center justify-center'>
        <div className='flex-1 flex flex-col justify-start items-center max-[860px]:w-full'>
            <h1 className='text-tsecondary text-4xl max-sm:text-3xl mb-5'>Welcome to</h1>
            <h1 className='text-tprimary text-6xl logo max-sm:text-3xl max-md:text-4xl'>EVENTIVA</h1>
            <div className="w-3/4 max-[860px]:mb-20 max-sm:w-5/6">
                {showLogin ? <LoginForm /> : <SignupForm />}
                <div className='flex flex-row items-center gap-4'>
                    <div className='border-b-2 border-b-tertiary flex-1'></div>
                    <text>or</text>
                    <div className='border-b-2 border-b-tertiary flex-1'></div>
                </div>
                {showLogin && (
                    <div className='flex flex-col gap-0 mt-4'>
                        <text className='text-center text-tsecondary'>Use Demo</text>
                        <text className='text-center text-tsecondary'>Email: user@user.com - Password: user1234</text>
                    </div>
                )}
                <button className='w-full mt-3 rounded-full border-2 border-primary p-2 text-tprimary font-bold' onClick={() => setShowLogin(!showLogin)}>{showLogin ? 'New to Eventiva? Join now' : 'Already Registered? Login'}</button>
            </div>
        </div>
        <div className='flex-1 flex flex-col justify-center items-end relative'>
            {/* <h1 className='text-tsecondary text-xl mb-5 text-center uppercase'>Love hanging out with friends and family?</h1>
            <h1 className='text-tprimary text-3xl uppercase text-right'>Organize group adventures, <br/>  hassle free!</h1> */}
            <img src={heroImg} className="max-w-full h-auto max-[860px]:max-h-[30rem] max-sm:max-h-[20rem]" alt="hero"/>
        </div>
    </section>
  )
}

export default HeroContainer