/* jslint node:true */
'use strict';

var King = require('../king.js');

describe('King tests', function () {

	it('should be created', function () {
		var king = new King();
		expect(king).toEqual(jasmine.any(King));
	});

	it('should be a king black', function () {
		var king = new King(true);
		expect(king.isBlack()).toBe(true);
	});
});