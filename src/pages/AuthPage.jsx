import SignUpForm from '../components/AuthForms/SignUpForm'
import LoginForm from '../components/AuthForms/LoginForm'

export default function AuthPage({ setUser }) {
    return (
        <main>
            <h1>AuthPage</h1>
            <SignUpForm setUser={setUser} />
            <LoginForm setUser={setUser} />
        </main>
    )
}