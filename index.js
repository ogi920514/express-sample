const moment = require('moment');
const NOW=moment();
console.log(NOW);

const http = require('http');
http.createServer(function (req, res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('OGIHARA\n'+moment());
}).listen(8000,'127.0.0.1');
