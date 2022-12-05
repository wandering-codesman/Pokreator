import React from 'react';
import { Header, PokemonForm } from '../components';
import Pokemon from './api/pokemon';

const create = ({ pokemons }) => {
    return (
        <div className="px-20">
            <Header />
            <PokemonForm />
            {/* <Pokemon pokemons={pokemons} /> */}
        </div>
    );
};

export default create;
