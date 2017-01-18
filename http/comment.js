var http  =require('http');
var querystring  = require('querystring');
var postData = querystring.stringify({
	'content':'wonderful！',
	'cid':348
});

var options  ={
	hostname:'www.imooc.com',
	port:80,
	path:'/course/docomment',
	method:'POST',
	headers:{
		'Accept':'application/json, text/javascript, */*; q=0.01',
		'Accept-Encoding':'gzip, deflate',
		'Accept-Language':'zh-CN,zh;q=0.8',
		'Connection':'keep-alive',
		'Content-Length':postData.length,
		'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
		'Cookie':'imooc_uuid=403eed12-6c94-4e62-912b-ef8b4620079a; imooc_isnew_ct=1484272211; loginstate=1; apsid=MwYmVlNmY2NzY3YTRhNzYxOGI5MWMxNTMxZGU0ZWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTAxMTM2NgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5OTE1MjY0NDJAcXEuY29tAAAAAAAAAAAAAAAAAAAAADJjMzk2Mjc5ZmJjNjI2OTBiYmRlZjQyOWI1MmE0ZmZkOkh4WDpIeFg%3DOG; last_login_username=991526442%40qq.com; PHPSESSID=40a1ikbeaiu63p1r9u16qrd183; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1484272194,1484529968,1484618225,1484703939; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1484722160; imooc_isnew=2; cvde=587ec8d9bff62-49',
		'Host':'www.imooc.com',
		'Origin':'http://www.imooc.com',
		'Referer':'http://www.imooc.com/comment/348',
		'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36',
		'X-Requested-With':'XMLHttpRequest'
	}
};

var req  =http.request(options, function(res) {
	console.log('Status: ' + res.statusCode);
	console.log('headers: ' + JSON.stringify(res.headers));
	res.on('data', function(chunk) {
		console.log(Buffer.isBuffer(chunk));
		console.log(typeof  chunk);
	});
	res.on('end',function() {
		console.log('评论完毕！');
	});	
});
req.on('error', function (e) {
		console.log('Error: ' + e.message);
	});

	req.write(postData);
	req.end();
