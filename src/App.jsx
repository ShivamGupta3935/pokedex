import { useState } from 'react'
import './App.css'
import Pokedex from './components/Pokedex/Pokedex'
import Search from './components/Search/Search'
import Pokelist from './components/PokeList/PokeList' 

function App() {
 

  return (
    <>
    <div className="flex flex-col justify-start items-center  mt-4">
     <Pokedex/>
     <Search/>   
    
    </div>
    <div>
    <Pokelist/>
    </div>
    </>
  )
}

export default App
