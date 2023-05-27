var card = document.getElementById("card");
var changeButton = document.getElementById("changeButton");
var startButton = document.getElementById("startButton");

var jsonDosyaURL = 'newDosya3.json';
var jsonVerisi = null;

var istek = new XMLHttpRequest();
istek.open('GET', jsonDosyaURL, true);
istek.onreadystatechange = function() {
  if (this.readyState === 4 && this.status === 200) {
    jsonVerisi = JSON.parse(this.responseText);
  }
};
istek.send();


startButton.addEventListener("click", function() { 
  if (jsonVerisi) {
    var randomIndex = Math.floor(Math.random() * jsonVerisi.length);
    var randomMovie = jsonVerisi[randomIndex];

    var cardTitle = card.querySelector(".card-title");
    var cardText = card.querySelector(".card-text");
    var timeElement = card.querySelector(".time span:last-child");
    var releaseTimeElement = card.querySelector(".releaseTime span:last-child");
    var imdbElement = card.querySelector(".imdb span:last-child");
    var cardImage = card.querySelector(".card-img-top");
    var video = card.querySelector(".video");

    cardImage.src = randomMovie.img;
    cardTitle.innerHTML = randomMovie.Name;
    cardText.innerHTML = randomMovie.Description;
    timeElement.innerHTML = randomMovie.Time;
    releaseTimeElement.innerHTML = randomMovie.ReleaseDate;
    imdbElement.innerHTML = randomMovie.imdbb;
    video.src = randomMovie.Trailer;
  }
});

changeButton.addEventListener("click", function() { 
  if (jsonVerisi) {
    var randomIndex = Math.floor(Math.random() * jsonVerisi.length);
    var randomMovie = jsonVerisi[randomIndex];

    var cardTitle = card.querySelector(".card-title");
    var cardText = card.querySelector(".card-text");
    var timeElement = card.querySelector(".time span:last-child");
    var releaseTimeElement = card.querySelector(".releaseTime span:last-child");
    var imdbElement = card.querySelector(".imdb span:last-child");
    var cardImage = card.querySelector(".card-img-top");
    var video = card.querySelector(".video");

    cardImage.src = randomMovie.img;
    cardTitle.innerHTML = randomMovie.Name;
    cardText.innerHTML = randomMovie.Description;
    timeElement.innerHTML = randomMovie.Time;
    releaseTimeElement.innerHTML = randomMovie.ReleaseDate;
    imdbElement.innerHTML = randomMovie.imdbb;
    video.src = randomMovie.Trailer;
  }
});
