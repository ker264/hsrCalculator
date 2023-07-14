let children = document.querySelectorAll(".adc15.a4294 a");
let baseLighconesInfo = [];

const gold = 'url("/assets/9ccb2bcba838c979074f93ee2b71298003e762bcac34a33fb0c82c95bdaf4f2f.webp")';
const purple = 'url("/assets/95ce4de4d4d6aee70842cb52f9d102dcdc150493c1e57b51489f59d89e10c429.webp")';
const blue = 'url("/assets/049e63a32861b0c0ff105f221aaf9c09855dbc99c1bc6276e031a2acf0b80679.webp")';

children.forEach((lc) => {
  let imgBgUrl = lc.getElementsByTagName("div")[0].style.backgroundImage;

  let rarity;
  switch (imgBgUrl) {
    case gold:
      rarity = "gold";
      break;
    case purple:
      rarity = "purple";
      break;
    case blue:
      rarity = "blue";
      break;
  }

  let imgUrl = lc.getElementsByTagName("div")[0].querySelector("img").src;

  let path = lc.querySelector(".a2a45 img").alt;
  let name = lc.querySelector("span").innerHTML;

  baseLighconesInfo.push({ name, path, imgUrl, rarity });
});

let i = 0;
let link = document.createElement("a");
let dlPictures = setInterval(() => {
  if (i >= baseLighconesInfo.length) {
    link.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(baseLighconesInfo));
    link.download = "lightconesData.json";
    link.click();

    clearInterval(dlPictures);
    return;
  }
  link.href = baseLighconesInfo[i].imgUrl;
  link.download = `${baseLighconesInfo[i].name}.webp`;
  link.click();

  baseLighconesInfo[i].imgUrl = `assets/lightcones/${baseLighconesInfo[i].name}.webp`;

  i++;
}, 150);
