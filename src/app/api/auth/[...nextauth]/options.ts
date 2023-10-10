import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';
import UserModel from "../../_util/userModel";
import bcrypt from 'bcryptjs';
import { z } from 'zod';
import { v4 as uuidv4 } from 'uuid'

// import connectDb from "@/_components/backend/util/db";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: "Email", type: 'email' },
        password: { label: 'Password', type: 'password', autocomplete: false },
      },
      async authorize(credentials) {

        try {
          //Create login validation schema
          const LoginSchema = z.object({
            email: z.coerce.string().email(),
            password: z.string()
          })
  
          //Validate the login credentials
          const validatedLoginCredentials = LoginSchema.parse({
            email: credentials?.email,
            password: credentials?.password
          })
  
          //Search for user in the database
          const user = await UserModel.findOne({ email: validatedLoginCredentials?.email });
  
          if (!user) throw new Error('Invalid login credentials');

          if (user) {
            
            //Check if password match
            const passwordMatch = bcrypt.compareSync(validatedLoginCredentials.password, user.password);
    
            if (!passwordMatch) throw new Error("Invalid credentials");
            return user;
          }
          
        } catch (error) {
          process.env.NODE_ENV === "development" ? console.error(error) : '';
          throw new Error('Invalid credentials');
        }

      },
    }),
  ],
  pages: {
    newUser: '/api/users/register',
    signIn: '/login'
  },
  callbacks: {
    async session({ session, token, user }) {
      try {

        //Extract email of the user session
        const  email= session?.user?.email;
  
        const sessionUser = await UserModel.findOne({ email }).select('-password');
  
        if (sessionUser) {
          return {...sessionUser._doc, ...session };
        }
        
      } catch (error) {
        throw new Error("Could not return session");
      }

    }
  }
}