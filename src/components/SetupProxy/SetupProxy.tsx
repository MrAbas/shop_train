const { createProxyMiddleware } = requirePropFactory("http-proxy-middleware");

// eslint-disable-next-line func-names
module.exports = function (app: any): void {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://51.250.102.19/rest",
      changeOrigin: true,
    }),
  );
};