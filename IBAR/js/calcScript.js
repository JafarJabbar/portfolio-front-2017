var interval=setInterval(function () {
  var inputMoney=document.querySelector("#money");
  var valueMoney=parseInt(inputMoney.value);
  var inputMonth=document.querySelector("#month");
  var valueMonth=parseInt(inputMonth.value);
  var select=document.querySelector("#yearMonth");
  var moneyP=document.querySelector("#moneyP");
  var monthP=document.querySelector("#monthP");
  var paragraph=document.querySelector("#paragraph");
  var percent=document.querySelector("#percent");
 var option=select.options[select.selectedIndex].value;
  if(option==="month"){
    paragraph.innerHTML="Hər ay ödənilən faiz";
  if(valueMonth ==12){
    result11=valueMoney+((valueMoney*11)/100);
    inputResultMoneyPay=document.querySelector("#resultMonthPay");
    resultMonthPercent=document.querySelector("#resultMonthPercent");
    monthPay11=Math.ceil(result11/valueMonth);
    inputResultMoneyPay.value=monthPay11+".00 AZN";
    percent11=Math.ceil(((valueMoney*11)/100)/valueMonth);
    resultMonthPercent.value=percent11+".00 AZN";
    percent.innerHTML="İllik faiz dərəcəsi<br><br> <span> 11% </span> ";

  }
  else if(valueMonth==24 || valueMonth==36){
    var result12=valueMoney+((valueMoney*12)/100);
    monthPay12=Math.ceil(result12/valueMonth);
    inputResultMoneyPay.value=monthPay12+".00 AZN";
    percent12=Math.ceil(((valueMoney*12)/100)/valueMonth);
    resultMonthPercent.value=percent12+".00 AZN";
    percent.innerHTML="İllik faiz dərəcəsi<br><br> <span>12%<span>  ";
  }
  monthP.innerHTML=valueMonth+" ay";
}
else if(option==="year"){
  paragraph.innerHTML="Hər il ödənilən faiz";

  if(valueMonth==12){
    valueMonth=1;
    resultYear11=valueMoney+(valueMoney*0.12);
    resultYearPay11=resultYear11/valueMonth;
    inputResultMoneyPay.value=resultYearPay11+".00 AZN";
    perCentYear11=(valueMoney*0.12)/valueMonth;
    resultMonthPercent.value=perCentYear11+".00 AZN";
    percent.innerHTML="İllik faiz dərəcəsi<br> <br><span> 12% </span> ";

  }
  else if(valueMonth==24){
    valueMonth=2;
    resultYear12=valueMoney+(valueMoney*0.13);
    resultYearPay12=resultYear12/valueMonth;
    inputResultMoneyPay.value=resultYearPay12+".00 AZN";
    perCentYear12=(valueMoney*0.13)/valueMonth;
    resultMonthPercent.value=perCentYear12+".00 AZN";
    percent.innerHTML="İllik faiz dərəcəsi<br><br> <span> 13% </span> ";

  }
  else if(valueMonth==36){
    valueMonth=3;
    resultYear12=valueMoney+(valueMoney*0.13);
    resultYearPay12=Math.ceil(resultYear12/valueMonth);
    inputResultMoneyPay.value=resultYearPay12+".00 AZN";
    perCentYear12=Math.ceil((valueMoney*0.13)/valueMonth);
    resultMonthPercent.value=perCentYear12+".00 AZN";
    percent.innerHTML="İllik faiz dərəcəsi<br><br> <span> 13% </span> ";

  }
  monthP.innerHTML=valueMonth+" il";
}
moneyP.innerHTML=valueMoney+".00 AZN";

}, 1);
