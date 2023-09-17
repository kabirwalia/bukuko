import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import Status from './Status';
import UserVerification from './UserVerification';


const AuthenticationFlow = () => {
  const [userEmail, setUserEmail] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);
  const [isVerification, setIsVerification] = useState(false);

  const handleSignupSuccess = (email) => {
    setUserEmail(email);
    setIsSignUp(false); // User signed up, switch to login
    setIsVerification(true); // Show verification component

  };

  const handleLoginSuccess = (email) => {
    setUserEmail(email);
    setIsVerification(true); // Show verification component
  };

  return (
    <div>
      {isVerification ? (
        <UserVerification email={userEmail} />
      ) : (
        <div>
          {isSignUp ? (
            <Signup onSignupSuccess={handleSignupSuccess} />
          ) : (
            <Login onLoginSuccess={handleLoginSuccess} />
          )}
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? 'Switch to Login' : 'Switch to Signup'}
          </button>
          <Status />
          
        </div>
      )}
    </div>
  );
};

export default AuthenticationFlow;
