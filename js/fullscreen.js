
let url = window.location.pathname;

let pageurl = "";

if (url.indexOf("html") > -1) {
  pageurl = url.match(/([^\/]+)(?=\.\w+$)/)[0];
} else {
  pageurl = url.substring(url.lastIndexOf("/") + 1, url.length);
}

try {
  const found = gamesArr.find((element) => element.link == pageurl);

  const content_title = document.querySelector("#content-title");
  content_title.innerText = found.name;
  const content_creator = document.querySelector("#content-creator");
  content_creator.innerText = "by " + found.developer; //set the info
  const contentdesc = document.querySelector("#content-desc");
  contentdesc.innerText = found.desc;

  const contentcontrols = document.querySelector("#content-controls");
  for (let i = 0; i < found.controls.length; i++) {
    let controlitem = document.createElement("li");
    controlitem.innerText = found.controls[i];
    contentcontrols.appendChild(controlitem);
  }
} catch (err) {
  console.log(err);
}

const buildogDiv = (games) => {
  const $divwrap = document.createElement("div");
  $divwrap.classList.add("og-item");
  const $imgcontainer = buildimgcontainer(games);
  const $gridcardtext = buildgridcardtext(games);

  $divwrap.appendChild($imgcontainer);
  $divwrap.appendChild($gridcardtext);
  return $divwrap;
};

const buildimgcontainer = (games) => {
  const $imgcontainer = document.createElement("div"); 
  $imgcontainer.classList.add("img-container");

  const $anchor = document.createElement("a"); 
  $anchor.href = "/" + games.link + ".html";

  const $imgtag = document.createElement("img"); 
  $imgtag.classList.add("hover-center");
  $imgtag.src = "/image/" + games.imgsrc;
  $imgtag.alt = games.name; 

  $anchor.appendChild($imgtag);
  $imgcontainer.appendChild($anchor);

  return $imgcontainer;
};

const buildgridcardtext = (games) => {
  const $gridcardtext = document.createElement("div"); 
  $gridcardtext.classList.add("grid-card-text");

  const $p = document.createElement("p"); 
  $p.classList.add("game-name");
  $p.innerText = games.name; 

  const $h1 = document.createElement("h1"); 
  $h1.classList.add("game-developer");
  $h1.innerText = "by " + games.developer;

  $gridcardtext.appendChild($p);
  $gridcardtext.appendChild($h1);

  return $gridcardtext;
};


const randomGame = () => {
  setTimeout(() => {
    let elemCount = 2;

    if (document.getElementsByClassName("adsbygoogle")[0]) {
      if (
        document.getElementsByClassName("adsbygoogle")[0].dataset.adStatus ==
        "filled"
      ) {
        elemCount = 1;
      }
    }
    const set = new Set();
    while (set.size < elemCount) {
      set.add(Math.floor(Math.random() * gamesArr.length)); 
    }

    const ogwrap = document.querySelector(".og-wrap");

    let ind = set.values(); 
    for (let i = 0; i < elemCount; i++) {
      let randInd = ind.next().value; 
      let $item = buildogDiv(gamesArr[randInd]);
      ogwrap.appendChild($item);
    }
  }, 2000);
};

randomGame();

//Fullscreen function
const reqFs = (elem) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  }
};

//iframe fullscreen
const iFullscreen = () => {
  const elem = document.getElementsByTagName("iframe")[0];
  reqFs(elem);
};

//Canvas fullscreen
const cFullscreen = () => {
  const elem = document.getElementById("canvas");
  reqFs(elem);
};

//Ruffle fullscreen
const rFullscreen = () => {
  const elem = document.getElementById("player");
  reqFs(elem);
};

//Emulator fullscreen
const eFullscreen = () => {
  const elem = document.getElementById("game");
  reqFs(elem);
};