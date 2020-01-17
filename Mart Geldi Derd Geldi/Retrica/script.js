function slider(c){
	var r=c.getAttribute("src");
	document.getElementsByTagName('div')[0].setAttribute("style","background-image:url("+r+")");
}
function effect(a){
	var b=a.getAttribute("value");
	document.getElementsByTagName('div')[0].style.filter=""+b+"";
}
