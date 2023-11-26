import './App.css';
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage';
import NavBar from '../../components/NavBar/NavBar'
import Home from '../Home';
import PrivateRoutes from '../../utilities/PrivateRoutes';
import { AuthProvider } from '../../utilities/AuthContext';

export default function App() {

  return (
    <main className="App">
          <AuthProvider>
            <NavBar/>  
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Home />} />
              </Route>
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </AuthProvider>

    </main>
  );
}


