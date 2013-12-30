/* jslint node:true */
'use strict';

var Knight = require('../knight.js');

describe('Knight tests', function () {

	it('should be created', function () {
		var knight = new Knight();
		expect(knight).toEqual(jasmine.any(Knight));
	});

	it('should be a black knight', function () {
		var knight = new Knight(true);
		expect(knight.isBlack()).toBe(true);
	});

	it('should be a white knight', function () {
		var knight = new Knight(false);
		expect(knight.isBlack()).toBe(false);
	});

	it('knight does not threaten king', function () {
		var knight = new Knight(false);
		expect(knight.threatens({ row: 2, col: 2 },
			                    { row: 0, col: 0 })).toBe(false);
	});

	it('knight threatens king - top left', function () {
		var knight = new Knight(false);
		expect(knight.threatens({ row: 2, col: 2 },
			                    { row: 4, col: 1 })).toBe(true);
	});

	it('knight threatens king - top right', function () {
		var knight = new Knight(false);
		expect(knight.threatens({ row: 2, col: 2 },
			                    { row: 4, col: 3 })).toBe(true);
	});

	it('knight threatens king - right top', function () {
		var knight = new Knight(false);
		expect(knight.threatens({ row: 2, col: 2 },
			                    { row: 3, col: 4 })).toBe(true);
	});

	it('knight threatens king - right bottom', function () {
		var knight = new Knight(false);
		expect(knight.threatens({ row: 2, col: 2 },
			                    { row: 1, col: 4 })).toBe(true);
	});

	it('knight threatens king - bottom right', function () {
		var knight = new Knight(false);
		expect(knight.threatens({ row: 2, col: 2 },
			                    { row: 0, col: 3 })).toBe(true);
	});

	it('knight threatens king - bottom left', function () {
		var knight = new Knight(false);
		expect(knight.threatens({ row: 2, col: 2 },
			                    { row: 0, col: 1 })).toBe(true);
	});

	it('knight threatens king - left bottom', function () {
		var knight = new Knight(false);
		expect(knight.threatens({ row: 2, col: 2 },
			                    { row: 1, col: 0 })).toBe(true);
	});

	it('knight threatens king - left top', function () {
		var knight = new Knight(false);
		expect(knight.threatens({ row: 2, col: 2 },
			                    { row: 3, col: 0 })).toBe(true);
	});

});