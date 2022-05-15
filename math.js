// create a random number between 0 and 9
Math.floor(Math.random() * 10);

// create a random number between 0 and 10
Math.floor(Math.random() * 11);

// return a random number between min (included) and max (excluded)
function random(min , max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// return a random number between min and max (both included)
function random(min , max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}