/* Here goes your JS code */
const clickMeButton = document.querySelector('#show-popup-form');
const modalPopup = document.querySelector('.popup');
const closeModalButton = document.querySelector('.btn-close');

const form = document.querySelector('.form-input');
const email = form.querySelector('.email');
const password = form.querySelector('.password');
const checkBox = form.querySelector('.checkBox');
const submitButton = form.querySelector('.submit');
const inputSubmit = form.querySelector('input');

//Task 1
const openLoginModal = () => {
    modalPopup.classList.add('show')
};
const closeLoginModal = (event) => {
    modalPopup.classList.remove('show')
};

clickMeButton.addEventListener('click', () => {
    if (clickMeButton.innerHTML === 'Click me!') openLoginModal();
});
closeModalButton.addEventListener('click', closeLoginModal);
//Task 2
const emailValid = () => {
    const emailValue = email.value.trim();

    if (emailValue === '') {
        setErrorFor(email);
        return false;
    } else if (!isEmail(emailValue)) {
        setErrorFor(email);
        return false;
    } else {
        setSuccessFor(email);
        return true;
    }
};
const passwordValid = () => {
    const passwordValue = password.value.trim();

    if (passwordValue === '') {
        setErrorFor(password);
        return false;
    } else if (!isPassword(passwordValue)) {
        setErrorFor(password);
        return false;
    } else {
        setSuccessFor(password);
        return true;
    }
}
const checkBoxValid = () => {
    const checkedValue = checkBox.checked;

    if (!checkedValue) {
        setErrorFor(checkBox);
        return false;
    } else {
        setSuccessFor(checkBox);
        return true;
    }
}

const setErrorFor = (input) => {
    const fields = input.parentElement;
    fields.classList.add('error');
};
const setSuccessFor = (input) => {
    const fields = input.parentElement;
    fields.classList.remove('error');
};

const isEmail = (email) => {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
};
const isPassword = (password) => {
    return /^[A-Za-z]\w{4,16}$/.test(password);
};

const checkInputs = () => {
    if (emailValid(email.addEventListener('input', emailValid)) &&
        passwordValid(password.addEventListener('input', passwordValid)) &&
        checkBoxValid(checkBox.addEventListener('change', checkBoxValid))) {
        return true;
    } else {
        return false;
    }
};

form.addEventListener('change', (event) => {
    event.preventDefault();
    if (checkInputs()){
        submitButton.removeAttribute('disabled');
        submitButton.classList.add('current');
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            submit();
        });
    } else {
        submitButton.setAttribute('disabled', '');
        submitButton.classList.remove('current');
    }
});

//Task 3
const submit = () => {
    setTimeout(closeLoginModal, 3000);
    clickMeButton.textContent = 'Thank you!';
    if (clickMeButton.innerHTML === 'Thank you!') clickMeButton.style.fontSize = '60px';
};





