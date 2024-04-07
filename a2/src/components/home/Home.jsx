import React from 'react';
import { Link, Route } from 'react-router-dom';
import Results from './results/Results';
import Standings from './standings/Standings';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <Link to="/home/results" >Results</Link>
        <Link to="/home/standings" >Standings</Link>
      </div>

      <div>
        <Route path="/home/results">
          <Results />
        </Route>
        <Route path="/home/standings">
          <Standings />
        </Route>
      </div>
    </div>
  );
}

export default Home;
