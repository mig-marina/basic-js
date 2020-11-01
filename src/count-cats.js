const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(arr === undefined) {
			return 0;
			} else if(arr.length == 0) {
				return 0;
				} else {
					let sum = 0;
					
					for(let i=0; i<arr.length; i++){
						let n = arr[i].length;
						for(let j=0; j<n; j++){
							if(arr[i][j] == '^^'){sum += 1}
							
							}
						}
						return sum;
					}
};
