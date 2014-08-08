var connect = require('connect');
var serveStatic = require('serve-static');

var app = connect();

//console.log("__dirname",__dirname);

app.use(serveStatic(__dirname, {'index': ['index.html']}));
app.listen(3000);