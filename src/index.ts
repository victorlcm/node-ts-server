import * as http from 'http';

http
  .createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
  })
  .listen(9090);

console.log('Server started on port 9090, Happy Hacking!');
