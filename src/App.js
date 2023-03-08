import './App.css';
import Header from './Header';
import Home from './Home';
import Experience from './Experience';
import Footer from './Footer';
import Projects from './Projects';
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useState, useEffect } from 'react';


function App() {

  const [visitorsNum, setVisitorsNum] = useState(null)

  useEffect(() =>{
    fetch('https://54naxau6lb.execute-api.us-east-1.amazonaws.com/visitors')
    .then(resp => resp.json())
    .then(data => {
      setVisitorsNum(data[1].visitors)
    })
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
  }, [])

  return (
    <div className="App">
      <div>
        <div className='header-space'>{<Header/>}</div>
        <div>
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='job-experience' element= { <Experience />}/>
            <Route path='projects' element= { <Projects />}/>
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
