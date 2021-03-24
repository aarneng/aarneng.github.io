function changeBackgroundOnBigScreen() {
  // make background higher quality on larger screens
  var width = window.innerWidth  * window.devicePixelRatio
  if (width >= 3000) {
    document.getElementById('backgroundImg').src='imagery/background_big.jpg';
  }
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  // display navigation bar when the window has been scrolled enough
  const cutoffPoint = screen.height / 3;
  if (document.body.scrollTop >= cutoffPoint || document.documentElement.scrollTop >= cutoffPoint) {
    document.getElementById("navbar").style.display = "block";
  }
  else {
    document.getElementById("navbar").style.display = "none";
  }
}

function displayMenu() {
  // toggle insides of the menu once the menu button has been clicked
  if (document.getElementById("navigation").style.display === "none") {
    openMenu();
  } else {
    closeMenu();
  }
}

function openMenu() {
  document.getElementById("navigation").style.display = "block";
  document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0, 0.9)";
  document.getElementById("menuButton").style.filter = "invert(100%) opacity(100%)";
}

function closeMenu() {
  document.getElementById("navigation").style.display = "none";
  document.getElementById("navbar").style.backgroundColor = "rgba(0,0,0, 0)";
  document.getElementById("menuButton").style.filter = "invert(0%) opacity(70%)";
}

document.onmousemove = closeMenuMaybe;
function closeMenuMaybe(event) {
  // close the menu if the mouse hovers away from the menu
  var x = event.clientX;
  var y = event.clientY;
  var menu = document.getElementById("navbar");
  if ((menu.style.display === "block") && (x > menu.clientWidth * 1.2 || y > menu.clientHeight * 1.2)) {
    closeMenu();
  }
}

function sameHeight(containerName) {
  // make vertical display menus next to eachother the same height
  var ancestor = document.getElementById(containerName);
  var descendents = ancestor.getElementsByClassName("column");
  maxH = 0;
  for (var i = 0; i < descendents.length; i++) {
    height = descendents[i].offsetHeight;
    if (height > maxH) {maxH = height;}
  }
  for (var i = 0; i < descendents.length; i++) {
    descendents[i].style.minHeight = maxH + "px";
  }
}

document.addEventListener('readystatechange', event => { 
  // When window loaded ( external resources are loaded too- `css`,`src`, etc...) 
  if (event.target.readyState === "complete") {
    sameHeight("projectContainers");
    sameHeight("workContainers");
    changeBackgroundOnBigScreen();
  }
});

function toggleTextDisplay(textId) {
  //open/close text in work experience menu
  var text = document.getElementById(textId);
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
  //sameHeight("workContainers")
  //todo: create a function that minimises the heights once text gets toggled off
}
