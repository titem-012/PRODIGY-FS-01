import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import UserPage from './pages/UserPage'
import { Toaster } from 'react-hot-toast'
import { useAuthContext } from './context/authContext'

function App() {
  const {isAuth} = useAuthContext();
  return (
    // <LoginPage />
    // <SignUpPage />
<>
  <Toaster/>
    <Router>
      <Routes>
        <Route path="/login" element={isAuth ? <Navigate to="/" /> : <LoginPage />} />
        <Route path="/signUp" element={isAuth ? <Navigate to="/" /> :<SignUpPage />} />
        <Route path="/" element={isAuth ? <UserPage />: <Navigate to="/login" />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
