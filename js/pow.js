var x = prompt('Введите: число x', 1);
var n = prompt('Введите: степень n > 1', 2);

function pow(x, n) {

	var result;
	for (var i = 1; i < n; i++) {
		result = x * x;
	}
	
	return result; 

}

if ( n <= 1 ) {
	console.log('Введите n > 1');
}
 else if (( x % 1) !== 0 ) {
	console.log('Введите целое число x');
}
 else {
	console.log( pow(x, n) );
}