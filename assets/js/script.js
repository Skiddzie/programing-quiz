let score = 0;
let counter = 0;

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

check = function() {
    let newElement = document.createElement('div');
    const scoreBox = document.getElementById('score');
    scoreBox.insertAdjacentHTML(
        'beforeend',
        'your score is: ',
    );
    scoreBox.insertAdjacentHTML(
        'beforeend',
        score,
    );

  } 


//first set of questions
buttonA1.addEventListener('click', e => {
    score +=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question1");
    element.remove();
})
buttonA2.addEventListener('click', e => {
    score -=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question1");
    element.remove();
})
buttonA3.addEventListener('click', e => {
    score -=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question1");
    element.remove();
})
buttonA4.addEventListener('click', e => {
    score -=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question1");
    element.remove();
})
//

//second set of questions
buttonB1.addEventListener('click', e => {
    score -=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question2");
    element.remove();
})
buttonB2.addEventListener('click', e => {
    score -=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question2");
    element.remove();
})
buttonB3.addEventListener('click', e => {
    score +=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question2");
    element.remove();
})
buttonB4.addEventListener('click', e => {
    score -=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question2");
    element.remove();
})
//

//third set of questions
buttonC1.addEventListener('click', e => {
    score -=1;
    counter +=1;
    
    console.log(counter);
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question3");
    element.remove();
})
buttonC2.addEventListener('click', e => {
    score -=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question3");
    element.remove();
})
buttonC3.addEventListener('click', e => {
    score +=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question3");
    element.remove();
})
buttonC4.addEventListener('click', e => {
    score -=1;
    counter +=1;
    
    if (counter === 3) {
        check();
    }
    let element = document.getElementById("question3");
    element.remove();
})

if (counter === 3) {
    check();
}
//