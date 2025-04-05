// select elements from the DOM
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');


// create a counter variable
let count = 0;

// function to update the counter display
increaseBtn.addEventListener('click', () => {
    count++;
    counterDisplay.innerText = count;
});

// function to update the counter display
decreaseBtn.addEventListener('click', () => {
    count--;
    counterDisplay.innerText = count;
});

// function to update the counter display
resetBtn.addEventListener('click', () => {
    count = 0;
    counterDisplay.innerText = count;
});



