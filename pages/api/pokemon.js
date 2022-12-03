import { graphql, GraphQLClient, gql } from 'graphql';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function pokemon(req, res) {
    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
        }
    });

    const query = gql`
        mutation CreatePokemon($name: String!, $gender:  )
    `;
}
