/* jslint node:true */
'use strict';

var util = require('util'),
	Piece = require('./piece.js');
	
function Pawn(black) {
	Piece.call(this, black);
};

util.inherits(Pawn, Piece);

Pawn.prototype.threatens = function(pawn, king, board) {
	if (this.black) {
		pawn.row--;
	} else {
		pawn.row++;
	}

 	if (king.row !== pawn.row) {
		return false;	
	}

	if (king.col === pawn.col + 1) {
		return true;
	}

	if (king.col === pawn.col - 1) {
		return true;
	}

	return false;
};

module.exports = Pawn;