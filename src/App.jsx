import './App.css'
import OtpVerify from './pages/OtpVerify'
import Signup from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<Signup />} />
          <Route path='/otp-verify' element={<OtpVerify />} />
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
