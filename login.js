// scripts.js

let loggedIn = false;

function showTab(tabId) {
    if (tabId === 'inicio' && !loggedIn) {
        alert("Necesitas iniciar sesión para acceder a esta sección.");
        return;
    }

    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));

    document.getElementById(tabId).classList.remove('hidden');
}

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'xolosramirez' && password === 'micramagnum') {
        loggedIn = true;
        document.getElementById('login-section').classList.add('hidden');
        document.getElementById('post-section').classList.remove('hidden');
        showTab('inicio');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

function postContent() {
    if (!loggedIn) {
        alert("Necesitas iniciar sesión para publicar.");
        return;
    }

    const content = document.getElementById('post-content').value;
    if (content) {
        const postsDiv = document.getElementById('posts');
        const postDiv = document.createElement('div');
        postDiv.textContent = content;
        postsDiv.appendChild(postDiv);
        document.getElementById('post-content').value = '';
    }
}

document.getElementById('upload').addEventListener('change', function(event) {
    const files = event.target.files;
    const galleryDiv = document.getElementById('gallery');
    galleryDiv.innerHTML = '';

    Array.from(files).forEach(file => {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        galleryDiv.appendChild(img);
    });
});

