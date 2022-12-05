import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.scss';
import { Layout } from '../components';
function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
