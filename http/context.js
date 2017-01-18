/*var pet = {
	words:'...',
	speak:function() {
		console.log(this.words);
		console.log(this === pet);
	}
};
pet.speak();//true*/

/*function pet(words) {
	this.words = words;
	console.log(this.words);
	//console.log(this);
	console.log(this === global);//true
}

pet('...');*/

function pet(words) {
	this.words = words;
	this.speak = function() {
		console.log(this.words);
		console.log(this);
	}
}

var cat = new pet('Miao');
cat.speak();
//result:
//Miao
//pet { words: 'Miao', speak: [Function] }