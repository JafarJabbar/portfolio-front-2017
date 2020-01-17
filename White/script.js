var imgs=document.querySelectorAll(".images .thumb img");
var topTab=-100;
var textH1=["<b>Creative</b> White Templates","<b>Responsive</b> Design Theme","<b>Amazing</b> Video Background"]
var btnChng=["1","2","3"]
for (var i = 0; i < imgs.length; i++) {
imgs[i].addEventListener("click",slide)
}
function slide(event){
  click=event.target;
  val=click.getAttribute("value")
  clickSrc=click.getAttribute("src");
  console.log(val);
    document.getElementsByClassName("yuzfaiz")[0].style.backgroundImage="url("+btnChng[val]+".jpg)";
    var activePhoto=clickSrc;
    document.getElementById("srv").innerHTML=textH1[val];
    document.getElementById("srv").style.color="white";
    document.getElementById("vrs").style.color="white";

}
function changePlus(){
  i=0;
  i++;
  document.getElementsByClassName("yuzfaiz").style.backgroundImage="url("+i+".jpg)";
  console.log(i);
}
 function functionName() {

 }

function changeP(event){
var dots=querySelectorAll(".dots i")
  for(i=0;i)
  tab=event.target[i]
}

var quotesArr=[


]
