let img1 = document.querySelector('[data-caps="1"]');
let img2 = document.querySelector('[data-caps="2"]');
let img3 = document.querySelector('[data-caps="3"]');
let img4 = document.querySelector('[data-caps="4"]');

let popUp1 = document.querySelector('[data-caps="1"]+div');
let popUp2 = document.querySelector('[data-caps="2"]+div');
let popUp3 = document.querySelector('[data-caps="3"]+div');
let popUp4 = document.querySelector('[data-caps="4"]+div');

img1.addEventListener('click', (e) =>{ 
    popUp1.classList.toggle('hidden');
})
img2.addEventListener('click', (e) =>{ 
    popUp2.classList.toggle('hidden');
})
img3.addEventListener('click', (e) =>{ 
    popUp3.classList.toggle('hidden');
})
img4.addEventListener('click', (e) =>{ 
    popUp4.classList.toggle('hidden');
})

popUp1.addEventListener('click', (e) => {
    popUp1.classList.toggle('hidden');
})
popUp2.addEventListener('click', (e) => {
    popUp2.classList.toggle('hidden');
})
popUp3.addEventListener('click', (e) => {
    popUp3.classList.toggle('hidden');
})
popUp4.addEventListener('click', (e) => {
    popUp4.classList.toggle('hidden');
})