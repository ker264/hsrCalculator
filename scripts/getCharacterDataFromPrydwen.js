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

      let charDataParsed = JSON.parse(localStorage.getItem("charsData")) ?? [];

      for (let i = 0; i < allData.length; i++) {
        const statList = allData.item(i).getElementsByTagName("td");

        const name = allData.item(i).querySelector("th").getElementsByTagName("span").item(1).innerHTML;
        const HP = Number(statList.item(0).innerHTML.match("[0-9]+"));
        const ATK = Number(statList.item(1).innerHTML.match("[0-9]+"));
        const DEF = Number(statList.item(2).innerHTML.match("[0-9]+"));
        const SPEED = Number(statList.item(3).innerHTML.match("[0-9]+"));
        const ENERGY = Number(statList.item(4).innerHTML.match("[0-9]+"));

        if (charDataParsed.length <= i) {
          let HP_arr = [HP];
          let ATK_arr = [ATK];
          let DEF_arr = [DEF];

          charDataParsed.push({ name, SPEED, ENERGY, HP: HP_arr, ATK: ATK_arr, DEF: DEF_arr });
        } else {
          charDataParsed[i].HP.push(HP);
          charDataParsed[i].ATK.push(ATK);
          charDataParsed[i].DEF.push(DEF);
        }
      }

      localStorage.setItem("charsData", JSON.stringify(charDataParsed));
      console.log(charDataParsed);
    };

    let downloadAllCollectedData = document.createElement("button");
    downloadAllCollectedData.innerText = "dlYoinkedData!";
    downloadAllCollectedData.classList.add("btn", "btn-secondary");
    downloadAllCollectedData.onclick = () => {
      let charDataParsed = JSON.parse(localStorage.getItem("charsData")) ?? [];

      let dlLink = document.createElement("a");
      dlLink.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(charDataParsed));
      dlLink.download = "charsData.json";
      document.body.appendChild(dlLink);
      dlLink.click();
      document.body.removeChild(dlLink);

      console.log(charDataParsed);
    };

    document.getElementsByClassName("stats-controls").item(0).append(collectDataBtn);
    document.getElementsByClassName("stats-controls").item(0).append(downloadAllCollectedData);
  }, 4000);
}

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", sFunc());

  // Your code here...
})();
