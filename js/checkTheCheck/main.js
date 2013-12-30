/* jslint node:true */
'use strict';

var fs = require('fs'),
	Board = require('./board.js'),
	King = require('./king.js'),
	Queen = require('./queen.js'),
	Pawn = require('./pawn.js'),
	Rook = require('./rook.js'),
	Bishop = require('./bishop.js'),
	Knight = require('./knight.js');

function usage () {
	console.error('usage: node main inputFile');
	process.exit(1);
}

function readInput (filename, callback) {
	fs.readFile(filename, 'utf8', function (err, data) {
		if (err) {
			console.error(err);
			process.exit(1);
		}
		callback (data);
	});
}

function indexOfNextBoard (input, pos) {
	var length = input.length;
	while (pos < length && input[pos] === '\n') {
		pos += 1;
	}
	return pos < length ? pos : -1;
}

function createPiece (type) {
	var	pieceTypes = {
			'b': Bishop,
			'k': King,
			'n': Knight,
			'p': Pawn,
			'q': Queen,
			'r': Rook
		},
		key = type.toLowerCase(),
		pieceClass = pieceTypes[key];

	if (pieceClass)
		return new pieceClass(type === key);
}

function buildBoard (input, i) {
	var board = new Board();
	for(var row = 0; row < 8; row++, i++) {
		for (var col = 0; col < 8; col++, i++) {
			//console.log('row: ' + row + ' col: ' + col + ' type: ' + input[i]);
			var piece = createPiece(input[i]);
			if (piece !== undefined) {
				board.addPiece(piece, row, col);
			}
		}
	}
	return board;
}

function parseInput (input) {
	var board,
		i = 0,
		games = 0;

	while (i < input.length) {
		i = indexOfNextBoard(input, i);
		if (i === -1) break;

		board = buildBoard(input, i);
		i += 72;

		if (board.isEmpty()) {
			break;
		}

		games++;

		if (board.checkTheCheck()) {
			console.log('Game #' + games + ': ' +
				        (board.blackKing.inCheck?'black':'white') +
				        ' king is in check.');
		} else {
			console.log('Game #' + games + ': no king is in check.');
		}
	}
}

function main () {
	if (process.argv.length < 3)
		usage();

	readInput(process.argv[2], function (data) {
		parseInput(data);
	});
}

main();