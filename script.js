function toCase(text) {
  // write your code here
	
	let res=text.toLowerCase()
	let ans=text.toUpperCase()
	let result=res.concat("-",ans)
	return result
}


// DO not change the code below
const text = prompt("Enter text:");
alert(toCase(text));
