const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
		const dn = '--double-next';
		const dp = '--double-prev';
		const dip = '--discard-prev';
		const din = '--discard-next';
		if(Array.isArray(arr)) {
			let newarr=[];
			let j = 0;
			let i;
			if(arr[0] == dip || arr[0] == dp) {i=1} else i=0;
			let n = arr.length;
			if(arr[n-1] == dn || arr[n-1] == din) {n = arr.length - 1}
			while(i < n){
				if(arr[i] == dn) {
						newarr[j] = arr[i+1];
						i++;	
						j++
					} else if(arr[i] == dp) {
							newarr[j] = arr[i-1]; 
							i++;
							j++
						} else if(arr[i] == dip) {
							if(i==n-1) {newarr.length -= 1;}
							j--;
							i++;
							} else if(arr[i] == din) {
								if(arr[i+2] == dp || arr[i+2] == dip) {
									i += 3;
									} else i +=2;
								} else {
									newarr[j] = arr[i]; 
									j++; 
									i++;
								}
				
				};//end while
				
				return newarr;
			} else throw new Error();
};
