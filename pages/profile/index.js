import Head from 'next/head';
import { useUser } from '@auth0/nextjs-auth0';
import { Header } from '../../components';
// export const getStaticProps = async () => {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon');
//     const data = await res.json();

//     return {
//         props: { pokemons: data }
//     };
// };

export default function Profile({ pokemons }) {
    console.log(pokemons);
    // grabs user data
    const { user, error, isLoading } = useUser({});
    console.log(user);
    return (
        <div className="container mx-auto px-10 mb-8">
            <Head>
                <title>Pokréator</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <div className="text-left items-left justify-left px-15 w-fit overflow-auto">
                <div>
                    <h1 className="text-xl text-yellow-300 underline decoration-4 mb-2"></h1>

                    <img
                        className="scale-200 bg-white px-2 py-2"
                        src={user && user.picture}
                    />
                </div>
            </div>

            <div>
                <h1 className="text-left text-white my-8 text-3xl font-semibold">
                    {user && user.given_name}'s Pokémon
                </h1>
            </div>
            {/* {pokemons.map((pokemon) => (
                <div key={pokemon.id}>
                    <a>
                        <h3>{pokemon.name}</h3>
                    </a>
                </div>
            ))} */}
        </div>
    );
}
