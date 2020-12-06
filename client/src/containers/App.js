import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from '../components/Layout/Layout';
import Home from './Home/Home';
import About from './About/About';
import AddCredits from './AddCredits/AddCredits';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/add-credits">
            <AddCredits />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
