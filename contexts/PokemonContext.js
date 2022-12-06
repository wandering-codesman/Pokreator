import { createContext, useState } from 'react';

export const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [pokemons, setPokemons] = useState([]);

    const refreshPokemons = async () => {
        try {
            const res = await fetch('/api/pokemon');
            const latestPokemon = await res.json;
            setPokemons(latestPokemon);
        } catch (err) {
            console.error(err);
        }
    };
    const addPokemon = async (name) => {
        try {
            const res = await fetch('/api/pokemon', {
                method: 'POST',
                body: JSON.stringify({ name }),
                headers: { 'Content-Type': 'application/json' }
            });
            const newPokemon = await res.json;
            setPokemons((prevPokemon) => {
                return [newPokemon, ...prevPokemon];
            });
        } catch (err) {
            console.error(err);
        }
    };
    const updatePokemon = async (name, pokemonId) => {
        try {
            const res = await fetch(`/api/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ name }),
                headers: { 'Content-Type': 'application/json' }
            });
            await res.json;
            setPokemons((prevPokemon) => {
                const existingPokemons = [...prevPokemon];
                const existingPokemon = existingPokemons.find(
                    (pokemon) => pokemon.id === pokemonId
                );
                existingPokemon.name = name.name;
                return existingPokemons;
            });
        } catch (err) {
            console.error(err);
        }
    };
    const deletePokemon = async (id) => {
        try {
            const res = await fetch(`/api/${id}`, {
                method: 'DELETE',
                body: JSON.stringify({ name }),
                headers: { 'Content-Type': 'application/json' }
            });
            await res.json;
            setPokemons((prevPokemon) => {
                const existingPokemons = [...prevPokemon];
                const existingPokemon = existingPokemons.filter(
                    (pokemon) => pokemon.id === pokemonId
                );
            });
        } catch (err) {
            console.error(err);
        }
    };
    return (
        <PokemonContext.Provider
            value={{
                pokemons,
                setPokemons,
                refreshPokemons,
                updatePokemon,
                deletePokemon,
                addPokemon
            }}
        >
            {children}
        </PokemonContext.Provider>
    );
};

//         const updatePokemon = async (name, type, pokemonId) => {
//             try {
//                 const res = await fetch(`/api/${id}`, {
//                     method: 'PUT',
//                     body: JSON.stringify({ name, type }),
//                     headers: { 'Content-Type': 'application/json' }
//                 });
//                 await res.json;
//                 setPokemons((prevPokemon) => {
//                     const existingPokemons = [...prevPokemon];
//                     const existingPokemon = existingPokemons.find(
//                         (pokemon) => pokemon.id === pokemonId
//                     );
//                     existingPokemon.name = name.name;
//                     existingPokemon.type = type.type;
//                     return existingPokemons;
//                 });
//             } catch (err) {
//                 console.error(err);
//             }

//             try {
//                 const res = await fetch(`/api/${id}`, {
//                     method: 'DELETE',
//                     body: JSON.stringify({ name, type }),
//                     headers: { 'Content-Type': 'application/json' }
//                 });
//                 await res.json;
//                 setPokemons((prevPokemon) => {
//                     const existingPokemons = [...prevPokemon];
//                     const existingPokemon = existingPokemons.filter(
//                         (pokemon) => pokemon.id === pokemonId
//                     );
//                 });
//             } catch (err) {
//                 console.error(err);
//             }
//         };
//         return (
//             <PokemonContext.Provider
//                 value={{
//                     pokemons,
//                     setPokemons,
//                     refreshPokemons,
//                     updatePokemon,
//                     deletePokemon,
//                     addPokemon
//                 }}
//             >
//                 {children}
//             </PokemonContext.Provider>
//         );
//     };
// };
