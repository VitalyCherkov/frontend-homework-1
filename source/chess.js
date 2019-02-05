'use strict';

/**
 * Draws chessboard
 * 
 * @param {number} size 
 * @returns {(string|null)} Chessboard string.
 */

const chess = (size) => {
	size = Number.parseFloat(size);
	if (!Number.isInteger(size) || size < 2) {
		return null;
	}

	const parity = size % 2;

	const initialString = '* '.repeat(size / 2) + (parity ? '*' : '') + '\n';
	const secondString = ' *'.repeat(size / 2) + (parity ? ' ' : '') + '\n';
	
	return (initialString + secondString).repeat(size / 2)
		+ (parity ? initialString : ''); 
}
