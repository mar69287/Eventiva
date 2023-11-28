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
    <div>
      <h1>Home Page</h1>
    </div>
  )
}

export default Home