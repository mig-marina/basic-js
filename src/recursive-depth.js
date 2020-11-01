const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
	constructor(arr) {
    this.dept = 1;
    this.calculateDepth = this.calculateDepth.bind(this);
	}
   calculateDepth(arr) {
	let dept = 1;
	let newarr=[];
	if(arr.some(item => Array.isArray(item))) { 
		this.dept++;
		arr = arr.filter(item => Array.isArray(item));
		for(let i=0; i<arr.length; i++) {
			newarr = newarr.concat(arr[i]);
		}
		arr = newarr;
		newarr = [];
		return this.calculateDepth(arr);
		} else {let n = this.dept; this.dept = 1; return n;} 
   }
};