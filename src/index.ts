import * as http from 'http';

//create a server object:
http
  .createServer(function (req, res) {
    console.log('lalalala');
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
  })
  .listen(9090); //the server object listens on port 8080
