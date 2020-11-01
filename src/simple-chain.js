const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arrLinks: [],
  getLength() {
  	return this.arrLinks.length;
  },
  addLink(value) {
  	if(value === undefined) {
		this.arrLinks.push('');
		} else this.arrLinks.push(String(value));	
	return this;
  },
  removeLink(position) {
	if(typeof(position) === 'number' && position>0 && position < this.arrLinks.length+1 && Number.isInteger(position)){
		this.arrLinks.splice(position-1, 1);	
	} else {
		this.arrLinks = []; 
		throw new Error('invalid input'); 
	}
	return this;
  },
  reverseChain() {
	if(this.arrLinks.length > 1){
		this.arrLinks.reverse();	
	}
	return this;
  },
  finishChain() {
	try {
	let finish = '( ' + this.arrLinks[0] + ' )';
	for(let i = 1; i < this.arrLinks.length; i++) {
		finish += '~~( ' + this.arrLinks[i] + ' )'
		}
	this.arrLinks = [];
	return finish;
	} catch(err) {
		this.arrLinks = [];
	}
  }
};

module.exports = chainMaker;
