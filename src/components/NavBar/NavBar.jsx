import { Link, useNavigate } from 'react-router-dom'
import * as userService from '../../utilities/users-service' 

export default function NavBar() {
    const navigate = useNavigate()

    function handleLogOut() {
        navigate('/auth')
        // setUser(null)
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
            <Link to="/" style={{color:'white'}}>Home</Link> 
            <Link to="/auth" style={{color:'white'}}>Log Out</Link>
        </nav>
    )
}