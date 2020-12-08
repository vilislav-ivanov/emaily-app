import React from 'react';
import { Link } from 'react-router-dom';

const SurveyItem = ({ title, subject, id }) => (
  <div className="row " style={{ marginBottom: '0px' }}>
    <div className="col s12 ">
      <div className="card blue-grey darken-1 z-depth-4">
        <div className="card-content white-text">
          <span className="card-title">{title}</span>

          <div className="row" style={{ marginBottom: '0px' }}>
            <p className="left col s6">{subject}</p>
            <div className="right col s6 right-align">
              <Link
                className="waves-effect blue lighten-1 btn-small"
                to={'/survey/' + id}
              >
                View
              </Link>
              <Link
                className="waves-effect btn-small"
                to={'/survey/edit/' + id}
                style={{ margin: '0px 8px' }}
              >
                Edit
              </Link>
              <button className="waves-effect waves-red  red  lighten-2 btn-small">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SurveyItem;
