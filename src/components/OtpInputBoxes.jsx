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
      renderInput={(props) => <input {...props} className='mx-auto box-content h-10 w-10 px-3 text-lg rounded-md border-2 focus:outline-indigo-600'/>}
    />
  )
}

export default OtpInputBoxes