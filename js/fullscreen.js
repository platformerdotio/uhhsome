
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