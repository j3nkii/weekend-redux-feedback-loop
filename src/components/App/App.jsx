import React from 'react';
import './App.css';
import Feelings from '../Form/Feelings/Feelings';
import Sleep from '../Form/Sleep/Sleep';
import Journal from '../Form/Journal/Journal';
import Meals from '../Form/Meals/Meals';
import Review from '../Form/Review/Review';
import Submit from '../Form/Submit/Submit'
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
    <Router>

      <Route path="/" exact>
        <Feelings />
      </Route>

      <Route path="/sleep" exact>
        <Sleep />
      </Route>

      <Route path="/meals" exact>
        <Meals />
      </Route>

      <Route path="/journal" exact>
        <Journal />
      </Route>

      <Route path="/review" exact>
        <Review />
      </Route>

      <Route path="/submit" exact>
        <Submit />
      </Route>

    </Router>
    </div>
  );
}

export default App;
