$("button.drum").click(function (e) {
  playAudio(e.text());
});

document.addEventListener("keydown", function (event) {
  playAudio(event.key);
});

function playAudio(key) {
  buttonAnimation(key.toLowerCase());
  switch (key.toLowerCase()) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
      break;
  }
}

function buttonAnimation(key) {
  var activeButton = $("." + key);
  if (activeButton) {
    activeButton.addClass("pressed");
    setTimeout(function () {
      activeButton.removeClass("pressed");
    }, 100);
  }
}
