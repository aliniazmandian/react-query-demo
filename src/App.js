
import './App.css';
import { Link, Route, Routes} from "react-router-dom";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";

function App() {
  return (
    <div className="App w-screen h-screen">

        <div className="w-screen  bg-blue-400 flex justify-center items-center" >
            <Link className="mr-2"  to="/">Home</Link>
            <Link className="mr-2" to="/RQSuperHeroesPage">RQSuperHeroesPage</Link>
            <Link className="mr-2" to="/SuperHeroesPage">SuperHeroesPage</Link>
        </div>


        <Routes>
          <Route path="/"  element={<HomePage/>}/>
          <Route path="/RQSuperHeroesPage"  element={<RQSuperHeroesPage/>}/>
          <Route path="/SuperHeroesPage"  element={<SuperHeroesPage/>}/>
        </Routes>

    </div>
  );
}

export default App;
