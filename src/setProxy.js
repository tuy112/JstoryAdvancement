const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function (app) {
    app.use(
        '/',
        createProxyMiddleware({
            target: 'http://localhost:10047',
            changeOrigin: true,
        })
    );
};
