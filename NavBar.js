let menu = false;
var x = document.getElementById("menuBarID");

function myFunction() {
  menu = !menu;
  if (menu === false) {
    x.style.display = "none";
  } else{
    x.style.display = "grid";
  }
}

window.addEventListener('resize', () => {
    if (window.matchMedia("(min-width: 1252px)").matches) {
  x.style.display = "none";
  menu = false;
}
});
