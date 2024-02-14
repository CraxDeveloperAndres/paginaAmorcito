//botones para activar

const Pbirth = document.querySelector('.btonBth');
const PSanV = document.querySelector('.btonSan');
const Pinicio = document.querySelector('.btnLogin-popup');


//clases
const classBth = document.querySelector('.activo-bth');
const classV = document.querySelector('.activo-sanV');
const primero = document.querySelector('.primero');

classV.classList.add('no');
classBth.classList.add('no');

Pbirth.addEventListener('click',()=> {

    classBth.classList.remove('no');
    classV.classList.add('no');
    primero.classList.remove('primero');
    primero.classList.add('no');
});

PSanV.addEventListener('click',()=> {

    classV.classList.remove('no');
    classBth.classList.add('no');
    primero.classList.remove('primero');
    primero.classList.add('no');
   
});

Pinicio.addEventListener('click',()=> {

    classBth.classList.add('no');
    classV.classList.add('no');
    primero.classList.remove('no');

});





