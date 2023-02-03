module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://localhost:9898',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
            '^/api': ''
          }
        },
        '/foo': {
          target: '<other_url>'
        }
      }
    }
  }