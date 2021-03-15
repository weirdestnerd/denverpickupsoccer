const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
      '/api',
      createProxyMiddleware({
        // TODO: update `target` when server is deployed
        target: 'http://localhost:3000',
        changeOrigin: true,
      })
  );
};
