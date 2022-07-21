let score = 0;

const buttonA1 = document.querySelector(".a1");
const buttonA2 = document.querySelector(".a2");
const buttonA3 = document.querySelector(".a3");
const buttonA4 = document.querySelector(".a4");

const buttonB1 = document.querySelector(".b1");
const buttonB2 = document.querySelector(".b2");
const buttonB3 = document.querySelector(".b3");
const buttonB4 = document.querySelector(".b4");

const buttonC1 = document.querySelector(".c1");
const buttonC2 = document.querySelector(".c2");
const buttonC3 = document.querySelector(".c3");
const buttonC4 = document.querySelector(".c4");

buttonA1.addEventListener('click', e => {
    score +=1;
    console.log(score);
})
buttonA2.addEventListener('click', e => {
    score -=1;
    console.log(score);
})
buttonA3.addEventListener('click', e => {
    score -=1;
    console.log(score);
})
buttonA4.addEventListener('click', e => {
    score -=1;
    console.log(score);
})