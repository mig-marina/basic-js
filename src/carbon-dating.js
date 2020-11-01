const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
 
	if(typeof(sampleActivity) != 'string') {
			return false;
			} 
	let elem = Number(sampleActivity);
	if(!isNaN(elem) && isFinite(elem) && elem < MODERN_ACTIVITY && elem >0) {
				let NON = MODERN_ACTIVITY/elem;
				let k = 0.693/HALF_LIFE_PERIOD;
				let old = Math.log(NON)/k;
				return Math.ceil(old);
			} else return false;		
};
