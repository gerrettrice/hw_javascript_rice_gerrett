function howdy() {
    console.log('Gerrett Rice says goodnight!');
}

howdy();

var numba = function (string) {
    if (string.length < 7) {
        console.log('What a short little word!');
    } else if (string.length > 7) {
        console.log('I am sorry, but that is too many to count.');
    } else {
        console.log('7, what a perfect choice!');
    }
};

numba('7');
numba('seventy');
numba('university');

function inception(display, favMovie) {
    display(favMovie);
}

function display(favMovie) {
    console.log(favMovie + ' is a fantastic movie!');
}

inception(display, 'Interstellar');
