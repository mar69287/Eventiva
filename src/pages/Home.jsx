import { useNavigate } from "react-router-dom"
import { useAuth } from "../utilities/AuthContext"
import { useEffect } from "react"

const Home = () => {
  const navigate = useNavigate()
  const {user} = useAuth()

  useEffect(() => {
      if (user) {
          navigate('/dashboard')
      }
  })
  return (
    <div className="bg-[#f2decb] flex flex-col p-5 justify-center items-center">
      <h1>Home Page</h1>
    </div>
  )
}

export default Home