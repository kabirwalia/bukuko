import React, { useState } from "react";
// import {CognitoUserAttribute } from "amazon-cognito-identity-js";
import userPool from "../userPool";
import UserVerification from "./UserVerification";
// import { CognitoUser } from "amazon-cognito-identity-js";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showVerification, setShowVerification]= useState(false);
    
    

    const onSubmit = (event) => {
        event.preventDefault();

        userPool.signUp(email, password, [], null, (err,data)=>{
            if (err){
                console.error(err);
            }
            console.log(data);
            setShowVerification(true);
        })

    };

    //check this function if it is used somewhere or not nor delete it 
    const handleVerificationSuccess = () => {
        // This function will be called when OTP verification is successful
    // You can close the modal, navigate to login, or perform other actions here

        setShowVerification(false);
          // Example: Redirect to login
    // window.location.href = "/login";
    }

    // const OTPVerification = () => {
    //     const [otp, setOTP] = useState('');
    //     const [verificationError, setVerification] = useState('');

    //     const handleVerification = () => {
    //         const user = new CognitoUser ({
    //             Username: email,
    //             Pool: userPool,
    //         });
    //         user.confirmRegistration(otp, true, (err, result) => {
    //             if(err){
    //                 console.error(err);
    //                 setVerification('Invalid OTP. Please Try again')
    //             }
    //         })
    //     }

    // }
    
    return (
        <div>
            <form onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
           <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="text" 
            id="email" 
          />
          <label htmlFor="password">Password</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password" 
            id="password" 
          />
          <button type="submit">Sign Up</button>
          </form>
          {/* Display OTP verification component when showVerification is true */}
          {showVerification &&(
            <UserVerification email={email} onVerificationSuccess={handleVerificationSuccess} /> 
            )}
          
        
        </div>
    )
}
export default Signup;