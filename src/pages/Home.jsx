import { useNavigate } from "react-router-dom"
import { useAuth } from "../utilities/AuthContext"
import { useEffect } from "react"
import HeroContainer from "../components/HeroContainer"

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
      <HeroContainer />
    </div>
  )
}

export default Home