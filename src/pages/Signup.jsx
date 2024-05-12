import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { useEffect, useRef, useState } from "react";
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
            recaptchaVerifier.render();
            const confirmation = await signInWithPhoneNumber(authentication, '+91' + phone, recaptchaVerifier);
            window.confirmationResult = confirmation;
            console.log(confirmation)
            navigate(`/otp-verify`, { state: { phone } });
        } catch (error) {
            console.log(error);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendOtp();
    }

    const inputRef = useRef(null);
    const countrySpanRef = useRef(null);

    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = ()=> {
        setIsFocused(true);
        inputRef.current.placeholder = '';
    }
    const handleBlur = ()=> {
        setIsFocused(false);
        inputRef.current.placeholder = 'PHONE NUMBER';
    }
    
    useEffect(() => {
        if(phone || !phone && isFocused) {
            countrySpanRef.current.style.opacity = "1";
            inputRef.current.classList.add('pl-10');
        }
        else if(!phone && !isFocused){
            countrySpanRef.current.style.opacity = "0";
            inputRef.current.classList.remove('pl-10');
        }
    }, [phone, isFocused])

    return (
        <div className="flex min-h-full flex-1 flex-col md:items-center">
            <div className="bg-zinc-100 md:bg-white px-5 py-5 sm:mx-auto">
                <h2 className="mt-20 text-xl font-bold md:text-center leading-9 tracking-tight text-gray-900">
                    SIGN UP
                </h2>
                <p className="md:text-center text-sm  text-gray-400">Create an account with the new phone number</p>
            </div>

            <form className="px-5 py-5 md:w-96" onSubmit={handleSubmit}>
                <div>
                    <div className="group mt-2 relative ">
                        <input 
                            readOnly
                            value={"+91 - "}
                            ref={countrySpanRef} 
                            className="w-10 bg-transparent flex items-center py-3 font-semibold absolute focus:outline-none"
                        />
                        <input 
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            ref={inputRef}
                            type="number" 
                            name="phone" 
                            value={phone}
                            onChange={handlePhoneInputChange}
                            placeholder="PHONE NUMBER" 
                            className="py-3 block w-full appearance-none focus:outline-none bg-transparent border-b border-gray-400 font-semibold spin-button-none" 
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