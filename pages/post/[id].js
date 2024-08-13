export default function Post({ post }) {
    if (!post) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <header>
                <h1>Xolos Ramirez</h1>
                <p>Criadero de Xoloitzcuintli</p>
            </header>

            <nav>
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/gallery">Gallery</a>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
            </

      
