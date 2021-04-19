import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { schema } from 'schema'

const app = express();
app.use("/graphql", graphqlHTTP(async (request) => ({
    schema,
    "context": {prisma, request}
})))
app.listen(9000)
console.log("http://localhost:9000/graphql")