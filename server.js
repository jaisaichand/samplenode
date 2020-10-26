const http = require('http');
const app = require('./app');




const port = process.env.PORT || 3010;
const server = http.createServer(app);
//here we are passing app as handler for creating a server, and app will qualify as a valid handler for server
server.listen(port, function () {
    console.log('server started on port ' + port);
})