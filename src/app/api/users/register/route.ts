import { NextRequest, NextResponse } from "next/server";
import connectDb from "../../_util/db";
import User from "../../_util/userModel";
import { z } from 'zod';
import bycrypt from 'bcryptjs';

connectDb();

//desc: User register
//@route: domain/api/users/register
//access: public
export async function POST(req: NextRequest) {
  try {
    //Define the register validation schema with zod
    const RegisterSchema = z.object({
      firstName: z.string().min(3),
      lastName: z.string().min(3),
      email: z.coerce.string().email(),
      password: z.string().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),
    })
    // const tag = req.nextUrl.searchParams.get('tag');
    
    //parse the user object
    const user = await req.json();

    //Validate the user data
    let validatedUser = RegisterSchema.parse(user);
    
    //Check if user exists
    const userExists = await User.findOne({ email: validatedUser.email  });
    if (userExists) {
      throw new Error('User already exists');
    } 

    //Hash the password
    const password = bycrypt.hashSync(validatedUser.password, 10);

    //Replace the user password with the hashed password
    const readyUserData = { ...validatedUser, password};

    //Register the user in the database
    const newUser = await User.create(readyUserData);

    //Throw error if user could not be created
    if (!newUser) throw new Error('Could not create user');

    // console.log(validatedUser);

    return NextResponse.json({ message: 'successful! User can now login' });

  } catch (error) {
    process.env.NODE_ENV==='development'? console.log(error) : '';
    return NextResponse.json("Error Occured", {
      status: 401
    })
  }

}