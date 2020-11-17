const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    ['/auth/logout', '/auth/google'],
    createProxyMiddleware({
      target: 'http://localhost:1441',
    })
  );
};