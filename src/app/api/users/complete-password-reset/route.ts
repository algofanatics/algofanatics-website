import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
// import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
var jwt = require('jsonwebtoken');
import { z } from 'zod';
import userModel from '../../_util/userModel';;

export async function POST(req: NextRequest) {
  try {
    //Define the body from the client
    const body = await req.json();

    //Zod Schema to validate the body
    const bodySchema = z.object({
      token: z.string(),
      password: z.string().regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/),
    })

    const validated = bodySchema.parse(body);

    if (!validated) throw new Error('Validation Error');

    // verify the jwt token
    const secret = process.env.NEXTAUTH_SECRET!
    const decodedToken = jwt.verify(validated.token, secret);
    const email = decodedToken.data;

    if (email && validated.password) {
       //Hash the password
      const password = bcrypt.hashSync(validated.password, 10);
      const user = await userModel.findOneAndUpdate({ email }, { password });

      if (user) return NextResponse.json({ message: 'success' }, { status: 200 });

      throw new Error("Could not update user password");
      
    } else {
      throw new Error("email and password are invalid");
    }
    
  } catch (error) {
    process.env.NODE_ENV === 'development' ? console.log(error) : ''
    return NextResponse.json({ message: "Server Error" }, { status: 400 });
  }
}