let rawData = document.querySelectorAll(".relic-set-container .col");
let parsedData = [];

rawData.forEach((oneCone) => {
  let name = oneCone.querySelector(".hsr-set-name h4").innerHTML;
  let rarity;

  switch (oneCone.querySelector(".hsr-set-image").classList[1]) {
    case "rarity-3":
      rarity = "blue";
      break;
    case "rarity-4":
      rarity = "purple";
      break;
    case "rarity-5":
      rarity = "gold";
      break;

    default:
      rarity = "error";
      break;
  }

  let path = oneCone.querySelector(".hsr-path").classList[1];
  let img = oneCone.querySelector("picture img").src;

  let description = oneCone.querySelector(".hsr-set-description").textContent;

  let tmpStats = oneCone.querySelector(".hsr-set-stats");

  let hp = Number(tmpStats.querySelectorAll(".cone-pills")[0].innerText.match(/[\d]+$/)[0]);
  let atk = Number(tmpStats.querySelectorAll(".cone-pills")[1].innerText.match(/[\d]+$/)[0]);
  let def = Number(tmpStats.querySelectorAll(".cone-pills")[2].innerText.match(/[\d]+$/)[0]);

  parsedData.push({ name, rarity, path, img, description, hp, atk, def });
});

// console.log(parsedData)

let i = 0;
let link = document.createElement("a");
let dlPictures = setInterval(() => {
  if (i >= parsedData.length) {
    link.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(parsedData));
    link.download = "lightconesDataAllPrydwen.json";
    link.click();

    clearInterval(dlPictures);
    return;
  }
  link.href = parsedData[i].img;
  link.download = `${parsedData[i].name}.webp`;
  link.click();

  parsedData[i].img = `assets/lightcones/${parsedData[i].name}.webp`;

  i++;
}, 150);
