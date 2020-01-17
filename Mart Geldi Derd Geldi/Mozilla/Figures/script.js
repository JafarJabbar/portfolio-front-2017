var cc=0;
function clck(a){
	cc++;
	if(cc%2!=0){
	a.style.width="400px";
	a.style.height="400px";
	}
	else {
	a.style.width="200px";
	a.style.height="200px";
	}
} 
function click1(a){
	var b=a.getAttribute("value");
	document.getElementsByTagName('div')[0].style.borderStyle=""+b+"";
}
function click2(b){
	var c=b.getAttribute("value");
	document.getElementsByTagName('div')[0].style.borderColor=""+c+"";
}
function click3(d){
	var e=d.getAttribute("value");
	document.getElementsByTagName('div')[3].style.borderStyle=""+e+"";
}
function click4(g){
	var f=g.getAttribute("value");
	document.getElementsByTagName('div')[3].style.borderColor=""+f+"";
}
function click5(h){
	var x=h.getAttribute("value");
	console.log(x)
	document.getElementsByTagName('div')[0].style.borderWidth=""+x+"px";
}
function click6(r){
	var y=r.getAttribute("value");
	document.getElementsByTagName('div')[3].style.borderWidth=""+y+"px";
}
