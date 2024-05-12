import { useLocation, useNavigate } from "react-router-dom"
import OtpInputBoxes from "../components/OtpInputBoxes"
import { useState } from "react";

function OtpVerify() {
  const location = useLocation();
  const navigate = useNavigate();

  const [otp, setOtp] = useState('');
  const [error, setError] = useState("");

  const verifyOtp = async (e) => {
    e.preventDefault();
    console.log(window.confirmationResult)
    try {
      const data = await window.confirmationResult.confirm(otp);
      console.log(data)
      navigate('/login');
    } catch (error) {
      console.log(error)
      setError("INVALID OTP - PLEASE TRY AGAIN")
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col">
            <div className="bg-zinc-100 md:bg-white px-5 py-5 sm:mx-auto w-full">
                <h2 className="mt-20 text-xl font-bold md:text-center leading-9 tracking-tight text-gray-900">
                    VERIFY DETAILS
                </h2>
                <p className="md:text-center text-sm">OTP sent to {location.state.phone}</p>
            </div>

            {error && <p className="px-5 py-5 pb-0 text-red-500 text-sm md:text-center">{error}</p>}

            <form className="px-5 py-5 md:w-500 md:flex flex-col" onSubmit={verifyOtp}>
                <div className="otp-input-container">
                    <OtpInputBoxes otp={otp} setOtp={setOtp}/>
                </div>
                <div className="md:flex justify-center">
                  <button
                      type="submit"
                      className="mt-10 bg-orange-500 flex w-full md:w-64 justify-center px-3 py-4 font-semibold text-white"
                  >
                      VERIFY
                  </button>
                </div>
            </form>
        </div>
  )
}

export default OtpVerify