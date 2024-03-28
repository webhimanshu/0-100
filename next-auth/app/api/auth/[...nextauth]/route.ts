import NextAuth from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {
                console.log("🚀 ~ authorize ~ credentials:", credentials)
                // do some db validations
                return {
                    id: "user1",
                    name: "Himanshu Kumar Sharma",
                    email: "himanshu@gmail.com",
                    age: "25"
                };
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
          })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user, account, profile, isNewUser }) {

            token.userId = token.sub
            console.log("🚀 ~ jwt ~ token:", token);
            return token
        },
        async session({ session, token } : any) {
            if (session && session.user) {
                session.user.id = token.sub
            }

            return session;
        }
    }
})

export const GET = handler;
export const POST = handler;