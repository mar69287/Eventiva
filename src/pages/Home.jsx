import { useNavigate } from "react-router-dom"
import { useAuth } from "../utilities/AuthContext"
import { useEffect } from "react"
import HeroContainer from "../components/HeroContainer"
import AboutCard from "../components/AboutCard"

const Home = () => {
  const navigate = useNavigate()
  const {user} = useAuth()

  useEffect(() => {
      if (user) {
          navigate('/dashboard')
      }
  })
  return (
    <div className="bg-[#f2decb] flex flex-col justify-center items-center">
      <HeroContainer />
      <AboutCard />
    </div>
  )
}

export default Home