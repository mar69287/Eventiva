import { Link, useNavigate } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 
import { useAuth } from '../../utilities/AuthContext'

export default function NavBar() {
    const navigate = useNavigate()
    const {user} = useAuth()

    const logoutClick = () => {
        navigate('/Auth')
    }

    return (
        <nav
            style={{
                backgroundColor: '#333',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 3,
                height:'70px',
                padding: '0 15px',
                display: "flex",
                justifyContent: 'space-between',
                alignItems: 'center',
                color: 'white'
            }}
        >
            {user ? (
                <>
                    <Link to="/" style={{color:'white'}}>Home</Link> 
                    <button onClick={logoutClick} className="btn">Logout</button>
                </>
            ) : (
                <Link to={'/auth'}>Auth</Link>
            )}
        </nav>
    )
}