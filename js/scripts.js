(function() {
	'use strict'
	// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, 
	// возвращая новый массив.
	let arrFirst = [1, 2, 3, 4, 5, 6];
	
	function fn(num) {
		return num * 2;
	}

	function map(fn, array) {
		let arrSecond = [];
		for (let i = 0; i < array.length; i++) {
			arrSecond[i] = fn(array[i])
		}
		return arrSecond;
	}
	document.write((arrFirst) + ' массив arrFirst'+ '<br>');
	document.write(map(fn, arrFirst)+ ' массив arrSecond' );
})();