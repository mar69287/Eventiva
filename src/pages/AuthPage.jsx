import { useEffect } from 'react'
import SignUpForm from '../components/AuthForms/SignUpForm'
import LoginForm from '../components/AuthForms/LoginForm'
import { useAuth } from '../utilities/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function AuthPage() {
    const navigate = useNavigate()
    const {user} = useAuth()

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    })

    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm  />
            <LoginForm />
        </main>
    )
}