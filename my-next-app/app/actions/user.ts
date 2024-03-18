"use server"
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

export async function solve(email: string, password: string) {

    try {
        const user = await client.user.create({
            data: {
                username: email,
                password: password
            }
        });
        return "Done"
    } catch (error) {
        return "Failed"
    }
}
// if we use this server actions so there is no need to use api/user/route know we can use server actions to fullfill for request