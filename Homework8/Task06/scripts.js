initializeForm();
addInputListeners();

function saveToLocalStorage(key, value) {
    localStorage.setItem(key, value);
}

function loadFromLocalStorage(key) {
    return localStorage.getItem(key) || '';
}

function initializeForm() {
    document.getElementById('name').value = loadFromLocalStorage('name');
    document.getElementById('email').value = loadFromLocalStorage('email');
    document.getElementById('phone').value = loadFromLocalStorage('phone');
}

function addInputListeners() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    nameInput.addEventListener('input', (e) => saveToLocalStorage('name', e.target.value));
    emailInput.addEventListener('input', (e) => saveToLocalStorage('email', e.target.value));
    phoneInput.addEventListener('input', (e) => saveToLocalStorage('phone', e.target.value));
}
