"use strict";

const evilButton = document.querySelector(".evil-button");

let evilModeActive = false;

let uiContent = {};

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".name").classList.add("loaded");
  }, 100);
});

function splashChar(char) {
  const el = document.createElement("div");
  el.textContent = char;
  el.classList.add("splash-char");

  document.body.append(el);

  const list1 = el.addEventListener("animationend", () => {
    el.remove();
    el.clearEventListener("animationend", list1);
  });
}

function toggleEvilMode() {
  evilButton.textContent = !evilModeActive ? "back to normal mode" : "activate evil mode";

  if (!evilModeActive) {
    evilModeActive = true;

    uiContent.originalNAME = document.querySelector(".name").innerHTML;
    uiContent.originalBX_MAIN_CONTENT = document.querySelector(".bx-main-content").innerHTML;

    document.querySelector(".bx-main-content").innerHTML =
      uiContent.originalBX_MAIN_CONTENT.replace("Greatest", "<span orig>Evilest</span>");
    document.querySelector(".name").innerHTML = uiContent.originalNAME.replace("blue", "evil");
    document.documentElement.classList.add("evil");
    splashChar("😈");
  } else {
    evilModeActive = false;

    document.querySelector(".bx-main-content").innerHTML = uiContent.originalBX_MAIN_CONTENT;
    document.querySelector(".name").innerHTML = uiContent.originalNAME;
    document.documentElement.classList.remove("evil");
  }
}

evilButton.addEventListener("click", () => {
  toggleEvilMode();
});

function isMobile() {
  return /Android|iPhone|iPad|iPod|Windows Phone/i.test(navigator.userAgent);
}

if (isMobile()) {
  document.querySelector(".mobile-warn-fback").hidden = false;
}
