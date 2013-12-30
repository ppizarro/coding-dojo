/* jslint node:true */
'use strict';

var util = require('util'),
	Piece = require('./piece.js');

function King (black) {
	Piece.call(this, black);
};

util.inherits(King, Piece);

module.exports = King;