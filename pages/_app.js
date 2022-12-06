import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0';
import '../styles/globals.scss';
import { PokemonProvider } from '../contexts/PokemonContext';
import { Layout } from '../components';
function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <PokemonProvider>
                <Component {...pageProps} />
            </PokemonProvider>
        </UserProvider>
    );
}

export default MyApp;
