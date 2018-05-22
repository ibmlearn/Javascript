function onClick() {
  if (inputsAreEmpty()) {
    label.textContent = 'Error: input is empty.';
    return;
  }
  document.location.href="https://"+getNumber1();
  //document.forms["form"].submit();
    
}
function inputsAreEmpty() {
  if (getNumber1() === '') {
    return true;
  } else {
    return false;
  }
}

function getNumber1() {
  return inputs[0].value;
}

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

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);

