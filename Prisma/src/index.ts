import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertUser(username: string, pasword: string, firstName: string, lastName: string) {
    try {
        const resp = await prisma.user.create({
            data: {
                username,
                pasword,
                firstName,
                lastName
            }
        });
        console.log(resp);     
    } catch (error) {
        console.log("🚀 ~ insertUser ~ error:", error)
        
    }
   
}


insertUser('Harkirat7' , 'password' , 'himanshu' , 'sharma');