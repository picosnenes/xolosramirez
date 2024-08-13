import { useState } from 'react';

export default function Admin() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handlePublish = async () => {
        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content }),
        });

        if (response.ok) {
            alert('Article published successfully');
        } else {
            alert('Failed to publish article');
        }
    };

    return (
        <div>
            <header>
                <h1>Admin - Xolos Ramirez</h1>
            </header>

            <main>
                <h2>Publish a New Article</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button onClick={handlePublish}>Publish</button>
            </main>

            <footer>
                <p>&copy; 2024 Xolos Ramirez. All rights reserved.</p>
            </footer>
        </div>
    );
}
