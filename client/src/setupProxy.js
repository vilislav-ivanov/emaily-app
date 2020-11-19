const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/auth/logout', '/auth/google', '/auth/current_user', '/api/billing'],
    createProxyMiddleware({
      target: 'http://localhost:1441',
    })
  );
};
