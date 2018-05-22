//Index of node command is zero and so on...
//If we add without converting to int, then the args are taken as strings
function addProcessArgV(){
var x = parseInt(process.argv[2]);
var y = parseInt(process.argv[3]);
return x+y;
}
//console.log(addProcessArgV());

process.argv.forEach(function (val, index) {
  console.log(index + ': ' + val);
});

//process.argv.forEach(function (val, index, array) {
//  console.log(index + ': ' + val);
//});

//Output
//0: C:\Program Files\nodejs\node.exe
//1: C:\Users\Irshad_Moghal\Desktop\CDP\JavaScript\test\testConsoleArguments.js
//2: 10
//3: 23


