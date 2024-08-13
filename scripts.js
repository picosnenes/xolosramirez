// Función para mostrar una pestaña específica
function showTab(tabId) {
    // Obtener todos los elementos con la clase 'tab-content'
    const tabs = document.querySelectorAll('.tab-content');
    
    // Ocultar todas las pestañas
    tabs.forEach(tab => tab.classList.add('hidden'));
    
    // Mostrar la pestaña seleccionada
    document.getElementById(tabId).classList.remove('hidden');
    
    // Gestionar el estado activo de los botones de navegación
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => button.classList.remove('active'));
    const activeButton = Array.from(buttons).find(button => button.textContent.toLowerCase() === tabId);
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Función para publicar el contenido del post
function postContent() {
    const content = document.getElementById('post-content').value;
    const posts = document.getElementById('posts');
    const post = document.createElement('div');
    post.textContent = content;
    posts.appendChild(post);
    document.getElementById('post-content').value = '';
}

// Función de inicio de sesión (ejemplo simple)
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert('Inicio de sesión exitoso');
    } else {
        alert('Por favor, ingrese usuario y contraseña');
    }
}

// Mostrar la pestaña de inicio por defecto
document.addEventListener('DOMContentLoaded', () => showTab('inicio'));
