const parent = document.querySelector('.blocks');
const red = document.querySelector('.block--red');
const blue = document.querySelector('.block--blue');
const green = document.querySelector('.block--green');
const pink = document.querySelector('.block--pink');
const gray = document.querySelector('.block--gray');


//change position of the blocks/rockets
blue.addEventListener('click', (event) => {
    parent.insertBefore(blue, parent.firstChild);
})
red.addEventListener('click', (event) => {
    parent.insertBefore(red, parent.firstChild);
})
pink.addEventListener('click', (event) => {
    parent.insertBefore(pink, parent.firstChild);
})
gray.addEventListener('click', (event) => {
    parent.insertBefore(gray, parent.firstChild);
})
green.addEventListener('click', (event) => {
    parent.insertBefore(green, parent.firstChild);
})


//move blocks/rockets to right
blue.addEventListener('mousedown', (event) => {
    TweenMax.to(blue, 30, {x:2000});
})
red.addEventListener('mousedown', (event) => {
    TweenMax.to(red, 30, {x:2000});
})
green.addEventListener('mousedown', (event) => {
    TweenMax.to(green, 30, {x:2000});
})
gray.addEventListener('mousedown', (event) => {
    TweenMax.to(gray, 30, {x:2000});
})
pink.addEventListener('mousedown', (event) => {
    TweenMax.to(pink, 30, {x:2000});
})

// pink.addEventListener('mouseup', (event) => {
//     TweenMax.killAll();
// })
