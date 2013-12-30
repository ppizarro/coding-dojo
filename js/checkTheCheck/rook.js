/* jslint node:true */
'use strict';

var util = require('util'),
    Piece = require('./piece');

function Rook (black) {
	Piece.call(this, black);
};

util.inherits(Rook, Piece);

Rook.prototype.threatens = function(rook, king, pieces) {
	if (rook.row !== king.row &&
		rook.col !== king.col) {
		return false;
	}

	if (this.threatensByRow(rook, king, pieces)) {
		return true;
	}
	return this.threatensByColumn(rook, king, pieces);
};

module.exports = Rook;