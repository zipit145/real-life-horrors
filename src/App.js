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
  constructor(){
    super();
    this.state = {
      earthquake: []
    }
  }
  async componentDidMount() {
    const response = await fetch('https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2014-01-01&endtime=2014-01-02')
    const json = await response.json()
    this.setState({
      earthquake: json
    })
    console.log(this.state.earthquake)
  }
  
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
