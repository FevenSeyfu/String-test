const {stringLength,reverseString,calculator,capitalize} = require('./index.js');
test('Hello returns 5', ()=>{
  expect(stringLength('Hello')).toBe(5);
});
test('Hellohelloooooocdco throws', () => {
	function teststring(){
		stringLength('Hellohelloooooocdco');
	}
  expect(teststring).toThrow(new Error('String length should be bewteen 1 and 10'));
});

// test task 2
test('hello returns olleh', () => {
  expect(reverseString('hello')).toBe('olleh');
});

// test task 3
const calculate = new calculator;
describe('calculate',() => {
	test('Adding 10 and 12 returns 22', () => {
		expect(calculate.add(10,12)).toBe(22);
	});
	test('substracting 5 from 10 returns 5', () => {
		expect(calculate.subtract(10,5)).toBe(5);
	});
	test('Dividing 10 by 2 returns 5', () => {
		expect(calculate.divide(10,2)).toBe(5);
	});
	test('Multipling 10 by 5 returns 50', () => {
		expect(calculate.multiply(10,5)).toBe(50);
	});
});

// test task 4
test('hello returns Hello', ()=>{
  expect(capitalize('hello')).toBe('Hello');
});
test('world returns World', ()=>{
  expect(capitalize('world')).toBe('World');
});