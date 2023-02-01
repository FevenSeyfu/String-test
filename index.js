const stringLength =(input)=>{
  const count = input.length;
	if(count>0 && count <=10){
    return count;
	}else {
		throw new Error('String length should be bewteen 1 and 10')
  }
}

// Task 2
const reverseString = (input) => {
	let splitstring = input.split("");
	let reverse = splitstring.reverse();
	let reversedArray = reverse.join("");
	console.log(reversedArray);
	return reversedArray;
}
module.exports = {stringLength,reverseString};
