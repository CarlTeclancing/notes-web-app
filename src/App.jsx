
import './App.css'
import Dashboard from './pages/dashboard';
import Login from './pages/login/Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import { useContext } from 'react';
import './style/Components.css'
import './style/media.components.css'

function App() {

  const {currentUser} = useContext(AuthContext)

  const RequireAuth = ({ children }) => {
    return currentUser ? (children) : <Navigate to="/login" />
  }

  console.table(currentUser)

  return (
    <>
      <div className='container'>
        <Router>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
