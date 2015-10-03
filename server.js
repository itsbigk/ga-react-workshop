var express          = require('express'),
    app              = express(),
    webpack          = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config           = require('./webpack.config.js'),
    port             = process.env.PORT || 3000;

app.use(express.static('./public'));
app.listen(port);

new WebpackDevServer(webpack(config), {
  historyApiFallback: true,
  proxy: {
    '*': 'http://localhost:3000'
  },
  stats: {
    colors: true
  }
}).listen(3001, 'localhost', function(err, result) {
  if(err) {
    console.log(err);
  }
  console.log('Server is running at http://localhost:%s', port);
});
