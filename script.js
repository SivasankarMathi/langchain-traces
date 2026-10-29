document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorEl = document.getElementById('errorMessage');
    const successEl = document.getElementById('successMessage');
    const submitButton = document.getElementById('loginButton');

    function showError(message) {
        errorEl.textContent = message;
        errorEl.hidden = false;
        successEl.hidden = true;
    }

    function showSuccess(message) {
        successEl.textContent = message;
        successEl.hidden = false;
        errorEl.hidden = true;
    }

    function clearMessages() {
        errorEl.textContent = '';
        errorEl.hidden = true;
        successEl.textContent = '';
        successEl.hidden = true;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearMessages();

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        if (!username || !password) {
            showError('Please fill in both fields.');
            return;
        }

        submitButton.disabled = true;
        submitButton.textContent = 'Signing in...';

        setTimeout(function () {
            submitButton.disabled = false;
            submitButton.textContent = 'Sign In';

            if (username === 'admin' && password === 'password') {
                showSuccess('Login successful! Redirecting to workspace...');
            } else {
                showError('Invalid credentials. Use admin / password to sign in.');
            }
        }, 500);
    });
});
