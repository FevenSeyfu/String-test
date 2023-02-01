const stringLength =(input)=>{
  const count = input.length;
	if(count>0 && count <=10){
    return count;
	}else {
		throw new Error('String length should be bewteen 1 and 10')
  }
}

module.exports= stringLength;

