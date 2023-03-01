import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Home from './Home';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>{<Header/>}</h1>
      <div>
        <Routes>
          <Route path='/' element={ <Home /> }/>
          <Route path='about-me' element={ <AboutMe /> }/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
