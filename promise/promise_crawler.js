var http  = require('http');
var Promise = require('bluebird');
var cheerio  =require('../http/node_modules/cheerio'); //先npm install cheerio
var baseUrl = 'http://www.imooc.com/learn/'
//var url  = 'http://www.imooc.com/learn/348';
var videoIds = ['348','259','197'];
//var videoIds = ['348','259','197','134','75'];
function filterChapters(html) {
	var  $ = cheerio.load(html);
	
	var chapters = $('.chapter');
	var courseData = [];
	var title = $('.course-infos h2').text();	
	var courseData  = {
			title:title,			
			videos:[]		
	};

 	chapters.each(function(item) {
 		var chapter  = $(this);
 		var chapterTitle = chapter.find('strong').contents().filter(function(){
 			return this.nodeType ==3;
 		}).text();		
 		var videos = chapter.find('ul').children('li');
 		var chapterData = {
 			chapterTitle: chapterTitle.trim(),
 			videos:[]
 		};
 		videos.each(function(item) {
 			var video = $(this).find('.J-media-item');
 			var videoTitle  =video.contents().filter(function(){return this.nodeType ==3;}).text();
 			var id  = video.attr('href').split('video/')[1];
 			chapterData.videos.push({
 				title: videoTitle.trim().replace(' ',''),
 				id:id
 			});
 		});
 		courseData.videos.push(chapterData);
 	})
 	//console.log(courseData.videos);
 	return courseData;

}
/*  数据结构
[{
	title:title,
	number:number,
	videos:[{
	 	chapterTitle:'',
	 	videos:[
	 		{
	 			title:'',
	 			id:''
	 		}
	 	]
	 }]
}]*/
function printCourseInfo(coursesData) {
	coursesData.forEach(function(courseData){
		console.log('###'+courseData.title+'\n');
		courseData.videos.forEach(function(item){
			console.log('xxxxxxxxxxxxxxxxxxxx');
			var chapterTitle = item.chapterTitle;		
			console.log(chapterTitle);
			item.videos.forEach(function(video) {
			console.log('【'+video.id+'】'+ video.title);
			});
		});
	});	
}

function getPageAsnc(url) {
	return new Promise(function(resolve,reject){
		console.log('正在爬取'+url);
		http.get(url, function(res) {
			var html = '';
			res.on('data',function(data){
		                 html += data;
			});
			res.on('end', function() {
				resolve(html);
			})
		}).on('error', function() {
			reject(e);
			console.log('获取课程数据出错!');
		});
	})
}

var fetchCourseArray = [];
videoIds.forEach(function(id) {
	fetchCourseArray.push(getPageAsnc(baseUrl + id));
});
Promise
	.all(fetchCourseArray)
	.then(function(pages) {
		var courseData = [];
		pages.forEach(function(html) {
			var courses = filterChapters(html);
			courseData.push(courses);			
		});
		courseData.sort(function(a,b) {
			return a.num< b.num;
		});
		printCourseInfo(courseData);
	});
