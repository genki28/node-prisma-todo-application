import { prisma } from ".prisma/client";

export const resolvers = {
    Query: {
        todos: () => prisma.Users.findMany({

        })
    }
}