document.addEventListener('DOMContentLoaded', function() {
    const username = 'xolosramirez';
    const password = 'micramagnum';

    const loginButton = document.getElementById('login-button');
    const loginForm = document.getElementById('login-form');
    const adminSection = document.getElementById('admin-section');
    const logoutButton = document.getElementById('logout-button');
    const editNavButton = document.getElementById('edit-nav');
    const loginError = document.getElementById('login-error');

    loginButton.addEventListener('click', function() {
        loginForm.style.display = 'block';
    });

    logoutButton.addEventListener('click', function() {
        loginForm.style.display = 'none';
        adminSection.style.display = 'none';
        loginButton.style.display = 'block';
        document.getElementById('nav-menu').style.display = 'flex';
    });

    document.getElementById('admin-login').addEventListener('submit', function(event) {
        event.preventDefault();
        const inputUsername = document.getElementById('username').value;
        const inputPassword = document.getElementById('password').value;

        if (inputUsername === username && inputPassword === password) {
            loginForm.style.display = 'none';
            adminSection.style.display = 'block';
            loginButton.style.display = 'none';
            document.getElementById('nav-menu').style.display = 'none';
        } else {
            loginError.style.display = 'block';
        }
    });

    editNavButton.addEventListener('click', function() {
        const newNav = prompt('Introduce las nuevas pestañas del menú, separadas por comas:');
        if (newNav) {
            const navItems = newNav.split(',').map(item => `<li><a href="#">${item.trim()}</a></li>`).join('');
            document.getElementById('nav-menu').innerHTML = navItems;
        }
    });
});

