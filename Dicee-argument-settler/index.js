var random1 = Math.floor(Math.random() * 6) + 1; // genarating random b/w 1-6
var randomdiceimage = "dice" + random1 + ".png";

var randomimagesrc = "images/" + randomdiceimage;
image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomimagesrc);

var random2 = Math.floor(Math.random() * 6) + 1;
var randomimagesrc2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomimagesrc2);

if(random1 > random2){
    document.querySelector("h1").innerHTML = "🚩 Player1 wins";
}

else if(random1 < random2){
    document.querySelector("h1").innerHTML = "Player2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}