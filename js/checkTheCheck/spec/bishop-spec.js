/* jslint node:true */
'use strict';

var Bishop = require('../bishop.js'),
	Piece = require('../piece.js');

describe('Bishop tests', function () {

	it('should be created', function () {
		var bishop = new Bishop();
		expect(bishop).toEqual(jasmine.any(Bishop));
	});

	it('should be a black bishop', function () {
		var bishop = new Bishop(true);
		expect(bishop.isBlack()).toBe(true);
	});

	it('should be a white bishop', function () {
		var bishop = new Bishop(false);
		expect(bishop.isBlack()).toBe(false);
	});

	it('bishop does not threaten king - on the same row', function () {
		var bishop = new Bishop(false);
		expect(bishop.threatens({ row: 7, col: 0 },
			                    { row: 7, col: 3 })).toBe(false);
	});

	it('bishop does not threaten king - on the same column', function () {
		var bishop = new Bishop(false);
		expect(bishop.threatens({ row: 6, col: 3 },
			                    { row: 7, col: 3 })).toBe(false);
	});

	it('bishop threatens king by top left diagonal without any piece beetwen them', function () {
		var bishop = new Bishop(false);
		expect(bishop.threatens({ row: 6, col: 4 },
			                    { row: 7, col: 3 })).toBe(true);
	});

	it('bishop threatens king by bottom right diagonal without any piece beetwen them', function () {
		var bishop = new Bishop(false);
		expect(bishop.threatens({ row: 7, col: 3 },
			                    { row: 6, col: 4 })).toBe(true);
	});

	it('bishop threatens king by bottom left diagonal without any piece beetwen them', function () {
		var bishop = new Bishop(false);
		expect(bishop.threatens({ row: 7, col: 3 },
			                    { row: 6, col: 2 })).toBe(true);
	});

	it('bishop does not threatens king by diagonal', function () {
		var bishop = new Bishop(false);
		expect(bishop.threatens({ row: 6, col: 0 },
			                    { row: 7, col: 3 })).toBe(false);
	});

	it('bishop does not threaten king by top right diagonal because there is a piece beetwen them', function () {
		var bishop = new Bishop(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[bishop,    undefined, undefined],
					  [undefined, piece,     undefined],
					  [undefined, undefined, king]];

		expect(bishop.threatens({ row: 0, col: 0 },
			                    { row: 2, col: 2 },
			                    pieces)).toBe(false);
	});

	it('bishop does not threaten king by top left diagonal because there is a piece beetwen them', function () {
		var bishop = new Bishop(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[undefined, undefined, bishop],
					  [undefined, piece,     undefined],
					  [king,      undefined, undefined]];

		expect(bishop.threatens({ row: 0, col: 2 },
			                    { row: 2, col: 0 },
			                    pieces)).toBe(false);
	});

	it('bishop does not threaten king by bottom left diagonal because there is a piece beetwen them', function () {
		var bishop = new Bishop(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[king,      undefined, undefined],
					  [undefined, piece,     undefined],
					  [undefined, undefined, bishop]];

		expect(bishop.threatens({ row: 2, col: 2 },
			                    { row: 0, col: 0 },
			                    pieces)).toBe(false);
	});

	it('bishop does not threaten king by bottom right diagonal because there is a piece beetwen them', function () {
		var bishop = new Bishop(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[undefined, undefined, king],
					  [undefined, piece,     undefined],
					  [bishop,    undefined, undefined]];

		expect(bishop.threatens({ row: 2, col: 0 },
			                    { row: 0, col: 2 },
			                    pieces)).toBe(false);
	});

});