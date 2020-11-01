const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arrNames) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(Array.isArray(arrNames)) {
  
			let nameDreamTeam = '';
			for(let i=0; i<arrNames.length; i++){
				if(typeof(arrNames[i]) === 'string') {
					let item = arrNames[i].trim();
					nameDreamTeam += item.slice(0,1);
					}
				}
			nameDreamTeam = nameDreamTeam.toUpperCase().split('').sort().join('');
			return nameDreamTeam;
			} else return false;
};
