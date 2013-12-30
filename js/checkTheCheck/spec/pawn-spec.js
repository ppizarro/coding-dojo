/* jslint node:true */
'use strict';

var Pawn = require('../pawn.js');

describe('Pawn tests', function () {

	it('should be created', function () {
		var pawn = new Pawn();
		expect(pawn).toEqual(jasmine.any(Pawn));
	});

	it('should be a black pawn', function () {
		var pawn = new Pawn(true);
		expect(pawn.isBlack()).toBe(true);
	});

	it('should be a white pawn', function () {
		var pawn = new Pawn(false);
		expect(pawn.isBlack()).toBe(false);
	});

	it('white pawn threatens black king by right diagonal', function () {
		var whitePawn = new Pawn(false);
		expect(whitePawn.threatens({ row: 6, col: 2 },
			                       { row: 7, col: 3 })).toBe(true);
	})

	it('white pawn threatens black king by left diagonal', function () {
		var whitePawn = new Pawn(false);
		expect(whitePawn.threatens({ row: 6, col: 4 },
			                       { row: 7, col: 3 })).toBe(true);
	})

	it('white pawn does not threaten black king', function () {
		var whitePawn = new Pawn(false);
		expect(whitePawn.threatens({ row: 6, col: 3 },
			                       { row: 7, col: 3 })).toBe(false);
	})

	it('black pawn threatens white king by left diagonal', function () {
		var blackPawn = new Pawn(true);
		expect(blackPawn.threatens({ row: 1, col: 2 },
			                       { row: 0, col: 3 })).toBe(true);
	})

	it('black pawn threatens white king by right diagonal', function () {
		var blackPawn = new Pawn(true);
		expect(blackPawn.threatens({ row: 1, col: 4 },
			                       { row: 0, col: 3 })).toBe(true);
	})

	it('black pawn does not threaten white king', function () {
		var blackPawn = new Pawn(true);
		expect(blackPawn.threatens({ row: 1, col: 3 },
			                       { row: 0, col: 3 })).toBe(false);
	})
});