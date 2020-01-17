//search input function
var clickCount=0;
// window.addEventListener("click",function(){
//   document.querySelector(".clickInput").style.height="0px";
//   document.querySelector("#help").style.fontSize="1em";
//   document.querySelector("#hiddenOption").style.display="none";
//   document.querySelector(".clickInput").value="";
// })

function inputFunc(event){
  clickCount++;
  if (clickCount%2!==0) {
    span=event.target;
    txt=document.getElementById("header");
    hiddenMenu=document.getElementById("hiddenOption");
    inpt=document.getElementsByClassName("clickInput")[0];
    inpt.style.height="50px";
    txt.style.fontSize="0.6em";
    hiddenMenu.style.display="block";
  }
  else{
    inpt.style.height="0px";
    txt.style.fontSize="1em";
    hiddenMenu.style.display="none";
    inpt.value="";
  }
}
//end search input function


//slider div function
function change(event){
  dot=document.getElementsByClassName('dot');
  clickDiv=event.target;
  for(i=0;i<dot.length;i++){
    dot[i].style.backgroundColor="white";
    dot[i].style.border="none";
  }
  clickDiv.style.backgroundColor="transparent";
  clickDiv.style.border="2px solid white";
  mainDiv=document.querySelector(".images .col4");
  src=clickDiv.getAttribute("value");
  console.log(src);
  mainDiv.style.backgroundImage="url(images/"+src+".jpg)";
}
//end slider div function


//search list item function
function searchItem(event){
  var listItem=event.target;
  inpt.value=listItem.innerHTML;
}

// end search list item function


//side menu function

var k=0;
var netBanking=document.querySelector("#netServices");
netBanking.addEventListener("click",function(){
  main=document.querySelector(".main");
    main.style.transform="scale(.95)";
   div=document.querySelector(".sideMenu");
   interval=setInterval(increase, 1);
});
function increase(){
  k+=10;
  div.style.left+=k+"px";
  if (k===0) {
    clearInterval(interval);
    div.style.left="0";
  }
  window.addEventListener("click",function(){
    document.querySelector(".sideMenu").style.left="400px";
    document.querySelector(".main").style.transform="scale(1)";
    });

}

//end side menu function

//kooperativ menu function
search=document.querySelector(".slider");
ferdiList=document.querySelector(".ferdi ");
mainDiv=document.querySelector(".main");
function ferdiMenu(){
  kooperativList.style.display="none";
  search.style.display="none";
  mainDiv.style.backgroundImage="url(images/ferdinew.png)";
  ferdiList.style.display="block";
  mainDiv.style.backgroundImageRepeat="no-repeat";
  mainDiv.style.backgroundImageSize="cover";
}

//end ferdi menu function

//kooperativ menu function
search=document.querySelector(".slider");
kooperativList=document.querySelector(".kooperativ ");
mainDiv=document.querySelector(".main");
function koopMenu(){
  search.style.display="none";
  mainDiv.style.backgroundImage="url(images/kooperativ.png)";
  kooperativList.style.display="block";
  mainDiv.style.backgroundImageRepeat="no-repeat";
  mainDiv.style.backgroundImageSize="cover";
    ferdiList.style.display="none";
}

//end kooperativ menu function



//main page function
function mainPage(){
  search.style.display="block";
  mainDiv.style.background="radial-gradient(#BDC9E3,#829ACA,#8099C9,#647EB5,#5878B8,#4367AF,#385EAA,#3B61AB,#335AA8,#335AA8,#365CA9,#1B3E85)";
  ferdiList.style.display="none";
  kooperativList.style.display="none";
}

//end main page function
