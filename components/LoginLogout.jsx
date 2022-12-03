import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

const LoginLogout = () => {
    // grabs user data
    const { user, error, isLoading } = useUser();

    if (user) {
        return (
            <div className="grid place-items-center mt-4">
                <div>
                    <Link
                        className="text-xl text-white font-semibold px-2 py-2 mr-8 text-right"
                        href="/profile"
                    >
                        Profile
                    </Link>
                    <Link
                        className="text-xl text-white font-semibold px-2 py-2 mr-8 text-right"
                        href="/create"
                    >
                        Create
                    </Link>
                    <a
                        className="text-xl text-white font-semibold px-2 py-2 text-right"
                        href="/api/auth/logout"
                    >
                        Log out
                    </a>
                </div>
            </div>
        );
    }
    return (
        <div className="grid place-items-center mt-4">
            <div>
                <a
                    className="text-xl text-white font-semibold px-5 py-2 text-right"
                    href="/api/auth/login"
                >
                    Login
                </a>
                <a
                    className="text-xl text-white font-semibold px-5 py-2 text-right"
                    href="/api/auth/login"
                >
                    Register
                </a>
            </div>
        </div>
    );
};

export default LoginLogout;
