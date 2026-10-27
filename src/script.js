document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorEl = document.getElementById('errorMessage');
    const submitButton = document.getElementById('loginButton');

    function showError(message) {
        errorEl.textContent = message;
        errorEl.hidden = false;
    }

    function clearError() {
        errorEl.textContent = '';
        errorEl.hidden = true;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearError();

        const username = usernameInput.value.trim();
        const password = passwordInput.value;

        // Basic client-side validation
        if (!username || !password) {
            showError('Please fill in all fields.');
            return;
        }

        // Simulate an API call delay
        submitButton.disabled = true;
        submitButton.textContent = 'Signing in...';

        setTimeout(function () {
            submitButton.disabled = false;
            submitButton.textContent = 'Sign In';

            // Demo credentials (in a real app this is a server-side check)
            if (username === 'admin' && password === 'password') {
                alert('Login successful! Welcome, ' + username + '.');
            } else {
                showError('Invalid username or password. Please try again.');
            }
        }, 1200);
    });
});