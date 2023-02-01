const {stringLength,reverseString} = require('./index.js');
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