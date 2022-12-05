import React, { useState, useEffect, useContext } from 'react';
import { getCategories } from '../services';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import LoginLogout from './LoginLogout';
import Image from 'next/image';

const Header = () => {
    // grabs user data
    const { user, error, isLoading } = useUser();

    return (
        <div className="container grid place-content-start ">
            <div className="w-full inline-block py-4">
                <div className="justify-center display: flex space-x-4 transition duration-500 transform hover:-translate-y-1 md:float-center ">
                    <Link href="/">
                        {/* <Image
                            className="display: block ml-auto mr-auto mb-auto mt-auto w- "
                            src="/pokeball.png"
                            alt="Picture of the author"
                            width={50}
                            height={50}
                            blurDataURL="/pokeball.png"
                            placeholder="blur"
                        /> */}
                        <Image
                            className="display: block ml-auto mr-auto mb-auto mt-auto w- "
                            src="/Pokréator.png"
                            alt="Picture of the author"
                            width={200}
                            height={200}
                            blurDataURL="/Pokréator.png"
                            placeholder="blur"
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
