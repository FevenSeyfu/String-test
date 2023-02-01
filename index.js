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
// Task 3
class calculator{
	add = (a,b) => {return a+b}
	subtract = (a,b)=>{return a-b}
	divide = (a,b)=>{return a/b}
  multiply = (a,b)=>{return a*b}
}
// Task 4
const capitalize = (input)=>{
	const capitalizedArray = input[0].toUpperCase() + input.slice(1);
	return capitalizedArray;
}

module.exports = {stringLength,reverseString,calculator,capitalize};
