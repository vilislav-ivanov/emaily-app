import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home/Home';
import About from './About/About';
import Products from './Products/Products';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
