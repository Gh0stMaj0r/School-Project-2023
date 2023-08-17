//Nappi 1: ota yhteyttä
function yhteys() {
    var elem = document.getElementById("yhteys");
    elem.scrollIntoView();
}

//Nappi 2: maalaus
function maalaus() {
    var elem = document.getElementById("palvelut");
    elem.scrollIntoView();
}

//Nappi 3: tapetointi
function tapetointi() {
    var elem = document.getElementById("palvelut2");
    elem.scrollIntoView();
}

//Nappi 4: paletti
function paletti() {
    var elem = document.getElementById("suunnittelu");
    elem.scrollIntoView();
}

// Suunnittelukartoitus, email-kentän tarkistus, Nappi 6:
function tarkistus() {
    if (email.value != "") {
        alert("Kiitos tilauksesta! Opas on lähetetty sähköpostiisi.");
    } else {
        alert("Anna sähköpostiosoitteesi ennen tilausta, kiitos!")
    }
  }

  // Ota Yhteyttä-lomakkeen tarkistus:
function laheta() {
    if (nimi.value != "" && sposti.value != "" && numero.value != "" && aihe.value != "") {
    alert("Viestisi on lähetetty. Kiitos yhteydenotostasi! Olemme yhteydessä mahdollisimman pian.")
    } else {
      alert("Täytäthän kaikki pakolliset kentät, kiitos!");
    }
    }

//Alkuun nappi
// Haetaan button
let mybutton = document.getElementById("myBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Kun käyttäjä painaa nappia, sivu menee suoraan alkuun
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}