import React from 'react'
import Search from '../Search/Search'
import Pokelist from '../PokeList/PokeList'

function Pokedex() {
  return (
    <div className=''>
        <Search />
        <h1 className='text-3xl font-bold lett tracking-widest'>
           Pokedex
        </h1>
        <div>
        
        </div>
        <div>
        <Pokelist />
      </div>
    </div>
  )
}

export default Pokedex