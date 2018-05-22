//Tag Names and Attributes Of All Nodes
//debugger;
function getAttributes(){
	var all = document.getElementsByTagName("*");
	for (var i=0, max=all.length; i < max; i++) {
		console.log(all[i].tagName);
		 var attr = all[i].attributes;
		for(var j=0;j<attr.length;j++){
		  console.log(attr[j]);
		}
	}
}