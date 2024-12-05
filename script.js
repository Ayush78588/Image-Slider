let id;
let i = 0;
let ar = document.getElementsByClassName('image');
let l = ar.length;

let next = document.getElementById('next');
let prev = document.getElementById('prev');

function startSlideShow() {
    id = setInterval(function () {
        slide(1);
    }, 2000);
}
function showImage(i) {
    ar[i].style.display = 'block';
}
function slide(x) {

    ar[i].style.display = 'none';
    i = i + x;
    if (i === -1) {
        i = l - 1;
    }
    if (i === l) {
        i = 0;
    }
    showImage(i);
}

showImage(i);
startSlideShow();

next.addEventListener('click', function () {
    clearInterval(id);
    slide(1);
    startSlideShow();
});
prev.addEventListener('click', function () {
    clearInterval(id);
    slide(-1);
    startSlideShow();
});
