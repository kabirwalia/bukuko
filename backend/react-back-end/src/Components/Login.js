import React, { useState, useContext,  } from "react";
import { AccountContext } from "./Account";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false); // Track whether the form is submitting
    const { authenticate } = useContext(AccountContext);

    const onSubmit = async (event) => {
      event.preventDefault();
      setIsSubmitting(true); // Start submitting

      try {
          if (email && password) {
              // Make sure both email and password are provided
              await authenticate(email, password);
              console.log("logged in!");
          } else {
              console.error("Email and password are required.");
          }
      } catch (err) {
          console.error("failed to login", err);
      } finally {
          setIsSubmitting(false); // Finish submitting
      }
  };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    type="text"
                    id="email"
                    required
                />
                <label htmlFor="password">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    id="password"
                    required
                />
                <button type="submit" disabled= {isSubmitting}>
                  {isSubmitting ? "Logging in..." : "Login"}</button>
            </form>
        </div>
    );
};

export default Login;



// useEffect(() => {
//   // Create a function to handle authentication and call it within the useEffect
//   const handleAuthentication = async () => {
//       try {
//         if (email && password){
//           await authenticate(email, password);
//           console.log("logged in!");
//         } else{
//           console.error("Email and password are required.");
//         }
         
//       } catch (err) {
//           console.error("failed to login", err);
//       }
//   };

//   // Call the authentication function when the component mounts
//   handleAuthentication();
// }, [authenticate, email, password]);

// const onSubmit = (event) => {
//   event.preventDefault();
//   // You don't need to call authenticate here again; it's already handled in the useEffect
// };