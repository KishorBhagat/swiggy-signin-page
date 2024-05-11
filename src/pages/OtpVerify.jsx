import { useLocation } from "react-router-dom"
import OtpInputBoxes from "../components/OtpInputBoxes"

function OtpVerify() {
  const location = useLocation()

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 mb-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Verify Phone
        </h2>
        <p className="text-sm text-gray-500">OTP sent to {location.state.phone}</p>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <div>
            <OtpInputBoxes />
          </div>

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