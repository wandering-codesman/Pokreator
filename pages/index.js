import { getServerSidePropsWrapper, useUser } from '@auth0/nextjs-auth0';
import { HomeHeader, Pokemon } from '../components';
import { table, minifyRecords, getMinifiedRecord } from './api/utils/';
import Head from 'next/head';

export default function Home({ initialPokemons }) {
    console.log(initialPokemons[0].fields.name);
    // for (let i of initialPokemons) {
    //     console.log(i);
    // }

    // grabs user data
    const { user, error, isLoading } = useUser();

    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>Pokréator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <HomeHeader />
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
