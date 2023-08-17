// JavaScript Document

//Värisuunnittelu
function show(btn) {
  document.getElementById("demo1").innerHTML = btn.id;
}

function show2(btn) {
  document.getElementById("demo2").innerHTML = btn.id;
}
//Vasen seinä
function callVasen(color) {
  document.getElementById("vasenSeina").setAttribute("fill", color)
}

//Oikea seinä
function callOikea(color) {
  document.getElementById("oikeaSeina").setAttribute("fill", color);
}

// Vasemman ja Oikean seinän värien nollaus
function callValkoinen(color) {
  document.getElementById("vasenSeina").setAttribute("fill", color);
  document.getElementById("oikeaSeina").setAttribute("fill", color);
  document.getElementById("demo1").innerHTML = "";
  document.getElementById("demo2").innerHTML = "";
}

function seinanVariVasen() {
  var x = document.getElementById("mySelect").value;
  document.getElementById("demo1").innerHTML = x;
}

function seinanVariOikea() {
  var y = document.getElementById("mySelect").value;
  document.getElementById("demo2").innerHTML = y;
}

//Seinien nollaus
function nollaus() { 
  document.getElementById("vasenSeina").setAttribute("fill", color);
  document.getElementById("oikeaSeina").setAttribute("fill", color);
}

//Galleria
let slideIndex = 1;
showSlides(slideIndex);

// Seuraava/edellinen napit
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}