import React, { useState } from 'react';
import userPool from '../userPool';
import { CognitoUser } from 'amazon-cognito-identity-js';

const UserVerification = ({ email, onVerificationSuccess }) => {
  const [otp, setOtp] = useState('');
  const [verificationError, setVerificationError] = useState('');

  const handleVerification = async () => {
    try {
      const userData = {
        Username: email,
        Pool: userPool,
      };
      const cognitoUser = new CognitoUser(userData);

      // Confirm the registration with the OTP
      cognitoUser.confirmRegistration(otp, true, (err, result) => {
        if (err) {
          console.error('Verification failed', err);
          setVerificationError('Invalid OTP. Please try again.');
        } else {
          console.log('Verification successful', result);
          onVerificationSuccess();
        }
      });
    } catch (error) {
      console.error('Verification failed', error);
      setVerificationError(error.message || 'Verification failed');
    }
  };


  return (
    <div>
      <h2>OTP Verification</h2>
      <p>Enter the OTP sent to your email: {email}</p>
      <input
        type="text"
        placeholder="OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerification}>Verify OTP</button>
      {verificationError && <p>{verificationError}</p>}
    </div>
  );
};

export default UserVerification;



















  //     const cognitoUser = new CognitoUser(userData);

  //     const authenticationDetails = new AuthenticationDetails({
  //       Username: email,
  //       Password: otp, // Use OTP as the password for verification
  //     });

  //     cognitoUser.authenticateUser(authenticationDetails, {
  //       onSuccess: (session) => {
  //         console.log('Authentication successful', session);
  //         // Call the onVerificationSuccess callback to notify the parent component
  //         onVerificationSuccess();
  //       },
  //       onFailure: (err) => {
  //         console.error('Authentication failed', err);
  //         setVerificationError('Invalid OTP. Please try again.');
  //       },
  //     });
  //   } catch (error) {
  //     console.error('Verification failed', error);
  //     setVerificationError(error.message || 'Verification failed');
  //   }
  // };