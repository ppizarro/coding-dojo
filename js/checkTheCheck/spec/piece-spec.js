/* jslint node:true */
'use strict';

var Piece = require('../piece.js');

describe('Piece tests', function () {

	it('should be created', function () {
		var piece = new Piece();
		expect(piece).toEqual(jasmine.any(Piece));
	});

	it('should be a black piece - default', function () {
		var piece = new Piece();
		expect(piece.isBlack()).toBe(true);
	});

	it('should be a black piece', function () {
		var piece = new Piece(true);
		expect(piece.isBlack()).toBe(true);
	});

	it('should be a white piece', function () {
		var piece = new Piece(false);
		expect(piece.isBlack()).toBe(false);
	});

});