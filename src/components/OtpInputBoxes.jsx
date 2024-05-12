import OtpInput from 'react-otp-input';

function OtpInputBoxes({otp, setOtp}) {
  
  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={6}
      inputType='number'
      shouldAutoFocus
      renderInput={(props) => <input {...props} className={`mx-auto md:mx-2 box-content h-10 w-10 px-3 text-lg border-b-2 border-${props.value?"orange-500":"gray-400"} font-semibold focus:border-orange-500 focus:outline-none spin-button-none`}/>}
    />
  )
}

export default OtpInputBoxes