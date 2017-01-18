var globalVariable = 'This is global variable';
function globalFuction (){
	var localVariable = 'This is local variable';
	console.log('Visit global/local variable');
	console.log(globalVariable);
	console.log(localVariable);
	globalVariable = "This is changed variable";
	console.log(globalVariable);
	function localFunction() {
		var innerLocalVariable = 'This is inner local lariable';
		console.log('Visit global/local/inner local variable');
		console.log(globalVariable);
		console.log(localVariable);
		console.log(innerLocalVariable);
	}
	
           localFunction();
}

globalFuction();