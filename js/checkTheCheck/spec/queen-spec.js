/* jslint node:true */
'use strict';

var Queen = require('../queen.js');

describe('Queen tests', function () {

	it('should be created', function () {
		var queen = new Queen();
		expect(queen).toEqual(jasmine.any(Queen));
	});

	it('should be a black queen', function () {
		var queen = new Queen(true);
		expect(queen.isBlack()).toBe(true);
	});

	it('should be a white queen', function () {
		var queen = new Queen(false);
		expect(queen.isBlack()).toBe(false);
	});

	it('queen does not threatens king', function () {
		var queen = new Queen(false);
		expect(queen.threatens({ row: 2, col: 2 },
			                   { row: 4, col: 1 })).toBe(false);
	});

	it('queen threatens king by top right diagonal without any piece beetwen them', function () {
		var queen = new Queen(false);
		expect(queen.threatens({ row: 2, col: 2 },
			                   { row: 4, col: 4 })).toBe(true);
	});

	it('queen threatens king by top left diagonal without any piece beetwen them', function () {
		var queen = new Queen(false);
		expect(queen.threatens({ row: 2, col: 2 },
			                   { row: 4, col: 0 })).toBe(true);
	});

	it('queen threatens king by bottom right diagonal without any piece beetwen them', function () {
		var queen = new Queen(false);
		expect(queen.threatens({ row: 2, col: 2 },
			                   { row: 0, col: 4 })).toBe(true);
	});

	it('queen threatens king by bottom left diagonal without any piece beetwen them', function () {
		var queen = new Queen(false);
		expect(queen.threatens({ row: 2, col: 2 },
			                   { row: 0, col: 0 })).toBe(true);
	});

	it('queen threatens king by top column without any piece on the same row', function () {
		var queen = new Queen(false);
		expect(queen.threatens({ row: 2, col: 2 },
			                   { row: 4, col: 2 })).toBe(true);
	});

});