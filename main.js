const parallax = document.getElementById("home-img-lg");
const parallax1 = document.getElementById("parallax1");
const parallax2 = document.getElementById("parallax2");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionX = offset * -0.3 - 100 + "px";

  if (offset > 100) {
    document.getElementById("handler-top").classList.add("active");
  } else {
    document.getElementById("handler-top").classList.remove("active");
  }
});

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;
  offset -= 3100;
  parallax1.style.backgroundPositionY = offset * 0.1 + "px";
});

function myFunction() {
  document.getElementById("check").checked = false;
}

function scrollInto(id) {
  let element = document.getElementById(id);
  var offsetPosition =
    element.getBoundingClientRect().top + window.pageYOffset - 120;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

function reveal() {
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
}

window.addEventListener("scroll", reveal);

const topPage = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
