/* jslint node:true */
'use strict';

var util = require('util'),
	Piece = require('./piece.js');

function Knight(black) {
	Piece.call(this, black);
};

util.inherits(Knight, Piece);

Knight.prototype.threatens = function (knight, king, pieces) {

	if (knight.row + 2 === king.row) {
		// 2 top - 1 left
		if (knight.col - 1 === king.col) return true;
		// 2 top - 1 right
		if (knight.col + 1 === king.col) return true;
	}

	if (knight.row - 2 === king.row) {
		// 2 bottom - 1 right
		if (knight.col + 1 === king.col) return true;
		// 2 bottom - 1 left
		if (knight.col - 1 === king.col) return true;
	}

	if (knight.col + 2 === king.col) {
		// 2 right - 1 bottom
		if (knight.row - 1 === king.row) return true;
		// 2 right - 1 top
		if (knight.row + 1 === king.row) return true;
	}

	if (knight.col - 2 === king.col) {
		// 2 left - 1 top
		if (knight.row + 1 === king.row) return true;
		// 2 left - 1 bottom
		if (knight.row - 1 === king.row) return true;
	}

	return false;
}

module.exports = Knight;