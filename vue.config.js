const path = require('path');

const _getPublicPath = () => {
  return process.env.NODE_ENV === 'production'
    ? ( process.env.VUE_APP_BASE_URL ? process.env.VUE_APP_BASE_URL : './' )
    : '/'
}

module.exports = {
  publicPath: _getPublicPath(),
  configureWebpack: {
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, 'src/components/'),
        "@pages": path.resolve(__dirname, 'src/pages/'),
      }
    }
  }
}
