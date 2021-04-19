import { gql } from 'apollo-server'

export const typeDefs = gql`
    type Users {
        id: ID
        name: String
        mail: String
        todos: [Todos]
        createdAt: Date
        updatedAt: Date
    }

    type Todos {
        id: ID
        title: String
        memo: String
        user_id: Int
        user: Users
        createdAt: Date
        updateAt: Date
    }

    type Query {
        getUser(id: ID!): Users
        getUsers(): [Users]
        getTodo(id: ID!): Todos
        getTodo(): [Todos]
    }
`