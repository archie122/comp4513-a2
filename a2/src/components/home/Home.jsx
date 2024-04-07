import React from 'react';
import { Link, Route } from 'react-router-dom';
import Header from './header/Header.jsx'
import Results from './results/Results.jsx';
import Standings from './standings/Standings.jsx';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Header/>
      <div>
        <Link to="/comp4513-a2"><button>Logout</button></Link>
        <Link to="/home/results"><button>Results</button></Link>
        <Link to="/home/standings" >Standings</Link>
      </div>

      {/* <div>
        <Route path="/home/results">
          <Results />
        </Route>
        <Route path="/home/standings">
          <Standings />
        </Route>
      </div> */}
    </div>
  );
}

export default Home;
