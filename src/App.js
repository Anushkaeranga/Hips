import './App.css';
import React, {useEffect, useState } from "react"; 
import Recipe from './pages/Recipe'
import Concept from './pages/concept'
import Resource from './pages/resource'
import Template from './pages/template'
import Type from './pages/type'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
function App() {

  return (
    <div className="App"> 
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/concept' exact component= {Concept}/>
        <Route path='/resources' component= {Resource}/>
        <Route path='/templates' component= {Template}/>
        <Route path='/types' component= {Type}/>
      </Switch>
    </Router>
    
    </div>
  );
}

export default App;
