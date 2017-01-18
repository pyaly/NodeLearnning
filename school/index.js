var klass  = require('./klass');
klass.add('Scott',['高富帅','白富美']) ;
console.log('ssss');
exports.add = function(klasses){
	klasses.forEach(function(item, index) {
		var _klass = item;
		var teacherName  =  item.teacherName;
		var studens = item.studens;
		klass.add(teacherName, studens);
	})
}