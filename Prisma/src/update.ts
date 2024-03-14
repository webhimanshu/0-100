import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface updateBody {
    firstName: string;
    lastName: string
}

async function update(username: string, { firstName, lastName }: updateBody) {

 const resp = await    prisma.user.update({
        where: { username },
        data: {
            firstName,
            lastName
        }
    });
    console.log(resp);
}
update('Harkirat7', { firstName: 'harkiratdddddd2', lastName: 'cha' });