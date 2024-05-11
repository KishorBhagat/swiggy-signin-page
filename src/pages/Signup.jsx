import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authentication } from "../firebase/firebase-config";

function Signup() {

    const [phone, setPhone] = useState('');

    const navigate = useNavigate();

    const handlePhoneInputChange = (e) => {
        if (e.target.value.length <= 10)
            setPhone(e.target.value);
        else
            return
    }

    const sendOtp = async () => {
        try {
            const recaptchaVerifier = new RecaptchaVerifier(authentication, "sign-in-button", {
                size: 'invisible',
            });
            recaptchaVerifier.render()
            const confirmation = await signInWithPhoneNumber(authentication, '+1' + phone, recaptchaVerifier);
            window.confirmationResult = confirmation;
            navigate(`/otp-verify`, { state: { phone } });
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendOtp();
    }

    return (
        <div className="flex min-h-full flex-1 flex-col">
            <div className="bg-zinc-100 px-5 py-5 sm:mx-auto w-full">
                <h2 className="mt-20 text-xl font-bold leading-9 tracking-tight text-gray-900">
                    SIGN UP
                </h2>
                <p>Create an account with the new phone number</p>
            </div>

            <form className="px-5 py-5" onSubmit={handleSubmit}>
                <div>
                    <div className="mt-2">
                        <input 
                            type="text" 
                            name="phone" 
                            value={phone}
                            onChange={handlePhoneInputChange}
                            placeholder="PHONE NUMBER" 
                            className="py-3 block w-full appearance-none focus:outline-none bg-transparent border-b-2 font-semibold" 
                        />
                    </div>
                </div>

                <div id="recaptcha" className="flex justify-center"></div>

                <button
                    type="submit"
                    id="sign-in-button"
                    className="mt-10 bg-orange-500 flex w-full justify-center px-3 py-4 font-semibold text-white"
                >
                    CONTINUE
                </button>
            </form>

            <p className="px-5 text-justify md:text-center text-sm text-gray-500">
                By clicking, I accept the Terms & Conditions & Privacy Policy
            </p>
        </div>
    )
}

export default Signup