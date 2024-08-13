import fs from 'fs';
import path from 'path';

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
            </nav>

            <main>
                <h2>{post.title}</h2>
                <p>{post.content}</p>
            </main>

            <footer>
                <p>&copy; 2024 Xolos Ramirez. All rights reserved.</p>
            </footer>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { id } = context.params;
    const filePath = path.join(process.cwd(), 'posts', `${id}.json`);
    let post = null;

    try {
        const fileContents = fs.readFileSync(filePath, 'utf8');
        post = JSON.parse(fileContents);
    } catch (err) {
        console.error('Error reading post file:', err);
    }

    return { props: { post } };
}

      
