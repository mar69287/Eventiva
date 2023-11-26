import { createContext, useState, useEffect, useContext } from "react";
import { account } from '../appwriteConfig'
import { useNavigate } from "react-router-dom";
import { ID} from 'appwrite';
// import * as userService from './users'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)

    useEffect(() => {
        checkUserStatus()
     }, [])

    const loginUser = async (userInfo) => {
        setLoading(true)

        try {
            let response = await account.createEmailSession(
                userInfo.email,
                userInfo.password
            )
            let accountDetails = await account.get()
            setUser(accountDetails)
            setLoading(false)
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    const logoutUser = async () => {
        await account.deleteSession('current');
        setUser(null)
     }

     const registerUser = async (userInfo) => {
        setLoading(true)

        try{   
            let response = await account.create(ID.unique(), userInfo.email, userInfo.password, userInfo.name);
            await account.createEmailSession(userInfo.email, userInfo.password)
            let accountDetails = await account.get();
            setUser(accountDetails)
            setLoading(false)
            navigate('/')
        }catch(error){
            console.error(error)
        }
     }

    const checkUserStatus = async () => {
        try{
            const cookieFallbackToken = localStorage.getItem('cookieFallback');
            if (cookieFallbackToken.length>2) {
                let accountDetails = await account.get();
                setUser(accountDetails)
            }
        }catch(error){
            console.error('Error during check user status:', error);
        }
        setLoading(false)
    }

    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus
    }

    return(
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=> {return useContext(AuthContext)}
export default AuthContext;
