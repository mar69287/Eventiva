import { Routes, Route } from 'react-router-dom'
import Home from './Home';
import PrivateRoutes from '../utilities/PrivateRoutes';
import { AuthProvider } from '../utilities/AuthContext';
import Dashboard from './Dashboard';
import EventDetail from './EventDetail';

export default function App() {

  return (
          <AuthProvider>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/events" element={<EventDetail />} />
              </Route>
              <Route path='/' element={<Home />} />
            </Routes>
          </AuthProvider>
  );
}


