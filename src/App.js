
import './App.css';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";

function App() {
  return (
    <div className="App">


        <Link className=""  to="/">Home</Link>
        <Link to="/RQSuperHeroesPage">RQSuperHeroesPage</Link>
        <Link to="/SuperHeroesPage">SuperHeroesPage</Link>

        <Routes>
          <Route path="/"  element={<HomePage/>}/>
          <Route path="/RQSuperHeroesPage"  element={<RQSuperHeroesPage/>}/>
          <Route path="/SuperHeroesPage"  element={<SuperHeroesPage/>}/>
        </Routes>

    </div>
  );
}

export default App;
