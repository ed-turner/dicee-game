
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var img1 = "./images/dice" + randomNumber1 + ".png";
var img2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector('.img1').src = img1;

document.querySelector('.img2').src = img2;

var newHeader;

if (randomNumber1 < randomNumber2){
  newHeader = "Aww, you lose! :(... Refresh to try again.";
}
else{
  if (randomNumber2 < randomNumber1){
    newHeader = "You Win! :)";
  }
  else{
    newHeader = "It's a tie!  Refresh to try again.";
  }
}

document.querySelector('body div h1.display-4').textContent = newHeader;
