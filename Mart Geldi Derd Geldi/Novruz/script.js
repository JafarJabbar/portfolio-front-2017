var today=new Date();
document.getElementsByTagName('p')[0].innerHTML=today;
var novruz=new Date(2017,02,20,00,01,01,01);
document.getElementsByTagName('p')[1].innerHTML=novruz;
Seconds=Math.floor((novruz-today)/1000);
Minutes=Math.floor((novruz-today)/(60*1000));
Hours=Math.floor((novruz-today)/(60*1000*60));
Days=Math.floor((novruz-today)/(60*1000*60*24));
document.getElementsByTagName('p')[3].innerHTML=Days + "days " 
document.getElementsByTagName('p')[4].innerHTML=Hours+"hours"
document.getElementsByTagName('p')[5].innerHTML=Minutes+"minutes"
document.getElementsByTagName('p')[6].innerHTML=Seconds+"seconds"
var a=setInterval(function(){
var interval=novruz-today;
var day=Math.floor(interval/(1000*60*60*24));
var hour=Math.floor(interval%(1000*60*60*24)/(1000*60*60));
var minute=Math.floor(interval%(1000*60*60)/(1000*60));
var second=Math.floor(interval%(1000*60)/1000);
document.getElementsByTagName('p')[7].innerHTML=day+"days: "+hour+"hours: "+minute+"Minutes: "+ second+"seconds";}
,1000);