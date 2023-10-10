# blog

# REGISTER
To register, send the following credentials to https://www.algofanatics.com/api/users/register

{firstName, lastName, email, password}

The password at the backend is validated to contain atleast 1 small letter, 1 big letter, 1 digit and must contain minimum of 8 characters



# LOGIN
Based on the login api presently. The client login has to be created at https://www.algofanatics.com/login. 

### SIGN IN ON CLIENT SIDE RENDER: 

Import {signIn, useSession} from “next-auth/react”;
To handle signin, run the signIn function and pass in the credentials like this:
      const res = await signIn('credentials', {
        email,
        password,
        redirect: false
      })

To initiate useSession:
const {data:session} = useSession();

if not signed In, session is undefined but if signed In session contains the credentials/particulars of the signed in user

INCASE YOU NEED the session object in server rendered page, do the below

import { options } from './api/auth/[...nextauth]/options';
import { getServerSession } from 'next-auth/next';

const session = await getServerSession(options);

# PASSWORD RESET;
To reset password, send email already existing in database to https://www.algofanatics.com/api/users/reset-password

A token valid for 20mins will be sent to the email address provided.

# COMPLETE PASSWORD RESET
To complete password-reset, send an object conataining the token and the new password to the api https://www.algofanatics.com/api/users/complete-password-reset

{token, password} //Send this to the api

# LOGOUT
To signOut, import the signOut function at any client rendered page

import {signOut} from "next-auth/react";

<button onClick={()=>signOut()}> Sign Out </button> This button will log you out

ENVIRONMENTAL VARIABLES
NODE_ENV=
MONGO_URI=
NEXTAUTH_SECRET=
NEXTAUTH_URL=https://www.algofanatics.com
EMAIL_USERNAME=
EMAIL_PASSWORD=


