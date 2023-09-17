import React from 'react';
import './App.css';
import { Account } from './Components/Account';
import AuthenticationFlow from './Components/AuthenticationFlow';

// window.addEventListener('unhandledrejection', function (event) {
//   console.error('Unhandled promise rejection:', event.reason);
// });

const App = () => {
  return (
    <><h1>Odyn</h1>
    <Account>


      <div>
        <AuthenticationFlow />

      </div>

    </Account></>
  
  )
}

export default App;
