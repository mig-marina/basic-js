const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(elemDate) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
		if(elemDate == undefined) {
			return 'Unable to determine the time of year!';
			} else if(toString.call(elemDate) == '[object Date]') {
				let month = elemDate.getMonth();
			
				if(month === 2 || month === 3 || month == 4) {return 'spring'};
				if(month === 5 || month === 6 || month == 7) {return 'summer'};
				if(month === 8 || month === 9 || month == 10) {return 'autumn'};
				if(month === 11 || month === 0 || month == 1) {return 'winter'};
			} else throw new Error();
};
