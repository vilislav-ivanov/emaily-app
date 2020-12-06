import React from 'react';

import { connect } from 'react-redux';

const Home = ({ auth }) => {
  const greetings = auth.loading ? (
    <p>some loading...</p>
  ) : auth.user ? (
    <h1>Hello there, user {auth.user._id}</h1>
  ) : (
    <h1>Hello there, unknown</h1>
  );

  return <div>{greetings}</div>;
};

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Home);
