import { createContext, useState, useEffect, useContext } from "react";
import { account } from '../appwriteConfig'
// import * as userService from './users'

const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)

    useEffect(() => {
        setLoading(false)
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

    const logoutUser = () => {

    }

    const registerUser = (userInfo) => {

    }

    const checkUserStatus = () => {}

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
