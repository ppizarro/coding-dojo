/* jslint node:true */
'use strict';

var Board = require('../board.js'),
	Piece = require('../piece.js'),
	King = require('../king.js'),
	Pawn = require('../pawn.js');

describe('Board tests', function () {

	var board;

	beforeEach(function () {
		board = new Board();
	});

	it('should be created', function () {
		expect(board).toEqual(jasmine.any(Board));
	});

	it('should be created empty', function () {	
		expect(board.isEmpty()).toBe(true);
	});

	it('board with one piece it should not be empty', function () {
		var piece = new Piece();
		board.addPiece(piece, 0, 0);
		expect(board.isEmpty()).toBe(false);
	});

	it('add a piece in a position and retrieve the same piece in this position', function () {
		var piece = new Piece();
		board.addPiece(piece, 0, 0);
		expect(board.getPiece(0, 0)).toEqual(piece);
	});

	it('add two pieces and check your positions', function () {
		var piece = new Piece();
		var piece2 = new Piece();
		board.addPiece(piece, 0, 0);
		board.addPiece(piece2, 5, 5);
		expect(board.getPiece(0, 0) === piece).toBe(true);
		expect(board.getPiece(5, 5) === piece2).toEqual(true);
	});

	it('should be retrieve a white king', function () {
		var king = new King(false);
		board.addPiece(king, 0, 0);
		expect(board.whiteKing.row).toEqual(0);
		expect(board.whiteKing.col).toEqual(0);
	});

	it('should be retrieve a black king', function () {
		var king = new King(true);
		board.addPiece(king, 0, 0);
		expect(board.blackKing.row).toEqual(0);
		expect(board.blackKing.col).toEqual(0);
	});

	xit('only one king white and one king black should not be in check', function () {
		var kingWhite = new King(false),
		    kingBlack = new King(true);

		board.addPiece(kingWhite, 0, 3);
		board.addPiece(kingBlack, 7, 3);

		expect(board.checkTheCheck()).toBe(false);
	})

	xit('pawn white check king black', function () {
		var pawnWhite = new Pawn(false),
		    kingBlack = new King(true);

		board.addPiece(pawnWhite, 6, 4);
		board.addPiece(kingBlack, 7, 3);

		expect(board.checkTheCheck()).toBe(true);
	})

	xit('pawn white does not check king black', function () {
		var pawnWhite = new Pawn(false),
		    kingBlack = new King(true);

		board.addPiece(pawnWhite, 6, 4);
		board.addPiece(kingBlack, 7, 4);

		expect(board.checkTheCheck()).toBe(false);
	})
});