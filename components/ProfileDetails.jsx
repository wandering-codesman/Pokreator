import React from 'react';
import { getPosts } from '../services';

const ProfileDetails = ({ post }) => {
    return (
        <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8">
            <img
                alt={post.author.name}
                height="30px"
                width="30px"
                className="align-middle rounded-full"
                src={post.author.photo.url}
            />
            <p className="inline align-middle text-gray-700 ml-2 text-lg">
                {post.author.name}
            </p>
        </div>
    );
};

export async function getStaticProps() {
    const posts = (await getPosts()) || [];

    return {
        props: { posts }
    };
}

export default ProfileDetails;
