import NextAuth from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    _id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    verified?: boolean;
    isAdmin?: boolean
    createdAt?: string;
    updatedAt?: string;
    __v?: string | number;
    user?: {
      name?: string,
      email?: string,
      image?: string
      },
    expires?: string
  }
}