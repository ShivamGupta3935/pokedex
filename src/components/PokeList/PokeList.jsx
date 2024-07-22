import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pokemon from '../Pokemon/Pokemon'

function Pokelist() {
  
    const [pokeList, setPokeList] = useState([])
    const [isLoading, setIsLoading] = useState(true)


    async function downloadPokemon() {
          const response = await axios.get("https://pokeapi.co/api/v2/pokemon")
        //   console.log(response.data);
            const promiseResult  = response.data.results
            // console.log(promiseResult);
            const pokemonPromiseResult = promiseResult.map((pokemon) => axios.get(pokemon.url) )

            const promiseData = await axios.all(pokemonPromiseResult)
            
            // console.log(pokemonPromiseResult);
            console.log(promiseData);

            const res = promiseData.map((pokeData) => {
                const pokemon = pokeData.data
                return{
                    id:pokemon.id,
                    name: pokemon.name,
                    image : (pokemon.sprites.other)? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny,
                    types: pokemon.types
                }
            })

        console.log(res);
        setPokeList(res)
        setIsLoading(false)
    }

    useEffect(() => {
        downloadPokemon()
    }, [])

 

  return (
    <div className='flex justify-around flex-col'>
        <div className=' mx-auto text-3xl font-bold my-3 p-2'>
            Pokemon List
        </div>
        <div className='flex flex-wrap justify-center items-center'>
        {isLoading ?"loading": 
         pokeList.map((e) => <Pokemon name={e.name} image={e.image} key={e.id}  />)
        }
        </div>
        <div className='mt-3 flex justify-center items-center'>
            <button className='px-3 py-1 mx-1 my-1.5 border border-slate-500	  hover:bg-slate-300 '> prev</button>
            <button className='px-3 py-1 mx-1 my-1.5 border border-slate-500	  hover:bg-slate-300'>next</button>
         </div>
    </div>
  )
}

export default Pokelist