let allDataRaw = document.querySelectorAll(".rt-tr-group");
let allDataParsed = [];
allDataRaw.forEach((lcDiv) => {
  let name = lcDiv.querySelector("img").alt;

  let hp = lcDiv.querySelectorAll(".rt-td")[1].innerHTML;
  let atk = lcDiv.querySelectorAll(".rt-td")[2].innerHTML;
  let def = lcDiv.querySelectorAll(".rt-td")[3].innerHTML;

  allDataParsed.push({ name, hp, atk, def });
});

let link = document.createElement("a");
link.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(allDataParsed));
link.download = "lightconesDataStats.json";
link.click();
