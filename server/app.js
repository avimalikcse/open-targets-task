import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
import rootResolvers from './src/resolvers/rootResolvers';
import { loadSchemaSync } from '@graphql-tools/load'
import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader'
import { loadData } from './src/utils/helper';


const server = express();
const PORT = process.env.PORT || 5000; // set the port for the application 


// Load the bunch of data from JSON to Store upfront 
loadData(() => { console.log('data loaded') })

// start listening to the port
server.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
const schema = makeExecutableSchema({
    typeDefs: loadSchemaSync('src/schemas/**/*.graphql', {
        loaders: [new GraphQLFileLoader()],
    }),
    resolvers: rootResolvers,
});

server.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

export default server