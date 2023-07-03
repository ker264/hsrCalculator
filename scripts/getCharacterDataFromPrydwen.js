// ==UserScript==
// @name         yoinkCharData
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  collectCharactersStat
// @author       ker264
// @match        https://www.prydwen.gg/star-rail/guides/characters-stats/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=prydwen.gg
// @grant        none
// ==/UserScript==

function sFunc() {
  setTimeout(() => {
    let collectDataBtn = document.createElement("button");
    collectDataBtn.innerText = "YOINK!";
    collectDataBtn.classList.add("btn", "btn-secondary");
    collectDataBtn.onclick = () => {
      let allData = document.querySelector("tbody").getElementsByTagName("tr");

      for (let i = 0; i < allData.length; i++) {
        const statList = allData.item(i).getElementsByTagName("td");

        const name = allData.item(i).querySelector("th").getElementsByTagName("span").item(1).innerHTML;
        const HP = Number(statList.item(0).innerHTML.match("[0-9]+"));
        const ATK = Number(statList.item(1).innerHTML.match("[0-9]+"));
        const DEF = Number(statList.item(2).innerHTML.match("[0-9]+"));
        const SPEED = Number(statList.item(3).innerHTML.match("[0-9]+"));
        const ENERGY = Number(statList.item(4).innerHTML.match("[0-9]+"));

        console.log(name, HP, ATK, DEF, SPEED, ENERGY);
      }
    };

    document.getElementsByClassName("stats-controls").item(0).append(collectDataBtn);
  }, 300);
}

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", sFunc());

  // Your code here...
})();
