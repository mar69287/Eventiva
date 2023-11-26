import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { getUser } from '../../utilities/users-service'
import AuthPage from '../AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home';
import PrivateRoutes from '../../utilities/PrivateRoutes';

export default function App() {
  const [ user, setUser ] = useState(getUser())

  return (
    <main className="App">

          <NavBar />
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/" element={<Home />} />
            </Route>
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          </Routes>

    </main>
  );
}


