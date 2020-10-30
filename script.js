'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnShowModal = document.querySelectorAll('.show-modal');
console.log(btnShowModal);

const openModal = function() {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

/*
for(let i=0; i<btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', function() {
        console.log("Button clicked!");
        modal.classList.remove('hidden');
        overlay.classList.remove('hidden')
    });
*/

for(let i=0; i<btnShowModal.length; i++)
    btnShowModal[i].addEventListener('click', openModal);

/*    
btnCloseModal.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});

overlay.addEventListener('click', function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
*/

//Instead of the above step, we can use function to simply things

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//Escape key function to close the overlay
document.addEventListener('keydown', function(e) {
    if(e.key === 'Escape' && !modal.classList.contains('hidden'))
        closeModal();
});