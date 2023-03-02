import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Home from './Home';
import Splash from './Splash';
import Experience from './Experience';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      {enter ? 
      <div>
        <h1>{<Header/>}</h1>
        <div>
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='about-me' element={ <AboutMe /> }/>
            <Route path='job-experience' element= { <Experience />}/>
          </Routes>
        </div>
      </div>
      : 
      <div><Splash enter={enter}/></div>}
    </div>
  );
}

export default App;
