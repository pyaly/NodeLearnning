var https = require('https');
var fs  = require('fs');

var options = {
	key: fs.readFileSync('ssh_key.pem'),//同步读出文件  私钥文件
	cret: fs.readFileSync('ssh_cert.pem')//证书文件
};

https
.createServer(options, function(req, res) {
	res.writeHead(200);
	res.end('Hello Imooc');
})
.listen(8090);