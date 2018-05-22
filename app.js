debugger;
var x=10;
var y = 40;

function add(x,y){
return x+y;
}

function currentYear(){
	var year = new Date().getYear();
	if(year<1900)
		year+=1900;
	return year;
}
console.log(currentYear());
console.log(add(x,y));