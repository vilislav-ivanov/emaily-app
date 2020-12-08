import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSurveys } from '../../../actions';

const AllSurveys = ({ getSurveys, allSurveys, loading }) => {
  useEffect(() => {
    getSurveys();
    /*eslint-disable */
  }, []); /*eslint-enable */

  let surveysElements;

  if (loading) {
    surveysElements = 'Loading....';
  } else if (!loading && allSurveys.length === 0) {
    surveysElements = 'No surveys';
  } else {
    surveysElements = allSurveys.map((survey) => (
      <h3 key={survey.title}>{survey.title}</h3>
    ));
  }

  return surveysElements;
};

const mapStateToProps = (state) => ({
  allSurveys: state.survey.surveys,
  loading: state.survey.loading,
});

export default connect(mapStateToProps, { getSurveys })(AllSurveys);
