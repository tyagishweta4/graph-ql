import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import path from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import {loadFilesSync} from '@graphql-tools/load-files';
import { fileURLToPath } from "url";
import { products } from './products/products.model.js';
import { orders } from './orders/orders.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const schema = makeExecutableSchema({
    typeDefs: typesArray
})



const root = {
    product: products,
    orders: orders
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