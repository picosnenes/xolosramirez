// Función para publicar contenido en el blog
function publishBlog() {
    const content = document.getElementById('blog-content').value;
    const imageFile = document.getElementById('image-upload').files[0];
    const reader = new FileReader();

    if (content.trim() === '' && !imageFile) {
        alert('El contenido del artículo no puede estar vacío y debes seleccionar una imagen.');
        return;
    }

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    if (imageFile) {
        reader.onload = function (e) {
            const post = {
                text: content,
                image: e.target.result
            };
            blogPosts.push(post);
            localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
            document.getElementById('blog-content').value = '';
            document.getElementById('image-upload').value = '';
            loadBlogPosts();
        };
        reader.readAsDataURL(imageFile);
    } else {
        const post = {
            text: content,
            image: null
        };
        blogPosts.push(post);
        localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
        document.getElementById('blog-content').value = '';
        loadBlogPosts();
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
        postElement.innerHTML = `
            ${post.text ? `<p>${post.text}</p>` : ''}
            ${post.image ? `<img src="${post.image}" alt="Imagen del artículo">` : ''}
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

// Ocultar las secciones de edición al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = sessionStorage.getItem('loggedIn') === 'true';
    document.getElementById('post-section').classList.toggle('hidden', !isLoggedIn);
    document.getElementById('edit-blog-section').classList.toggle('hidden', !isLoggedIn);
    loadBlogPosts(); // Cargar los artículos al iniciar la página
});

