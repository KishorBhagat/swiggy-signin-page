import { useEffect, useState } from 'react';
import OtpInput from 'react-otp-input';

function OtpInputBoxes({otp, setOtp}) {

  useEffect(() =>{
    console.log(otp)
  }, [otp])
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
    //   renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} className='mx-auto box-content h-10 w-10 px-3 text-lg border-b-2 border-gray-300 font-semibold focus:border-orange-500 focus:outline-none'/>}
    />
  )
}

export default OtpInputBoxes