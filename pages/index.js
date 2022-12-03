import { useUser } from '@auth0/nextjs-auth0';
import { getPosts } from '../services';
import {
    HomeHeader,
    PostCard,
    PostWidget,
    Categories,
    PostCardLocked
} from '../components';
import Head from 'next/head';

export default function Home({ posts }) {
    // grabs user data
    const { user, error, isLoading } = useUser();
    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>Pokréator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeHeader />
            <div>
                <h1 className="text-center text-white mb-8 mt-8  text-3xl font-semibold">
                    Community Creations
                </h1>
                <div>
                    {user ? (
                        <div className="grid grid-cols-3 mb-18">
                            {posts.map((post) => (
                                <PostCard post={post.node} key={post.title} />
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-3 mb-18">
                            {posts.map((post) => (
                                <PostCardLocked
                                    post={post.node}
                                    key={post.title}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {/* <div className="lg:col-span-4 col-span-1">
                    <div className="lg:sticky relative top-8">
                        <PostWidget />
                        <Categories />
                    </div>
                </div> */}
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
