/* jslint node:true */
'use strict';

var Rook = require('../rook.js'),
	Piece = require('../piece.js');

describe('Rook tests', function () {

	it('should be created', function () {
		var rook = new Rook();
		expect(rook).toEqual(jasmine.any(Rook));
	});

	it('should be a black rook', function () {
		var rook = new Rook(true);
		expect(rook.isBlack()).toBe(true);
	});

	it('should be a white rook', function () {
		var rook = new Rook(false);
		expect(rook.isBlack()).toBe(false);
	});

	it('rook threatens king by row without any piece on the same row', function () {
		var rook = new Rook(false);
		expect(rook.threatens({ row: 7, col: 0 },
			                  { row: 7, col: 3 })).toBe(true);
	});

	it('rook threatens king by column without any piece on the same column', function () {
		var rook = new Rook(false);
		expect(rook.threatens({ row: 0, col: 3 },
			                  { row: 7, col: 3 })).toBe(true);
	});

	it('rook does not threaten king neither by row or by column', function () {
		var rook = new Rook(false);
		expect(rook.threatens({ row: 6, col: 0 },
			                  { row: 7, col: 3 })).toBe(false);
	});

	it('rook does not threaten king by row because there is a piece beetwen them - R P K', function () {
		var rook = new Rook(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[rook, piece, king]];

		expect(rook.threatens({ row: 0, col: 0 },
			                  { row: 0, col: 2 },
			                  pieces)).toBe(false);
	});

	it('rook does not threaten king by row because there is a piece beetwen them - K P R', function () {
		var rook = new Rook(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[king, piece, rook]];

		expect(rook.threatens({ row: 0, col: 2 },
			                  { row: 0, col: 0 },
			                  pieces)).toBe(false);
	});

	it('rook threatens king by row because there is not a piece beetwen them - P R K', function () {
		var rook = new Rook(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[piece, rook, king]];

		expect(rook.threatens({ row: 0, col: 1 },
			                  { row: 0, col: 2 },
			                  pieces)).toBe(true);
	});

	it('rook threatens king by row because there is not a piece beetwen them - R K P', function () {
		var rook = new Rook(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[rook, king, piece]];

		expect(rook.threatens({ row: 0, col: 0 },
			                  { row: 0, col: 1 },
			                  pieces)).toBe(true);
	});

	it('rook does not threaten king by column because there is a piece beetwen them - R P K', function () {
		var rook = new Rook(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[rook],
			          [piece],
			          [king]];

		expect(rook.threatens({ row: 0, col: 0 },
			                  { row: 2, col: 0 },
			                  pieces)).toBe(false);
	});

	it('rook does not threaten king by column because there is a piece beetwen them - K P R', function () {
		var rook = new Rook(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[king],
			          [piece],
			          [rook]];

		expect(rook.threatens({ row: 2, col: 0 },
			                  { row: 0, col: 0 },
			                  pieces)).toBe(false);
	});

	it('rook threatens king by column because there is not a piece beetwen them - P R K', function () {
		var rook = new Rook(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[piece],
			          [rook],
			          [king]];

		expect(rook.threatens({ row: 1, col: 0 },
			                  { row: 2, col: 0 },
			                  pieces)).toBe(true);
	});

	it('rook threatens king by column because there is not a piece beetwen them - R K P', function () {
		var rook = new Rook(false),
		    piece = new Piece(true),
		    king = new Piece(true),
			pieces = [[rook],
			          [king],
			          [piece]];

		expect(rook.threatens({ row: 0, col: 0 },
			                  { row: 1, col: 0 },
			                  pieces)).toBe(true);
	});

});