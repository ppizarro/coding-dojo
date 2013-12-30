/* jslint node:true */
'use strict';

var King = require('./king.js');

var Board = function () {
	this.pieces = [];
	for (var row = 0; row < 8; row++) {
		this.pieces[row] = [];
	}
	this.whiteKing = { inCheck: false };
	this.blackKing = { inCheck: false };
};

Board.prototype.isEmpty = function() {
	return this.pieces.every(function (cols) {
		return cols.length === 0;
	});
};

Board.prototype.addPiece = function(piece, row, col) {
	if (piece instanceof King) {
		if (piece.isBlack()) {
			this.blackKing.row = row;
			this.blackKing.col = col;
		} else {
			this.whiteKing.row = row;
			this.whiteKing.col = col;
		}
	}
	this.pieces[row][col] = piece;
};

Board.prototype.getPiece = function(row, col) {
	var cols = this.pieces[row];
	if (cols === undefined) return;
	return cols[col];
};

Board.prototype.checkTheCheck = function() {
	var that = this;
	return this.pieces.some(function (cols, row) {
		return cols.some(function (piece, col) {
			if (piece.threatens({ row: row, col: col },
				                piece.isBlack() ? that.whiteKing : that.blackKing,
				                that)) {
				if (piece.isBlack()) {
					that.whiteKing.inCheck = true;
				} else {
					that.blackKing.inCheck = true;
				}
				return true;
			}
		});
	});
};

module.exports = Board;
