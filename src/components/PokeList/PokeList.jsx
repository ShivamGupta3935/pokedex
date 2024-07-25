import axios from "axios";
import React, { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import Search from "../Search/Search";
function Pokelist() {
  const [pokeList, setPokeList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [pokedexUrl, setPokedexUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );

  const [prevUrl, setPrevUrl] = useState("");
  const [nextUrl, setNextUrl] = useState("");

  async function downloadPokemon() {
    setIsLoading(true);
    const response = await axios.get(pokedexUrl);
      console.log(response.data.url);
    const promiseResult = response.data.results;
    console.log(promiseResult);
    const pokemonPromiseResult = promiseResult.map((pokemon) =>
      axios.get(pokemon.url)
    );

    const promiseData = await axios.all(pokemonPromiseResult);

    // console.log(pokemonPromiseResult);
    // console.log(promiseData);

    setPrevUrl(response.data.previous);
    setNextUrl(response.data.next);

    const res = promiseData.map((pokeData) => {
      const pokemon = pokeData.data;
      return {
        id: pokemon.id,
        name: pokemon.name,
        image: pokemon.sprites.other
          ? pokemon.sprites.other.dream_world.front_default
          : pokemon.sprites.front_shiny,
        types: pokemon.types,
      };
    });

    console.log(res);
    setPokeList(res);
    setIsLoading(false);
  }

  useEffect(() => {
    downloadPokemon();
  }, [pokedexUrl]);

  return (
    <div className="flex justify-around flex-col">    
      <div className=" mx-auto text-3xl font-bold my-3 p-2">Pokemon List</div>
      <div className="flex flex-wrap justify-center items-center ">
        {isLoading ? (
          <div className="h-96 w-screen text-center text-5xl m-auto">
            loading
          </div>
          ) : (
          pokeList.map((e) => (
            <Pokemon name={e.name} image={e.image} key={e.id} id={e.id} />
          ))
        )}
      </div>
      <div className="mt-3 flex justify-center items-center">
        <button
          className="px-3 py-1 mx-1 my-1.5 border border-slate-300"
          disabled={prevUrl == null}
          onClick={() => {
            setPokedexUrl(prevUrl);
          }}
        >
          {" "}
          prev
        </button>
        <button
          className="px-3 py-1 mx-1 my-1.5 border border-slate-300"
          disabled={nextUrl === null}
          onClick={() => {
            setPokedexUrl(nextUrl);
          }}
        >
          next
        </button>
      </div>
    </div>
  );
}

export default Pokelist;
