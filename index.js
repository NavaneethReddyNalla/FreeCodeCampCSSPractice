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
    let button = navButtons[i];
    let link = button.children[0].getAttribute("href");

    if (link === page) {
      button.setAttribute("style", "background: cornflowerblue;");
    } else {
      button.setAttribute("style", "background: turqoise;");
    }
  }
}

function renderIFrame() {
  let iframe = document.querySelector("iframe");
  iframe.src = page;
}

function turnPage(linkedPage) {
  // currentPage = index;
  // page = pages[currentPage];
  page = linkedPage;
  loadNavBar();
  renderIFrame();
}

function linkNavButtons() {
  let navButtons = document.querySelectorAll(".nav-bar li");
  let anchorLinks = [...navButtons.values()].map((link) => link.children[0]);

  for (let i = 0; i < navButtons.length; ++i) {
    anchorLinks[i].addEventListener("click", (event) => {
      event.preventDefault();
    });

    let link = anchorLinks[i].getAttribute("href");
    navButtons[i].setAttribute("onclick", `turnPage("${link}")`);
  }
}

function main() {
  loadNavBar();
  renderIFrame();
  linkNavButtons();
}

document.addEventListener("DOMContentLoaded", main);
