import "./App.css";
import Pokedex from "./components/Pokedex/Pokedex";
import Search from "./components/Search/Search";
import Pokelist from "./components/PokeList/PokeList";
import CostumRoute from "./Routes/CostumRoute";
// import CostumRoute from "./Routes/CostumRout
function App() {
  return (
    <>
      <div className="flex flex-col justify-start items-center  mt-4">
        <CostumRoute />
      </div>
    </>
  );
}

export default App;
