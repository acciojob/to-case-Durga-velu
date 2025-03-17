function toCase(text) {
  // write your code here
	
	let res=text.toLowerCase()
	let ans=text.toUpperCase()
	let result=ans.concat("-",res)
	return result
}

// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
