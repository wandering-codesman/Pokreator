import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';
import { HandlerError } from '@auth0/nextjs-auth0';

const PostCardLocked = ({ post }) => {
    const [viewModal, setViewModal] = useState(false);

    const handleClose = (e) => {
        if (e.target.id === 'box') setViewModal(false);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg px-6 py-12 mb-8 mr-8">
            <div className="aspect-w-1 aspect-h-1 ">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className="object-cover shadow-lg rounded-lg"
                />
            </div>
            <h1 className="transition duration-300 text-center mb-8 mt-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
                <button onClick={() => setViewModal(true)}>{post.title}</button>
            </h1>
            {viewModal ? (
                <div
                    className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10"
                    id="box"
                    onClick={handleClose}
                >
                    <div className="w-[200px] flex-col">
                        <button
                            className="text-white text-xl place-self-end shadow-lg"
                            onClick={() => setViewModal(false)}
                        >
                            x
                        </button>
                        <div className="bg-rose-600 text-white shadow-lg bg-opacity-75 p-2 rounded font-semibold ">
                            Please sign in
                        </div>
                    </div>
                </div>
            ) : null}
            <div className="block lg:flex text-center items-center justify-center mb-8 w-full "></div>
        </div>
    );
};

export default PostCardLocked;
