import React, { useState } from 'react'
import LoginForm from './AuthForms/LoginForm'
import SignupForm from './AuthForms/SignUpForm'

const HeroContainer = () => {
    const [showLogin, setShowLogin] = useState(true)
  return (
    <section className='max-w-6xl w-full flex flex-row items-center justify-center'>
        <div className='flex-1 flex flex-col justify-start'>
            <h1 className='text-tsecondary text-4xl mb-5'>Welcome to</h1>
            <h1 className='text-tprimary text-6xl logo'>EVENTIVA</h1>
            <div className="w-3/4">
                {showLogin ? <LoginForm /> : <SignupForm />}
                <div className='flex flex-row items-center gap-4'>
                    <div className='border-b-2 border-b-tertiary flex-1'></div>
                    <text>or</text>
                    <div className='border-b-2 border-b-tertiary flex-1'></div>
                </div>
                <div className='flex flex-col gap-0 mt-4'>
                    <text className='text-center text-tsecondary'>Use Demo</text>
                    <text className='text-center text-tsecondary'>Email: user@user.com - Password: user1234</text>
                </div>
                <button className='w-full mt-3 rounded-full border-2 border-primary p-2 text-tprimary font-bold' onClick={() => setShowLogin(!showLogin)}>New to Eventiva? Join now</button>
            </div>
        </div>
        <div className='h-max bg-primary flex-1 '>
            hello
        </div>
    </section>
  )
}

export default HeroContainer