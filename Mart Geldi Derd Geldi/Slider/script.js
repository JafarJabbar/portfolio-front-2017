function slider(param){
	var attr=param.getAttribute("src");
	console.log(attr);
	document.getElementsByTagName('div')[0].setAttribute("style","background-image:url("+attr+")");
	document.getElementsByTagName('div')[0].style.transform="rotate(360deg)"
}