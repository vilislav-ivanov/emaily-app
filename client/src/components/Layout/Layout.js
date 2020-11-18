import React from 'react';

import Navigation from '../UI/Navigation/Navigation';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
