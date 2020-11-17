import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { setAuthUser } from '../../actions';

const Home = ({ auth, setAuthUser }) => {
  useEffect(() => {
    setAuthUser();
  }, [setAuthUser]);

  const greetings = auth.loading ? (
    <p>some loading...</p>
  ) : auth.user ? (
    <h1>Hello there, user {auth.user._id}</h1>
  ) : (
    <h1>Hello there, unknown</h1>
  );

  return (
    <div>
      {greetings}
      <li>
        <a href="http://localhost:1441/auth/google">Login With Google</a>
      </li>
      <br />
      <li>
        <a href="http://localhost:1441/auth/logout">Logout</a>
      </li>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps, { setAuthUser })(Home);
