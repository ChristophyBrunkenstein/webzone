mainHeader0 = document.getElementById("mainHeader0");
mainHeader1 = document.getElementById("mainHeader1");
mainHeader2 = document.getElementById("mainHeader2");
mainHeader3 = document.getElementById("mainHeader3");
text0 = document.getElementById("text0");
text1 = document.getElementById("text1");
text2 = document.getElementById("text2");
text3 = document.getElementById("text3");
// window.onscroll = function() {scrollFunction()};
// var element =  document.getElementById("header");
// function scrollFunction() {
//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.getElementById("header").style.padding = "1px";
//     document.getElementById("header").style.fontSize = "12px";
//   } else {
//     document.getElementById("header").style.padding = "8px";
//     document.getElementById("header").style.fontSize = "16px";
//   }
// }

let randNum = Math.floor(Math.random() * 4);
console.log(randNum);
if(randNum === 0){ mainHeader0.style.display = "block"; text0.style.display = "block"}
if(randNum === 1){ mainHeader1.style.display = "block"; text1.style.display = "block"}
if(randNum === 2){ mainHeader2.style.display = "block"; text2.style.display = "block"}
if(randNum === 3){ mainHeader3.style.display = "block"; text3.style.display = "block"}
