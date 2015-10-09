var express          = require('express'),
    app              = express(),
    webpack          = require('webpack'),
    WebpackDevServer = require('webpack-dev-server'),
    config           = require('./webpack.config.js'),
    port             = process.env.PORT || 3000;

app.use(express.static('./public'));
app.listen(port);

require('./app/routes')(app);

console.log('Server is running at http://localhost:%s', port);
