window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    document.getElementById("navbar").style.display = "block";
  }
  else {
    document.getElementById("navbar").style.display = "none";
  }
}

function displayMenu() {
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
  var x = event.clientX;     // Get the horizontal coordinate
  var y = event.clientY;     // Get the vertical coordinate
  var menu = document.getElementById("navbar");
  if ((menu.style.display === "block") && (x > menu.clientWidth * 1.2 || y > menu.clientHeight * 1.2)) {
    closeMenu();
  }
}

function toggleTextLeft1() {
  var text = document.getElementById("textL1");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

// i don't know how to do this without repeating the code :(
// TODO: learn how to do this without repetition

function toggleTextLeft2() {
  var text = document.getElementById("textL2");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function toggleTextLeft3() {
  var text = document.getElementById("textL3");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function toggleTextRight1() {
  var text = document.getElementById("textR1");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function toggleTextRight2() {
  var text = document.getElementById("textR2");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function toggleTextRight3() {
  var text = document.getElementById("textR3");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
