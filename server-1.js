import express from 'express';
import { buildSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql'

const schema = buildSchema(`
    type Query {
        description: String
        price: Float
    }
`)

const root = {
    description: 'red shoe',
    price: 42.12
}

const app = express();

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))

app.listen(3000, () => {
    console.log('running graphql query......')
})