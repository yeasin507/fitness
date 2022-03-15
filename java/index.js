var hamburger = document.querySelector(".hamburger");
var hamburgerMenu = document.querySelector(".hamburger_menu");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    hamburgerMenu.classList.toggle("header_menu");
}

// accordion function start--- --- --->

 var accordionButton= document.querySelector(".accordion_button"); 
 accordionButton.addEventListener("click", tax);

 var accordionButtonI= document.querySelector(".tis");
 accordionButtonI.addEventListener("click", taxi);

 var accordionButtonII= document.querySelector(".ris");
 accordionButtonII.addEventListener("click", taxii);

 function tax() {
  var element = document.getElementById("num");
  var elementS = document.getElementById("nor");
  var elementH = document.getElementById("accordion1");
  element.classList.toggle("act");
  elementS.classList.toggle("acD");
  elementH.classList.toggle("achsd");  
}
function taxi() {
 
  var element = document.getElementById("num1");
  var elementS = document.getElementById("nor1");
  var elementHi = document.getElementById("accordion2");
  element.classList.toggle("act");
  elementS.classList.toggle("acD");
  elementHi.classList.toggle("achsd");
}
function taxii() {
  var element = document.getElementById("num2");
  var elementS = document.getElementById("nor2");
  var elementHii = document.getElementById("accordion3");
  element.classList.toggle("act");
  elementS.classList.toggle("acD");
  elementHii.classList.toggle("achsd");
}






// accordion function complete--- --- --->


// var rotedHover = document.querySelector(".women"); 
// rotedHover.addEventListener("mouseenter", xun);
// function xun () {
//   document.querySelector(".roted_hover").style.display = "block";
// }

// var rotedHovers = document.querySelector(".roted"); 
// rotedHovers.addEventListener("mouseout", xuv);
// function xuv () {
//  document.querySelector(".roted_hover").style.display = "none";
// }
