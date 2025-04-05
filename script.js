
// select elements from the DOM
const counterDisplay = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');


// create a counter variable
let count = 0;

// function to update the counter display
function updateCounter() {
    counterDisplay.innerText = count;
    
// change color based on the value of the counter
    if (count > 0) {
        counterDisplay.style.color = 'green';
    } else if (count < 0) {
            counterDisplay.style.color = 'red';
        } else {
            counterDisplay.style.color = 'black';
        }
        
    }


// function to update the counter display
increaseBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

// function to update the counter display
decreaseBtn.addEventListener('click', () => {
    count--;
    updateCounter();
});

// function to update the counter display
resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});



