import React from 'react';
import { Link } from 'react-router-dom';

const SurveyItem = ({
  title,
  subject,
  id,
  activated,
  onActivateClicked,
  onDeleteClicked,
}) => (
  <div className="row " style={{ marginBottom: '0px' }}>
    <div className="col s12 ">
      <div className="card blue-grey darken-1 z-depth-4">
        <div className="card-content white-text">
          <span className="card-title">{title}</span>

          <div className="row" style={{ marginBottom: '0px' }}>
            <p className="left col s6">{subject}</p>
            <div className="right col s6 right-align">
              {activated ? (
                <div className="">
                  <i className="material-icons">check</i>
                  <span>activated</span>
                </div>
              ) : (
                <button
                  className="waves-effect waves-yellow lime btn-small"
                  onClick={onActivateClicked}
                >
                  Activate
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="card-action">
          <Link
            className="waves-effect blue lighten-1 btn-small"
            to={'/survey/' + id}
          >
            View
          </Link>
          <button
            className="waves-effect waves-red  red  lighten-2 btn-small"
            style={{ margin: '0px 8px' }}
            onClick={onDeleteClicked}
          >
            Delete
          </button>
          {activated ? null : (
            <Link className="waves-effect btn-small" to={'/survey/edit/' + id}>
              Edit
            </Link>
          )}
        </div>
      </div>
    </div>
  </div>
);

export default SurveyItem;
