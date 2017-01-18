var EventEmitter = require('events').EventEmitter;
var life = new EventEmitter();
//addEventListener
life.setMaxListeners(15);  //设置最大监听数
function grape(who) {
	console.log(' Give '+ who + ' grape');
}

life.on('seek comfort',function(who) {
	console.log(' Give  '+who+ ' water');
});

life.on('seek comfort',function(who) {
	console.log(' Give '+who + ' apple');
});
life.on('seek comfort',function(who) {
	console.log(' Give '+ who + ' banana');
});
life.on('seek comfort',function(who) {
	console.log(' Give '+ who + ' pears');
});
life.on('seek comfort',function(who) {
	console.log(' Give '+ who + ' bread');
});
life.on('seek comfort',function(who) {
	console.log(' Give '+ who + ' candy');
});
life.on('seek comfort',function(who) {
	console.log(' Give '+ who + ' orange');
});
life.on('seek comfort',function(who) {
	console.log(' Give '+ who +'lemon');
});
life.on('seek comfort',function(who) {
	console.log(' Give '+ who + ' mango');
});
life.on('seek comfort',function(who) {
	console.log(' Give '+ who + ' watermelon');
});
life.on('seek comfort',function(who) {
	console.log(' Give '+ who + ' peach');
});
life.on('seek favor',function(who) {
	console.log(' Give '+ who + ' money');
});
life.on('seek comfort',grape);
//life.removeListener('seek comfort',grape);//移除某一个
//life.removeAllListeners();//移除所有监听
life.removeAllListeners('seek comfort');//移除某一类

/*life.removeListener('seek favor', function(who) {
	console.log(' Give '+ who + ' money');
})*/ //这样移除无效

var hasConforListener = life.emit('seek comfort','boy');
var hasFavoredListener = life.emit('seek favor', 'girl');
console.log(hasConforListener);
console.log(hasFavoredListener);

console.log(life.listeners('seek comfort').length);//获取监听的数量
console.log(EventEmitter.listenerCount(life,'seek comfort'));


