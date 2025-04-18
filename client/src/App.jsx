import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"
import Dashboard from "./pages/Dashboard"
import Projects from "./pages/Projects"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import About from './pages/About';
import Header from './components/Header';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        

      </Routes>

      
    </BrowserRouter>
  )
}

export default App





