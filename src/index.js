
// You should implement your task here.

module.exports = function towelSort (matrix = []) {
  if (matrix.length != 0) {
		for (let i = 1; i < matrix.length; i++) {
		if (i % 2 !== 0) {
			matrix[i].reverse();
		}
	}

	let sortArr = [].concat(...matrix);

	return sortArr;
	} else {
		return matrix;
	}
}
