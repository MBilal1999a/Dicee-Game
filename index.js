let randonNumber1=Math.floor(Math.random()*6)+1;
//console.log(randonNumber1);
let randomDiceimage1="images/dice"+randonNumber1+".png";
//document.getElementsByClassName("img1").src=randomDiceimage1;
document.querySelectorAll("img")[0].setAttribute("src",randomDiceimage1);
let randonNumber2=Math.floor(Math.random()*6)+1;
//console.log(randonNumber2);
let randomDiceimage2="images/dice"+randonNumber2+".png";
//document.getElementsByClassName("img2").src=randomDiceimage2;
document.querySelectorAll("img")[1].setAttribute("src",randomDiceimage2);

console.log(randonNumber1);
if(randonNumber1>randonNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randonNumber1<randonNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins";

}
else{
    document.querySelector("h1").innerHTML="Draw";

}
