'use strict';

const chess = (size) => {
	size = Number.parseFloat(size)
	if (!Number.isInteger(size) || size < 2) {
		return null;
	}

	const parity = size % 2;

	const initialString = '* '.repeat(size / 2) + '*'.repeat(parity) + '\n';
	const secondString = ' *'.repeat(size / 2) + ' '.repeat(parity) + '\n';
	
	return (initialString + secondString).repeat(size / 2)
		+ initialString.repeat(parity); 
}
