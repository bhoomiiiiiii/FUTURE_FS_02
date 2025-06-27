// Initial filter
        priceRange.dispatchEvent(new Event('input'));

        // Login functionality
        document.addEventListener('DOMContentLoaded', function () {
            const loginForm = document.getElementById('loginForm');
            const loginModal = document.getElementById('loginModal');
            const loginError = document.getElementById('loginError');
            loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            if (username === 'bhoomi' && password === '1234') {
                document.body.classList.remove('login-active');
                loginModal.style.display = 'none';
            } else {
                loginError.textContent = 'Invalid username or password.';
            }
            });
        });