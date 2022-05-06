import * as http from 'http';
// import config from 'config';
import { test } from '@src/sub/example';

http
  .createServer(function (req, res) {
    res.write('Hello World!');
    res.end();
  })
  .listen(9090);

test();

console.log('Server started on port 9090, Happy Hacking');

// console.log(`Default variable: ${config.get('test.defaultVariableThatCanBeOverriden')}`);

// console.log(`Development only: ${config.get('test.developmentOnlyVariable')}`);
