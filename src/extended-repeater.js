const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  //обязательный параметр
	if(typeof(str) !== 'string') {str = String(str)}
	// итоговая строка
	let strRepeat = '';
	
	//необязательный параметр
	let wAddition;
	if(options.addition === undefined) {
		wAddition = '';
		} else {
		if(typeof(options.addition) !== 'string') {options.addition = String(options.addition)}
		wAddition = options.addition;
	};
	
	//необязательный параметр + принимает значение по-умолчанию
	let wAdditionSeparator;
	if(options.additionSeparator === undefined) {
		wAdditionSeparator = '|';
	} else {wAdditionSeparator = options.additionSeparator;}
	
	//необязательный параметр
	let wAdditionRepeatTimes;
	if(options.additionRepeatTimes === undefined) {
		wAdditionRepeatTimes = 0;
		} else wAdditionRepeatTimes = options.additionRepeatTimes;
	
	//формируем последовательность для повтора
	let strItem = wAddition;
	for (let i = 0; i<wAdditionRepeatTimes-1; i++) {
		strItem += wAdditionSeparator + wAddition;
		}
	strItem = str + strItem;
	
	//необязательный параметр + имеет значение по-умолчанию
	let wSeparator;
	if (options.separator === undefined) {
		wSeparator = '+';
		} else wSeparator = options.separator;
		
	//необязательный параметр	
	let wRepeatTimes;
	if(options.repeatTimes === undefined) {
		wRepeatTimes = 0;
		} else wRepeatTimes = options.repeatTimes;
	
	//формируем строку для вывода
	strRepeat = strItem;
	for (let i = 0; i<wRepeatTimes-1; i++) {
		strRepeat += wSeparator + strItem;
		}
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  return strRepeat;
};
  