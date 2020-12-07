import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setAuthUser } from '../actions';
import Layout from '../components/Layout/Layout';
import Home from './Home/Home';
import AddSurvey from './AddSurvey/AddSurvey';
import AddCredits from './AddCredits/AddCredits';

const App = ({ setAuthUser }) => {
  useEffect(() => {
    setAuthUser();
  }, [setAuthUser]);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/add-survey">
            <AddSurvey />
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

export default connect(null, { setAuthUser })(App);
