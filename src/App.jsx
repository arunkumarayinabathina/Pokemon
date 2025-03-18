import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { CgPokemon } from "react-icons/cg";
import PokemonCard from "./components/PokemonCard";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const App = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();

      const pokemonDetails = await Promise.all(
        data.results.map(async (pokemon) => {
          const detailsResponse = await fetch(pokemon.url);
          return detailsResponse.json();
        })
      );

      setPokemonList(pokemonDetails);
      setFilteredPokemon(pokemonDetails);
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    setFilteredPokemon(
      pokemonList.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, pokemonList]);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex items-center justify-center py-6">
        <CgPokemon className="text-5xl text-red-500" />
        <h1 className="text-3xl font-semibold ml-3">Pokémon Search</h1>
      </div>

      <div className="flex justify-center mb-6 relative w-full max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search Pokémon..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 text-lg rounded-lg border border-gray-300 shadow-md text-gray-900 pl-12 focus:outline-none"
        />
        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
      </div>

      <div className="flex flex-wrap justify-center gap-6 p-4">
        {filteredPokemon.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
