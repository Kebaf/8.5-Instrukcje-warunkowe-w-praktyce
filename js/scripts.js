var a = 0,
b = 32,
value = (a * a) + (2 * a * b) - (b * b);
console.log('Wynik działania (a * a) + (2 * a * b) - (b * b) gdzie a: ' + a + ' i b: ' + b + ' wynosi: ' + value);
if (value > 0) {
	console.log('Wynik jest dodatni')
} else if (value < 0) {
	console.log('Wynik jest ujemny')
} else if (value == 0) {
	console.log('Wynik jest równy 0')
}