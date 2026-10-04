import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { loadFilesSync } from '@graphql-tools/load-files';
import { fileURLToPath } from "url";
import { products } from './products/products.model.js';
import { orders } from './orders/orders.model.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));

const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const startApolloServer = async () => {
    const app = express();
    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolversArray
    });

    const server = new ApolloServer({
        schema
    })
    await server.start();
    server.applyMiddleware({ app, path: '/graphql' })

    app.listen(3000, () => {
        console.log('running graphql query......')
    })
}

startApolloServer();

