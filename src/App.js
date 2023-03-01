import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={ <Home /> }/>
      </Routes>
      <div><Header /></div>
      <div><AboutMe /></div>
      Hello!
    </div>
  );
}

export default App;
