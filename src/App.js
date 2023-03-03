import './App.css';
import Header from './Header';
import AboutMe from './AboutMe';
import Home from './Home';
import Splash from './Splash';
import Experience from './Experience';
import Contact from './Contact';
import Bottom from './Bottom';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState, useEffect } from 'react';


function App() {

  const [enter, setEnter] = useState(false)
  const [visitorsNum, setVisitorsNum] = useState(null)

  useEffect(() =>{
    fetch('https://54naxau6lb.execute-api.us-east-1.amazonaws.com/visitors')
    .then(resp => resp.json())
    .then(data => {
      setVisitorsNum(data[1].visitors)
      console.log(data)
    })
  })

  function enterToSite(t) {
    setEnter(true)
    fetch('https://54naxau6lb.execute-api.us-east-1.amazonaws.com/visitors', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: 'visitor',
        visitors: visitorsNum + 1,
      })

    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

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
        <div>
          <Bottom />
        </div>
      </div>
      : 
      <div><Splash enterToSite={enterToSite}/></div>}
    </div>
  );
}

export default App;
