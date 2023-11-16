import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const main = async () => {
    const user = await prisma.user.create({
        data: {
            email: "shihab.ahmed@gmail.com",
            name: "Shihab Ahmed Efty",
            age: 10
        }
    })
    console.log("🚀 ~ file: index.ts:13 ~ main ~ user:", user)
    const users = await prisma.user.findMany();
    console.log("🚀 ~ file: index.ts:6 ~ main ~ users:", users)
    
}

main();