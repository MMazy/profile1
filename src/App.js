import React, { Component } from 'react';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

class App extends Component {
  // constructor(){
  //   super();
  //   //this.state =initialState; 
  // }
  render(){
    return (
      <div className="App">
        <Home/>
        <Navigation/>
        <About/>
        <Projects/>
        <Contact/>
        <Footer/> 
      </div>
    );
  }
}

export default App;
