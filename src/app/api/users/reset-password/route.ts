import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import jwt, { Secret, JwtPayload } from 'jsonwebtoken';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    //Instantiate the request body
    const body = await req.json();

    const bodySchema = z.coerce.string().email();

    const validatedEmail = bodySchema.parse(body?.email);

    if (validatedEmail) {
      // console.log("EMAIL: ", email);

      //Send verification mail to new user
      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: true,
        service: 'gmail',
        auth: {
          user: process.env.EMAIL_USERNAME,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      // Register a jwt token that will expire in 20min
      const secret: Secret = process.env.NEXTAUTH_SECRET!;
      const emailToken: JwtPayload | string = jwt.sign({ data: validatedEmail }, secret, { expiresIn: 1200 });

      //The url of the token to be sent to the just registered user
      const emailMessage = `${process.env.NEXTAUTH_URL}/password-reset/${emailToken}`;

      //Send the mail to user for email reset
      const info = await transporter.sendMail({
        from: 'Algo Fanatics', // sender address
        to: validatedEmail, // list of receivers
        subject: 'Reset Your Algofanatics Password', // Subject line
        html: `
        <h2>Hi Esteemed Algo Fanatics User, </h2>
        <p> Welcome to one of the world's fastest growing forum. </p>
        <h3> Click the link below to reset your password </h3>
        <p> <a href=${emailMessage} target="_blank" rel="noopener noreferrer" style="color:#9f1239;text-decoration:underline;"> Complete Registration </a> </p>
        <p> You can copy the link below to your browser as an alternative should the above link not work </p>
        <p style="font-weight:bold; padding:2px; border-radius: 4px; border: 1px solid #f3f4f6"> ${emailMessage} </p>
        `
      });
      
      if (!info) throw new Error('Error sending mail');

      return NextResponse.json({ message: 'successful! A reset mail has been sent to your registered email.' }, { status: 200 });
      
    } else {
      throw new Error("Email is required");
    }

  } catch (error) {
    process.env.NODE_ENV === 'development' ? console.log(error) : '';
    return NextResponse.json({message: 'Server Error'}, {status:400})
  }
}