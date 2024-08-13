// Variables para almacenamiento de credenciales
const USERNAME = 'xolosramirez';
const PASSWORD = 'micramagnum';

// Función para mostrar las pestañas
function showTab(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('hidden'));
    document.getElementById(tabId).classList.remove('hidden');
    
    // Mostrar sección de edición si es la pestaña del blog
    if (tabId === 'blog') {
        const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
        document.getElementById('edit-blog-section').classList.toggle('hidden', !isLoggedIn);
        loadBlogPosts(); // Cargar los artículos del blog al mostrar la pestaña
    }
}

// Función para iniciar sesión
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username === USERNAME && password === PASSWORD) {
        sessionStorage.setItem('loggedIn', 'true');
        document.getElementById('post-section').classList.remove('hidden');
        document.getElementById('edit-blog-section').classList.remove('hidden');
        alert('Inicio de sesión exitoso');
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}

// Función para publicar contenido en el blog
function publishBlog() {
    const content = document.getElementById('blog-content').value;
    if (content.trim() !== '') {
        let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        blogPosts.push(content);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        document.getElementById('blog-content').value = '';
        loadBlogPosts(); // Recargar los artículos después de publicar
        alert('Artículo publicado');
    } else {
        alert('El contenido del artículo no puede estar vacío');
    }
}

// Función para cargar los artículos del blog desde localStorage
function loadBlogPosts() {
    const blogPostsContainer = document.getElementById('blog-posts');
    blogPostsContainer.innerHTML = '';
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `<p>${post}</p>`;
        blogPostsContainer.appendChild(postElement);
    });
}

// Ocultar las secciones de edición al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
    document.getElementById('post-section').classList.toggle('hidden', !isLoggedIn);
    document.getElementById('edit-blog-section').classList.toggle('hidden', !isLoggedIn);
});
