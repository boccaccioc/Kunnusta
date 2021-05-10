module.exports = {
	publicPath: "./",
    devServer: {
        proxy: {
          "^/api": {
            //"target": "http://localhost:3000",
            "target": "https://gentle-basin-50134.herokuapp.com",
            changeOrigin: true
          }
        }
      }
};
