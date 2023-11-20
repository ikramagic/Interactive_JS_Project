//F1

const footer = document.querySelector("footer");
let countMyClicks = 0;

footer.addEventListener("click", function () {
  countMyClicks++;
  console.log("Tu critiques mais t'as cliqué " + countMyClicks + " fois !");
});

//F2

const menuBtn = document.querySelector(".navbar-toggler");
const navHead = document.getElementById("navbarHeader");

menuBtn.addEventListener("click", function () {
  navHead.classList.toggle("collapse");
});


//F3

const firstCard = document.querySelectorAll(".card")[0];

let editBtnFirst = document.querySelectorAll(".btn-outline-secondary")[0];

editBtnFirst.addEventListener("click", function () {
  firstCard.style.color = "red";
});


//F4

const secondCard = document.querySelectorAll(".card")[1];
const editBtnSecond = document.querySelectorAll(".btn-outline-secondary")[1];

editBtnSecond.addEventListener("click", function () {
  if (secondCard.style.color === "green") {
    secondCard.style.color = "";
  } else {
    secondCard.style.color = "green";
  }
});

//F5

const bootstrapLink = document.querySelector('head link[rel="stylesheet"]');
const header = document.querySelector('header');

header.addEventListener("dblclick", function () {
    if (bootstrapLink) {
        bootstrapLink.disabled = !bootstrapLink.disabled;
    }
});

//F6

const viewButtons = document.querySelectorAll('.btn-success');
const cards = document.querySelectorAll('.card');

viewButtons.forEach((button, index) => {
  button.addEventListener('mouseover', function () {
    cards[index].style.transform = 'scale(0.8)';
    cards[index].querySelector('.card-img-top').style.transform = 'scale(0.2)';
    cards[index].style.transition = 'transform 0.5s ease';
    cards[index].querySelector('.card-text').style.opacity = '0';
  });

  button.addEventListener('mouseout', function () {
    cards[index].style.transform = 'scale(1)';
    cards[index].querySelector('.card-img-top').style.transform = 'scale(1)';
    cards[index].querySelector('.card-text').style.opacity = '1'; 
  });
});