'use strict';

/**
 * navbar variables
 */

const navOpenBtn = document.querySelector("[data-menu-open-btn]");
const navCloseBtn = document.querySelector("[data-menu-close-btn]");
const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for (let i = 0; i < navElemArr.length; i++) {

  navElemArr[i].addEventListener("click", function () {

    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("active");

  });

}


/**
 * header sticky
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  window.scrollY >= 10 ? header.classList.add("active") : header.classList.remove("active");

});



/**
 * go top
 */

const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  window.scrollY >= 500 ? goTopBtn.classList.add("active") : goTopBtn.classList.remove("active");


// Get the video
  var video = document.getElementById("myVideo");
  var video = document.getElementById("Video1");
  var video = document.getElementById("Video2");
  var video = document.getElementById("Video3");
  var video = document.getElementById("Video4");
  var video = document.getElementById("Video5");
  var video = document.getElementById("Video6");





});

{let vid = document.getElementById("myVideo");
vid.controls = true;

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}};


{let vid = document.getElementById("Video1");
vid.controls = true;

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}};


{let vid = document.getElementById("Video2");
vid.controls = true;

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}};


{let vid = document.getElementById("Video3");
vid.controls = true;

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}};


{let vid = document.getElementById("Video4");
vid.controls = true;

function playVid() {
    vid.play();
}

function pauseVid() {
    vid.pause();
}};