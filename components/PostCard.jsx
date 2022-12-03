import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { HandlerError } from '@auth0/nextjs-auth0';

const PostCard = ({ post }) => {
    return (
        <div className="bg-white shadow-lg px-6 py-12 mb-8 mr-8">
            <div className="aspect-w-1 aspect-h-1 ">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="object-cover shadow-lg "
                />
            </div>
            <h1 className="transition duration-300 text-left mb-8 mt-8 cursor-pointer hover:text-blue-600 text-3xl font-semibold">
                <Link href={`/post/${post.slug}`}>{post.title}</Link>
            </h1>
            <div className="block lg:flex text-left items-left justify-left mb-8 w-full">
                <div className="flex items-left justify-left mb-4 lg:mb-0 w-full lg:w-auto mr-8">
                    <img
                        alt={post.author.name}
                        height="30px"
                        width="30px"
                        className="align-middle"
                        src={post.author.photo.url}
                    />
                    <p className="inline align-left text-gray-700 ml-2 text-lg">
                        {post.author.name}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;
