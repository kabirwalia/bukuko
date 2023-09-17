import React,{useState, useContext, useEffect} from "react";
import { AccountContext } from "./Account";

const Status = () => {
    const [status, setStatus] = useState(false);
    const {getSession, logout } = useContext(AccountContext);
    useEffect(() => {
        getSession()
        .then(session => {
            console.log("Session: ", session);
            setStatus(true);
        });
    }, [getSession]);
    const handleLogout = () => {
        logout();
        console.log('Sad to see you go'); // Log the message when the user logs out
      };
    return (
        <div style={{ fontSize: "24px" }}>
          {status ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <span>Please login</span>
          )}
        </div>
      );
    };
export default Status;