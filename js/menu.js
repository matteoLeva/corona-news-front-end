'use strict';

function aperturaMenu() {
  let links = document.getElementById("header-right");

  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}
