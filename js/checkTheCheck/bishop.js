/* jslint node:true */
'use strict';

var util = require('util'),
	Piece = require('./piece.js');

function Bishop(black) {
	Piece.call(this, black);
};

util.inherits(Bishop, Piece);

Bishop.prototype.threatens = function (bishop, king, pieces) {
	pieces = pieces || [];

	if (bishop.row === king.row ||
		bishop.col === king.col) {

		return false;
	}

	if (this.threatensByTopRightDiagonal(bishop, king, pieces)) {
		return true;
	}

	if (this.threatensByTopLeftDiagonal(bishop, king, pieces)) {
		return true;
	}

	if (this.threatensByBottomRightDiagonal(bishop, king, pieces)) {
		return true;
	}

	if (this.threatensByBottomLeftDiagonal(bishop, king, pieces)) {
		return true;
	}

	return false;
};

module.exports = Bishop;