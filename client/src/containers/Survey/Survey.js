import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

import { getSingleSurvey } from '../../actions';

const Survey = ({ survey, loading, getSingleSurvey }) => {
  const history = useHistory();
  const { surveyId } = useParams();

  useEffect(() => {
    getSingleSurvey(surveyId);
    /*eslint-disable */
  }, []); /*eslint-enable */

  if (!surveyId) {
    history.push('/');
  }

  let surveyElement;

  if (survey && !loading) {
    surveyElement = (
      <div>
        <h1>{survey.title}</h1>
        <h1>{survey.subject}</h1>
        <h1>{survey.body}</h1>
        ....
      </div>
    );
  } else {
    surveyElement = <h1>Loading...</h1>;
  }

  return surveyElement;
};

const mapStateToProps = (state) => ({
  survey: state.survey.survey,
  loading: state.survey.loading,
});

export default connect(mapStateToProps, { getSingleSurvey })(Survey);
