import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { setAuthUser } from '../actions';
import Layout from '../components/Layout/Layout';
import Home from './Home/Home';
import CreateSurvey from './Survey/CreateSurvey/CreateSurvey';
import AllSurveys from './Survey/AllSurveys/AllSurveys';
import AddCredits from './AddCredits/AddCredits';
import Survey from './Survey/Survey';

const App = ({ setAuthUser }) => {
  useEffect(() => {
    setAuthUser();
  }, [setAuthUser]);

  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/create-survey">
            <CreateSurvey editing={false} />
          </Route>
          <Route path="/surveys">
            <AllSurveys />
          </Route>
          <Route path="/survey/edit/:surveyId">
            <CreateSurvey editing={true} />
          </Route>
          <Route path="/survey/:surveyId">
            <Survey />
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
