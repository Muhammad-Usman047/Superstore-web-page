const modal = document.getElementById('auth-modal');
const loginButton = document.getElementById('login-button');
const closeButton = document.getElementById('close-modal');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showSignup = document.getElementById('show-signup');
const showLogin = document.getElementById('show-login');

loginButton.addEventListener('click', function () {
    modal.style.display = 'flex';
    loginForm.classList.remove('hidden');
    signupForm.classList.add('hidden');
});

closeButton.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

showSignup.addEventListener('click', function () {
    loginForm.classList.add('hidden');
    signupForm.classList.remove('hidden');
});

showLogin.addEventListener('click', function () {
    signupForm.classList.add('hidden');
    loginForm.classList.remove('hidden');
});

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted! This is just a demo.');
    });
});