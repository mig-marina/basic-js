const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
	constructor(bool) {
	this.marker = bool;
	}
  encrypt(message, key) {
    if(message === undefined || key === undefined) {
	throw new Error('invalid input');
	} else {
		let arrVigenere = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		let messageEncrypt = '';
		message = message.toUpperCase();
		key = key.toUpperCase();
		let elemkey = '';
		while(elemkey.length < message.length) {
			elemkey += key;
			}
		elemkey = elemkey.slice(0, message.length);
		let j = 0;
		let elemkeyW = '';
		for(let i=0; i<message.length; i++) {
			if(arrVigenere.indexOf(message[i]) !== -1) {
				elemkeyW += elemkey.slice(j,j+1);
					j++;	
			} else {
				elemkeyW += ' ';	
			}
		}
		for(let i=0; i<message.length; i++) {
			let x;
			let y;
			x = arrVigenere.indexOf(elemkeyW[i]);
			y = arrVigenere.indexOf(message[i]);
			if(y === -1) {
				messageEncrypt += message[i].toUpperCase();
			} else {
				if(x+y > 25) {
					messageEncrypt += arrVigenere[x+y - 26];
				} else {
					messageEncrypt += arrVigenere[x+y];
				}	
			}	
		}
		if(this.marker !== false) {
			return messageEncrypt;
		} else {
			let reverseMessageEncrypt = messageEncrypt.split('').reverse().join('');
			return reverseMessageEncrypt;
		}
	} 
}    
  decrypt(message, key) {
    if(message === undefined || key === undefined) {
	throw new Error('invalid input');
	} else {
		let arrVigenere = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
		let messageDecrypt = '';
		message = message.toUpperCase();
		key = key.toUpperCase();
		let elemkey = '';
		while(elemkey.length < message.length) {
			elemkey += key;
			}
		elemkey = elemkey.slice(0, message.length);
		let j = 0;
		let elemkeyW = '';
		for(let i=0; i<message.length; i++) {
			if(arrVigenere.indexOf(message[i]) !== -1) {
				elemkeyW += elemkey.slice(j,j+1);
					j++;	
			} else {
				elemkeyW += ' ';
			}
		}
		for(let i=0; i<message.length; i++) {
			let x;
			let y;
			x = arrVigenere.indexOf(elemkeyW[i]);
			y = arrVigenere.indexOf(message[i]);
			if(y === -1) {
				messageDecrypt += message[i].toUpperCase();
			} else {
				if(y < x) {
					messageDecrypt += arrVigenere[y+26-x];
				} else {
					messageDecrypt += arrVigenere[y-x];
				}	
			}
		}
	if(this.marker !== false) {
		return messageDecrypt;
		} else {
			let reverseMessageDecrypt = messageDecrypt.split('').reverse().join('');
			return reverseMessageDecrypt;
		}
	}
  }
}

module.exports = VigenereCipheringMachine;
