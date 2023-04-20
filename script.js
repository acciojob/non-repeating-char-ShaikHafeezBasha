//your JS code here. If required.
let str=prompt("Enter a string")
for(let i=0;i<str.length;i++){
	let char=str[i];
	if(indexOf(char)==i && str.indexOf(char,i+1)==-1){
		console.log(alert(char))
		return;
	}
}

