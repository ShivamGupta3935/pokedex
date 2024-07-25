import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 function PokemonDetails() {
 const {id} = useParams()
 const [pokemon, setPokemon] = useState({})
 console.log(id);

  async function downloadPokemon(){
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`) 
    // console.log({response});
    setPokemon({
      name: response.data.name,
      image: response.data.sprites.other.dream_world.front_default,
      height: response.data.height,
      weight: response.data.weight,
      types: response.data.types.map((t) => t.type.name)
    })
  }
 
  useEffect(() => {
    downloadPokemon()
  },[])
 

//  console.log(response.data);


  return (
     <div className="m-10 text-1xl font-bold border border-zinc-500 p-4">
        <div className="text-2xl font-bold text-center mb-7">
          {pokemon.name} 
        </div>
        <div className="w-80">
          <img  src={pokemon.image}/>
        </div>
        <div className="border border-zinc-500  text-center rounded-m">
          Weight: {pokemon.weight}
        </div>
        <div className="border border-zinc-500  text-center rounded-m mt-2 flex flex-row gap-5 items-center justify-center">
            {pokemon.types && pokemon.types.map((t) => <div key={t.name}> {t}</div>)}
        </div>
  
     </div>  
  )
}

export default PokemonDetails;
