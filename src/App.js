import React, { Component } from 'react';
import './App.css';
import Animal from './components/Animal';
import Earthquake  from './components/Earthquake';
import Anime from './components/Anime';
import Bitcoin from './components/Bitcoin';
import Crime from './components/Crime';
import Enviro from './components/Enviro';
import Main from './components/Main';
import Trump from './components/Trump';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Animal />
        <Earthquake />
        <Anime />
        <Bitcoin />
        <Crime />
        <Enviro />
        <Main />
        <Trump />
      </div>
    );
  }
}

export default App;
