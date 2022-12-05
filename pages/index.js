import { getServerSidePropsWrapper, useUser } from '@auth0/nextjs-auth0';
import { HomeHeader, Pokemon } from '../components';
import { table, minifyRecords, getMinifiedRecord } from './api/utils/';
import Head from 'next/head';

export default function Home({ initialPokemons }) {
    console.log(initialPokemons[0]);
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
                {initialPokemons.map((pokemon) => {
                    <p className="text-4xl">
                        <Pokemon key={pokemon.id} pokemon={pokemon} />
                    </p>;
                })}
                <p>hello</p>
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    try {
        const pokemon = await table.select({}).firstPage();
        return {
            props: {
                initialPokemons: minifyRecords(pokemon)
            }
        };
    } catch (err) {
        console.error(err);
        return {
            props: {
                err: 'something wrong'
            }
        };
    }
}
