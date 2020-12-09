import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getSurveys, activateSurvey, deleteSurvey } from '../../../actions';
import SurveyItem from '../SurveyItem/SurveyItem';

const AllSurveys = ({
  getSurveys,
  allSurveys,
  loading,
  activateSurvey,
  deleteSurvey,
}) => {
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
    surveysElements = allSurveys.map(({ _id, title, subject, activated }) => (
      <SurveyItem
        key={_id}
        title={title}
        subject={subject}
        id={_id}
        activated={activated}
        onDeleteClicked={() => deleteSurvey(_id)}
        onActivateClicked={() => activateSurvey(_id)}
      />
    ));
  }

  return surveysElements;
};

const mapStateToProps = (state) => ({
  allSurveys: state.survey.surveys,
  loading: state.survey.loading,
});

export default connect(mapStateToProps, {
  getSurveys,
  activateSurvey,
  deleteSurvey,
})(AllSurveys);
