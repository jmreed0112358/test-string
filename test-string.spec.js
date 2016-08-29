'use strict';

var TestString = require('./test-string'),
	testCases = [
    'Foo Bar',
    'mañana',
    'Iñtërnâtiônàlizætiøn☃💩',
    'Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞'
  ];



describe('length()', function () {
	it('should give correct length for \'Foo Bar\'', function () {
		var testString = new TestString(testCases[0]);
		expect(testString.length()).toEqual(7);
	});

	it('should give correct length for \'mañana\'', function () {
		var testString = new TestString(testCases[1]);
		expect(testString.length()).toEqual(6);
	});

	it('should give correct length for \'Iñtërnâtiônàlizætiøn☃💩\'', function () {
		var testString = new TestString(testCases[2]);
		expect(testString.length()).toEqual(22);
	});

	it('should give correct length for \'Z͑ͫ̓ͪ̂ͫ̽͏̴̙̤̞͉͚̯̞̠͍A̴̵̜̰͔ͫ͗͢L̠ͨͧͩ͘G̴̻͈͍͔̹̑͗̎̅͛́Ǫ̵̹̻̝̳͂̌̌͘!͖̬̰̙̗̿̋ͥͥ̂ͣ̐́́͜͞\'', function () {
		var testString = new TestString(testCases[3]);
		expect(testString.length()).toEqual(6);
	});
});