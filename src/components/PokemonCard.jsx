import React from "react";
import { FaWeightHanging, FaRulerVertical } from "react-icons/fa";

const PokemonCard = ({ pokemon }) => {
  return (
    <div className="rounded-lg shadow-lg p-4 w-64 bg-white text-gray-900 transform transition-all hover:scale-105 hover:shadow-xl">
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="w-32 mx-auto"
      />
      <h3 className="text-xl font-bold text-center my-2 uppercase">
        {pokemon.name}
      </h3>

      <div className="flex justify-between px-4 text-sm">
        <p className="flex items-center gap-2">
          <FaRulerVertical /> Height: {pokemon.height}
        </p>
        <p className="flex items-center gap-2">
          <FaWeightHanging /> Weight: {pokemon.weight}
        </p>
      </div>
    </div>
  );
};

export default PokemonCard;
