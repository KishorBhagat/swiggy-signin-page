import OtpInput from 'react-otp-input';

function OtpInputBoxes({numInp=6, otp, setOtp}) {
  
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={numInp}
      inputType='number'
      shouldAutoFocus
      renderInput={(props, idx) => <input {...props} className={`mx-auto ${idx===0 && "ml-0"} ${idx===numInp-1 && "mr-0"} md:mx-2 box-content h-10 w-10 px-3 text-lg border-b-2 border-${props.value?"orange-500":"gray-400"} font-semibold focus:border-orange-500 focus:outline-none spin-button-none`}/>}
    />
  )
}

export default OtpInputBoxes