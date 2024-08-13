import Link from 'next/link';

export default function Blog({ posts }) {
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
            </nav>

            <main>
                <h2>Blog</h2>
                <div className="blog">
                    {posts.map(post => (
                        <article key={post.id}>
                            <h3>
                                <a href={`/post/${post.id}`} target="_blank" rel="noopener noreferrer">
                                    {post.title}
                                </a>
                            </h3>
                            <p>{post.summary}</p>
                        </article>
                    ))}
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Xolos Ramirez. All rights reserved.</p>
            </footer>
        </div>
    );
}

export async function getServerSideProps() {
    const posts = [
        { id: 1, title: 'Blog Post 1', summary: 'Summary of blog post 1.' },
        { id: 2, title: 'Blog Post 2', summary: 'Summary of blog post 2.' },
    ];

    return { props: { posts } };
}


