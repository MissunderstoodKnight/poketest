import Axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from './Components/Home'
import Detail from './Components/Detail'


function App() {

  return (
    <Switch>
      <Route exact path='/' render={Home} />
      <Route exact path='/:pokemonid' render={Detail}/>
    </Switch>
  );
}

export default App;
