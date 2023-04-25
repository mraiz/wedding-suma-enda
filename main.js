const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionX = offset * -0.3 - 100 + "px";

  if (offset > 100) {
    document.getElementById("handler-top").classList.add("active");
    document.getElementById("handler-audio").classList.add("active");
  } else {
    document.getElementById("handler-top").classList.remove("active");
    document.getElementById("handler-audio").classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 3100;
  parallax1.style.backgroundPositionY = offset * 0.1 + "px";
});

const myFunction = () => {
  document.getElementById("check").checked = false;
};

const scrollInto = (id) => {
  let element = document.getElementById(id);
  var offsetPosition =
    element.getBoundingClientRect().top + window.pageYOffset - 120;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
};

const reveal = () => {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

window.addEventListener("scroll", reveal);

const topPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

let isPlay = true;
const muteAudio = () => {
  var audioElem = document.getElementById("musicplayer");
  isPlay = !isPlay;

  if (isPlay) {
    audioElem.muted = true;
    audioElem.pause();
  } else {
    audioElem.muted = false;
    audioElem.play();
  }
};

document.addEventListener("DOMContentLoaded", function () {
  window.scrollTo(0, 0);
});

const openInvitation = () => {
  document.body.classList.add("scrollable");
};

window.addEventListener("click", function () {
  var audioElem = document.getElementById("musicplayer");
  audioElem.play();
});

var d = new Date("2023-05-06 09:00:00");
simplyCountdown(".simply-countdown-one", {
  year: d.getFullYear(),
  month: d.getMonth() + 1,
  day: d.getDate(),
});

const params = new window.URLSearchParams(window.location.search);
const receiver = params.get("to");
if (receiver) {
  let elementReceiver = document.getElementById("receiver");
  let wrapperItem = document.createElement("div");
  wrapperItem.className = "main-font fs-28 mb-2";
  wrapperItem.setAttribute("style", "font-family: 'Quicksand', sans-serif;");
  const itemText = document.createTextNode("Kepada: ");
  wrapperItem.appendChild(itemText);

  let receiverItem = document.createElement("div");
  const receiverName = document.createTextNode(receiver);
  receiverItem.appendChild(receiverName);
  receiverItem.setAttribute("style", "font-family: 'Quicksand', sans-serif;");

  elementReceiver.appendChild(wrapperItem);
  elementReceiver.appendChild(receiverItem);
}
