var c=0;
var cc=0;
function funi(){
	c++;
	if(c%2!=0){
	document.getElementsByTagName('p')[0].style.fontStyle="italic";
}
else
{
		document.getElementsByTagName('p')[0].style.fontStyle="normal";

}
}
function funb(){
	cc++;
	if(cc%2!=0){
	document.getElementsByTagName('p')[0].style.fontWeight="bold";
}
else
{
		document.getElementsByTagName('p')[0].style.fontWeight="normal";
}
}
function fs(a){
	var fontsize=a.getAttribute("value")
	document.getElementsByTagName('p')[0].setAttribute("style","font-size:"+fontsize+"px")
}
