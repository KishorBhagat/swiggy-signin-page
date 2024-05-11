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
    console.log(location.state.user)
    try {
      const data = await location.state.user.confirm(otp);
      console.log(data)
      // navigate('/login');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Verify Phone
        </h2>
        <p className="text-sm text-gray-500">OTP sent to {location.state.phone}</p>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={verifyOtp}>
          <div>
            <OtpInputBoxes otp={otp} setOtp={setOtp}/>
          </div>

          {error && <p className="text-center text-sm text-red-500">Invalid OTP</p>}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              VERIFY
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default OtpVerify