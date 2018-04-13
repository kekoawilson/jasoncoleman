import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import One from './components/One/One'
import Two from './components/Two/Two'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Intro/>
        <One/>
        <Two/>
        <Portfolio/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
