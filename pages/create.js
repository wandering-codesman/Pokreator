import React from 'react';
import { Header, PokemonForm } from '../components';
import { table, minifyRecords, getMinifiedRecord } from './api/utils/';
import Pokemon from './api/pokemon';

const create = ({ initialPokemons }) => {
    return (
        <div className="px-20">
            <Header />
            <PokemonForm />
        </div>
    );
};

export default create;

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
