import React from 'react';
import axios from 'axios';
import './App.css';
import Feelings from '../Form/Feelings/Feelings';
import Sleep from '../Form/Sleep/Sleep';
import Journal from '../Form/Journal/Journal';
import Meals from '../Form/Meals/Meals';
import Review from '../Form/Review/Review';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Feelings />
      <Sleep />
      <Meals />
      <Journal />
      <Review />
    </div>
  );
}

export default App;
