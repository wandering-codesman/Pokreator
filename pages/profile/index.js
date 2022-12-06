import Head from 'next/head';
import { PokemonContext } from '../../contexts/PokemonContext';
import { useUser } from '@auth0/nextjs-auth0';
import { Header } from '../../components';
import { table, minifyRecords, getMinifiedRecord } from '../api/utils/';
import { useEffect, useContext } from 'react';

// export const getStaticProps = async () => {
//     const res = await fetch('https://pokeapi.co/api/v2/pokemon');
//     const data = await res.json();

//     return {
//         props: { pokemons: data }
//     };
// };

export default function Profile({ initialPokemons }) {
    const { pokemons, setPokemons } = useContext(PokemonContext);

    const { updatePokemon, deletePokemon } = useContext(PokemonContext);
    const handlePokemonSubmit = (e) => {
        e.preventDefault();
        const updatedFields = {
            ...pokemon.fields,
            completed: !pokemon.fields.completed
        };

        const updatedPokemon = { id: pokemon.id, fields: updatedFields };
        updatePokemon(updatedPokemon);
    };

    // grabs user data
    const { user, error, isLoading } = useUser({});
    console.log(user);
    useEffect(() => {
        setPokemons(initialPokemons);
    }, []);

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
                <h1 className="text-left text-white mt-8 text-3xl font-semibold">
                    {user && user.given_name}'s Pokémon
                </h1>
            </div>
            <div>
                {pokemons &&
                    pokemons.map((pokemon) => (
                        <>
                            <h1
                                key={pokemon.id}
                                className="text-2xl inline-flex mt-2 px-2 mx-2 bg-white hover:bg-yellow-400"
                            >
                                {pokemon.fields.name}
                            </h1>
                            <button onClick={() => deletePokemon(pokemon.id)}>
                                Delete
                            </button>
                        </>
                    ))}
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
