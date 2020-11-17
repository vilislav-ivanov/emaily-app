const passport = require('passport');

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile'] })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req, res) => {
      console.log('WTAAAAA');

      res.redirect('/');
    }
  );

  app.get('/auth/current_user', (req, res) => {
    return res.json({ user: req.user });
  });

  app.get('/auth/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
};
