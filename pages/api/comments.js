// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const graphcmsToken = process.env.GRAPHCMS_TOKEN;
export default async function comments(req, res) {
    const { name, email, slug, comment } = req.body;
    // authorisation
    const graphqlClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${graphcmsToken}`
        }
    });

    // mutation query is basically a query that allows you to edit or create
    const query = gql`
        mutation CreateComment($name: String!, $email, String!, $comment: String!, $slug: String!) {
            createComment(date:{ name: $name, email: $email, comment: $comment, post: { connect: { slug: $slug } } }) { id }
        }
    `;

    // we're grabbing the query and adding it into the req.body object. then we send the result.
    try {
        const result = await graphqlClient.request(query, req.body);

        return res.status(200).send(result);
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
}
