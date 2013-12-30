/* jslint node:true */
'use strict';

var util = require('util'),
	Piece = require('./piece.js');

function Queen(black) {
	Piece.call(this, black);
};

util.inherits(Queen, Piece);

Queen.prototype.threatens = function(queen, king, pieces) {
	if (this.threatensByRow(queen, king, pieces)) {
		return true;
	}

	if (this.threatensByColumn(queen, king, pieces)) {
		return true;
	}

	if (this.threatensByTopRightDiagonal(queen, king, pieces)) {
		return true;
	}

	if (this.threatensByTopLeftDiagonal(queen, king, pieces)) {
		return true;
	}

	if (this.threatensByBottomRightDiagonal(queen, king, pieces)) {
		return true;
	}

	if (this.threatensByBottomLeftDiagonal(queen, king, pieces)) {
		return true;
	}
	
	return false;
};

module.exports = Queen;