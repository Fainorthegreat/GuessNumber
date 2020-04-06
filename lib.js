(function () {

	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	};

	let tryCounter = 10;
	let random = Math.floor(Math.random() * 1000) + 1;
	window.start = function () {
		do {
			tryCounter--
			parseInt(accept = prompt('Привет друг! Я хочу поиграть с тобой в игру. Я загадал число от 1 до 1000. Попробуй угадать!'))
			if (accept === 0 || accept === null || tryCounter == 0) {
				break
			} else if (!isNumber(accept)) {
				tryCounter++
				alert('Введите число!')
			} else if (accept < random) {
				alert('Больше! Вы можете попробовать еще ' + tryCounter + ' раз!');
			} else if (accept > random) {
				alert('Меньше! Вы можете попробовать еще ' + tryCounter + ' раз!');
			}
		} while (accept != random) {
			if (accept === 0 || accept === null) {
				alert('Игра окончена')
			} else if (tryCounter == 0) {
				let playAgain = confirm('Вы исчерпали все попытки! Хотите начать играть еще раз?')
				if (playAgain == true) {
					start()
				} else {
					alert('Спасибо за игру!')
				}
			} else {
				alert('Правильно!')
			};
		}
	}
})()

