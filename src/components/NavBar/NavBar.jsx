import { Link } from 'react-router-dom'
import { useAuth } from '../../utilities/AuthContext'
import './Navbar.css'

export default function NavBar() {
    const {user, logoutUser} = useAuth()

    return (
        <nav
            className='bg-white px-10 fixed w-full top-0 z-3 left-0 h-[70px] flex justify-between items-center shadow-[0_0_5px_0_rgba(0,0,0,0.3)]'
        >

            {user ? (
                <>
                    <Link to="/dashboard" style={{color:'white'}}>Dashboard</Link> 
                    <button onClick={logoutUser} className="btn">Logout</button>
                </>
            ) : (
                <>
                    <Link to={'/'} className='logo'>EVENTIVA</Link>
                    <div className="justify-center items-center space-x-5">
                        <Link to={'/login'}>Log in</Link>
                        <Link to={'/signup'}>Sign up</Link>
                    </div>
                </>
            )}
        </nav>
    )
}