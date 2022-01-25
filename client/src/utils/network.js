import { request, GraphQLClient } from 'graphql-request'


/**
 * Main Network class to manage all API calls
 * @param {*} query 
 * @param {*} variables 
 */
async function fetchGraphQL(query, variables) {
    const client = new GraphQLClient('/graphql', { headers: {} })
    const response = await client.request(query, variables)
    return response
}

export default fetchGraphQL;