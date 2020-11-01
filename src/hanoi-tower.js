const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
		let N = Math.pow(2,disksNumber) - 1;
		let T = Math.floor(N/turnsSpeed* 3600);
		let objectHanoi = {};
			objectHanoi.turns = N;
			objectHanoi.seconds = T;
		return objectHanoi;
};
