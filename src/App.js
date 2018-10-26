import React, { Component } from 'react';
import './App.css';
import earthquake  from './components/earthquake';
import animal from './components/animal';
import anime from './components/anime';
import bitcoin from './component/bitcoin';
import crime from './component/crime';
import enviro from './component/enviro';
import main from './component/main';
import trump from './component/trump';

class App extends Component {
  render() {
    return (
      <div className="App">
        <earthquake />
        <animal />
        <anime />
        <bitcoin />
        <crime />
        <enviro />
        <main />
        <trump />
      </div>
    );
  }
}

export default App;
