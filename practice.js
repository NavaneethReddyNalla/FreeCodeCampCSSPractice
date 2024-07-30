let currentPage = 0;
let pages = [
  "colorful_button/cb.html",
  "expanding_search_bar/esb.html",
  "codepen_tile/cpt.html",
];
let page = pages[currentPage];

function loadNavBar() {
  let navButtons = document.querySelectorAll(".nav-bar li");

  for (let i = 0; i < navButtons.length; ++i) {
    if (i === currentPage) {
      navButtons[i].setAttribute("style", "background: cornflowerblue;");
    } else {
      navButtons[i].setAttribute("style", "background: turqoise;");
    }
  }
}

function renderIFrame() {
  let iframe = document.querySelector("iframe");
  iframe.src = page;
}

function turnPage(index) {
  currentPage = index;
  page = pages[currentPage];
  loadNavBar();
  renderIFrame();
}

function linkNavButtons() {
  let navButtons = document.querySelectorAll(".nav-bar li");

  for (let i = 0; i < navButtons.length; ++i) {
    navButtons[i].setAttribute("onclick", `turnPage(${i})`);
  }
}

function main() {
  loadNavBar();
  renderIFrame();
  linkNavButtons();
}

document.addEventListener("DOMContentLoaded", main);
