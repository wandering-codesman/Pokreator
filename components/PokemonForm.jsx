import React, { useState, useEffect, useRef, useContext } from 'react';
import { addPokemon } from '../contexts/PokemonContext';
import Pokemon from './Pokemon';
import { PokemonContext } from '../contexts/PokemonContext';

const PokemonForm = ({ pokemon }) => {
    const { updatePokemon, deletePokemon } = useContext(PokemonContext);
    const [error, setError] = useState(false);
    // if pokemon is created
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    // // grabbing uploaded image data
    // const fileSelectedHandler = (e) => {
    //     console.log(e.target.files[0]);
    // };

    // grabbing user input data
    const nameEl = useRef();
    const typeEl = useRef();
    const storeDataEl = useRef();
    // // grabbing select data
    // const [selectType, setSelectType] = useState();
    // const [selectGender, setSelectGender] = useState();

    const handlePokemonSubmit = (e) => {
        e.preventDefault();
        const updatedFields = {
            ...pokemon.fields,
            completed: !pokemon.fields.completed
        };

        const updatedPokemon = { id: pokemon.id, fields: updatedFields };
        updatePokemon(updatedPokemon);
    };

    return (
        <div className="py-10">
            <h1 className="text-white text-4xl">Create your Pokemon!</h1>
            <div className="bg-white p-8 w-1/2 ">
                <div>
                    <h1 className="text-3xl mb-5">Insert your details!</h1>
                    <div className="flex no wrap">
                        <h1 className="text-2xl">Name:</h1>
                        <input
                            className="px-4 outline-none w-full rounded-none hover:bg-yellow-400"
                            type="text"
                            ref={nameEl}
                            placeholder="Name"
                            name="name"
                        />
                    </div>
                    {/* <div className="flex no wrap ">
                        <h1 className="text-2xl">Gender:</h1>
                        <select
                            value={selectGender}
                            onChange={(e) => {
                                setSelectGender(e.target.value);
                            }}
                            name="Gender"
                            className="px-4 outline-none w-full rounded-none hover:bg-yellow-400"
                            required
                        >
                            <option>Male</option> <option>Female</option>
                        </select>
                    </div>
                    <div className="flex no wrap">
                        <h1 className="text-2xl">Type:</h1>
                        <select
                            value={selectType}
                            onChange={(e) => {
                                setSelectType(e.target.value);
                            }}
                            name="Type"
                            className="px-4 outline-none w-full rounded-none hover:bg-yellow-400"
                            required
                        >
                            <option>Normal</option>
                            <option>Fire</option>
                            <option>Water</option>
                            <option>Grass</option>
                            <option>Electric</option>
                            <option>Ice</option>
                            <option>Fighting</option>
                            <option>Poison</option>
                            <option>Ground</option>
                            <option>Flying</option>
                            <option>Psychic</option>
                            <option>Bug</option>
                            <option>Rock</option>
                            <option>Ghost</option>
                            <option>Dark</option>
                            <option>Dragon</option>
                            <option>Steel</option>
                            <option>Fairy</option>
                        </select>
                    </div> */}
                    <Pokemon />
                    <div className="flex no wrap">
                        <h1 className="text-2xl">Type:</h1>
                        <input
                            className="px-4 outline-none w-full rounded-none hover:bg-yellow-400"
                            type="text"
                            ref={typeEl}
                            placeholder="Type"
                            name="type"
                        />
                    </div>
                </div>
                {/* <div>
                    <h1 className="text-2xl pb-1">Image</h1>
                    <input type="file" className="hover:bg-yellow-400 p-2" />
                    <p>
                        <img id="output" className="" />
                    </p>
                </div> */}
                {error && <p>ALL FIELDS REQUIRED</p>}
                <button
                    ref={storeDataEl}
                    id="storeData"
                    name="storeData"
                    value="true"
                    type="button"
                    onSubmit={handlePokemonSubmit}
                    className="hover:bg-yellow-400 p-2 text-2xl cursor-pointer"
                >
                    Submit Pokemon
                </button>
                {showSuccessMessage && <span>Pokemon created!</span>}
            </div>
        </div>
    );
};

export default PokemonForm;
