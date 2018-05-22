debugger;
loop(document);
function loop(node){
	var nodes = node.childNodes;
	nodes.forEach( function(currentValue, currentIndex, listObj){
		console.log("Tag nodeName : "+currentValue.nodeName);
		console.log("Tag nodeValue : "+currentValue.nodeValue);
		console.log("Tag nodeType : "+currentValue.nodeType);
		if(currentValue.attributes){
                	Array.prototype.slice.call(currentValue.attributes).forEach(function(attrNode) {
                		console.log(attrNode);
				console.log("attribute nodeName : "+attrNode.nodeName);
				console.log("attribute nodeValue : "+attrNode.nodeValue);
				console.log("attribute nodeType : "+attrNode.nodeType);
            		});
        	}
	if(currentValue.childNodes.length>0) {
		loop(currentValue);        
	}});
};