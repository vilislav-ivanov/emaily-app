import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Navigation = ({ auth }) => {
  const guessLinks = (
    <li>
      <a href="http://localhost:1441/auth/google">Login with google</a>
    </li>
  );
  const userLinks = (
    <Fragment>
      <li>
        <Link to="/add-credits" className="">
          Add Credits
        </Link>
      </li>
      <li>
        <Link to="/add-credits" className="waves-effect waves-light btn">
          Credits: {auth.user ? auth.user.credits : null}
        </Link>
      </li>
      <li>
        <a href="http://localhost:1441/auth/logout">Logout</a>
      </li>
    </Fragment>
  );
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Logo
        </Link>
        <ul id="nav-mobile" className="right">
          {auth.isAuthenticated ? userLinks : guessLinks}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Navigation);
