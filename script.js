document.querySelector(".btn-start").addEventListener("click",function(){
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const img1 = document.querySelector(".img1");
const img2 = document.querySelector(".img2");
const h1 = document.querySelector("h1");

img1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
img2.setAttribute("src" , "images/dice" + randomNumber2 + ".png");
h1.classList.remove("right-align","left-align","center-align");

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "1. Oyuncu Kazandı! 🎉";
    h1.classList.add("left-align");
}else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").textContent = "2. Oyuncu Kazandı! 🎉";
    h1.classList.add("right-align");
}else {
    document.querySelector("h1").textContent = "Berabere! 🤝" ;
    h1.classList.add("center-align");
}
});