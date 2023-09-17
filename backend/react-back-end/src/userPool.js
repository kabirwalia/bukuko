import { CognitoUserPool } from "amazon-cognito-identity-js";


const poolData = {
    UserPoolId: "ap-south-1_wBV1l8Ihw",
    ClientId: "5c92qfcoloqut9l1ap8a16ibc7"
}

const userPool = new CognitoUserPool(poolData); // Assign the instance to a variable
export default userPool; // Assign the export to a variable before exporting


// export default new CognitoUserPool(poolData); // Export the variable as the default export

