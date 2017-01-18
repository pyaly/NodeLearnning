var pet  = {
	words: '...',
	speak: function(say) {
		console.log(say +' ' + this.words);
	}
};
pet.speak('Speak'); //Speak ...

var dog = {
	words: 'Wang'
};
 pet.speak.call(dog,'Speak');//Speak Wang