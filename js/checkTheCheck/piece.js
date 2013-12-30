/* jslint node:true */
'use strict';

function Piece(black) {
	this.black = black === undefined ? true : black;
};

Piece.prototype.isBlack = function () {
	return this.black;
};

Piece.prototype.threatens = function (piece, king, pieces) {
	return false;
};

function foundTheKing(king, row, col) {
	if (row === king.row &&
		col === king.col) {
		return true;
	}
	return false;
}

function existAnyPiece(pieces, row, col) {
	var cols = pieces && pieces[row];
	if (cols &&	cols[col] !== undefined) {
		return true;
	}
	return false;
}

Piece.prototype.threatensByTopRightDiagonal = function (piece, king, pieces) {
	for (var row = piece.row + 1,
		 col = piece.col + 1;
		 row < 8 && col < 8; row++, col++) {

		if (foundTheKing(king, row, col)) {
			return true;
		}

		if (existAnyPiece(pieces, row, col)) {
			return false;
		}
	}
	return false;
}

Piece.prototype.threatensByTopLeftDiagonal = function (piece, king, pieces) {
	for (var row = piece.row + 1,
		 col = piece.col - 1;
		 row < 8 && col >= 0; row++, col--) {

		if (foundTheKing(king, row, col)) {
			return true;
		}

		if (existAnyPiece(pieces, row, col)) {
			return false;
		}
	}
	return false;
}

Piece.prototype.threatensByBottomRightDiagonal = function (piece, king, pieces) {
	for (var row = piece.row - 1,
		 col = piece.col + 1;
		 row >= 0 && col < 8; row--, col++) {

		if (foundTheKing(king, row, col)) {
			return true;
		}

		if (existAnyPiece(pieces, row, col)) {
			return false;
		}
	}
	return false;
}

Piece.prototype.threatensByBottomLeftDiagonal = function (piece, king, pieces) {
	for (var row = piece.row - 1,
		 col = piece.col - 1;
		 row >= 0 && col >= 0; row--, col--) {

		if (foundTheKing(king, row, col)) {
			return true;
		}

		if (existAnyPiece(pieces, row, col)) {
			return false;
		}
	}
}

function isThereAnyPieceBeetwenInTheRow(pieces, row, col_start, col_end) {
	var cols = pieces && pieces[row];
	if (!cols) return false;
	for (var col = col_start + 1; col < col_end; col++) {
		if (cols[col] !== undefined) {
			return true;
		}
	}
	return false;
}

Piece.prototype.threatensByRow = function (piece, king, pieces) {
	if (piece.row !== king.row) return false;

	if (piece.col < king.col) {
		return !isThereAnyPieceBeetwenInTheRow(pieces, piece.row, piece.col, king.col);
	}
	return !isThereAnyPieceBeetwenInTheRow(pieces, piece.row, king.col, piece.col);
}

function isThereAnyPieceBeetwenInTheCol(row_start, row_end, col, pieces) {
	if (pieces === undefined) return false;
	for (var row = row_start + 1; row < row_end; row++) {
		var cols = pieces[row];
		if (cols && cols[col] !== undefined) {
			return true;
		}
	}
	return false;
}

Piece.prototype.threatensByColumn = function (piece, king, pieces)
{
	if (piece.col !== king.col) return false;

	if (piece.row < king.row) {
		return !isThereAnyPieceBeetwenInTheCol(piece.row, king.row, piece.col, pieces);
	}
	return !isThereAnyPieceBeetwenInTheCol(king.row, piece.row, piece.col, pieces);
}

module.exports = Piece;