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

	const smartRepeat = (str1, str2) =>
		`${
			`${ str1 }${ str2 }`.repeat(size / 2)
		}${
			parity ? str1 : ''
		}`;

	return smartRepeat(
		`${ smartRepeat('*', ' ') }\n`,
		`${ smartRepeat(' ', '*') }\n`
	);
}
