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
    console.log(location.state.phone)
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
            <div className="bg-zinc-100 px-5 py-5 sm:mx-auto w-full">
                <h2 className="mt-20 text-xl font-bold leading-9 tracking-tight text-gray-900">
                    VERIFY DETAILS
                </h2>
                <p>OTP sent to {location.state.phone}</p>
            </div>

            {error && <p className="px-5 py-5 pb-0 text-red-500 text-sm">{error}</p>}

            <form className="px-5 py-5" onSubmit={verifyOtp}>
                <div>
                    <OtpInputBoxes otp={otp} setOtp={setOtp}/>
                </div>

                <button
                    type="submit"
                    className="mt-10 bg-orange-500 flex w-full justify-center px-3 py-4 font-semibold text-white"
                >
                    VERIFY
                </button>
            </form>
        </div>
  )
}

export default OtpVerify