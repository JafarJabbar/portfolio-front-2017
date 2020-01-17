setInterval(function(){
	a=new Date()
	var second=a.getSeconds();
	document.getElementById("sec").style.transform="rotate("+second*6+"deg)";
	document.getElementById("sec").style.transformOrigin="center bottom";
},1000);
setInterval(function(){
	a=new Date()
	var minute=a.getMinutes();
	document.getElementById("min").style.transform="rotate("+minute*6+"deg)";
	document.getElementById("min").style.transformOrigin="center bottom";
},1000);
setInterval(function(){
	a=new Date()
	var hour=a.getHours();
	document.getElementById("hour").style.transform="rotate("+hour*15+"deg)";
	document.getElementById("hour").style.transformOrigin="center bottom";
},1000);