import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">

          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          </Routes>

    </main>
  );
}


