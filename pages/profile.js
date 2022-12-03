import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import { PostCard, ProfileDetails, Header } from '../components';
import { getPosts } from '../services';

export default function Profile({ posts }) {
    // grabs user data
    const { user, error, isLoading } = useUser({});
    console.log(user);
    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>Pokréator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="text-left items-left justify-left px-15 w-fit overflow-auto">
                <div>
                    <h1 className="text-xl text-yellow-300 underline decoration-4 mb-2"></h1>

                    <img
                        className="scale-200 bg-white px-2 py-2"
                        src={user && user.picture}
                    />
                </div>
            </div>

            <div>
                <h1 className="text-left text-white my-8 text-3xl font-semibold">
                    {user && user.given_name}'s Pokémons
                </h1>
            </div>
            <div className="grid grid-cols-3 mb-18">
                {posts.map((post) => (
                    <PostCard post={post.node} key={post.title} />
                ))}
            </div>
        </div>
    );
}

export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return {
        props: { posts }
    };
}
