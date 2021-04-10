/* Here goes your JS code */
const clickMeButton = document.querySelector('#show-popup-form');
const modalPopup = document.querySelector('.popup');
const closeModalButton = document.querySelector('.btn-close');
const formInput = document.querySelector('.form-input');
const submitButton = document.querySelector('.submit');

const openLoginModal = () => {modalPopup.classList.add('show')};
const closeLoginModal = () => {modalPopup.classList.remove('show')};

clickMeButton.addEventListener('click', () => {if (clickMeButton.innerHTML === 'Click me!')  openLoginModal();});
closeModalButton.addEventListener('click', closeLoginModal);

formInput.addEventListener('focus', () => {
    if (formInput.valid) {
        // Validaton - value correct
    } else {
        // Validaton - value incorrect
    }
});

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    // Validation
});
