import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [articles, setArticles] = useState([]);
    const router = useRouter();

    useEffect(() => {
        const savedArticles = JSON.parse(localStorage.getItem('articles')) || [];
        setArticles(savedArticles);
    }, []);

    const handlePublish = () => {
        if (title && content) {
            const newArticle = { title, content };
            const updatedArticles = [...articles, newArticle];
            setArticles(updatedArticles);
            localStorage.setItem('articles', JSON.stringify(updatedArticles));
            setTitle('');
            setContent('');
        } else {
            alert('Please fill out both fields');
        }
    };

    const handleViewArticle = (article) => {
        router.push(`/article?title=${encodeURIComponent(article.title)}`);
    };

    const handleLogout = () => {
        router.push('/');
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Admin Page</h1>
            <input
                type="text"
                placeholder="Article Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ display: 'block', margin: '10px 0' }}
            />
            <textarea
                placeholder="Article Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                style={{ display: 'block', margin: '10px 0' }}
            />
            <button onClick={handlePublish}>Publish</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>Published Articles</h2>
            <ul>
                {articles.map((article, index) => (
                    <li key={index} onClick={() => handleViewArticle(article)} style={{ cursor: 'pointer' }}>
                        {article.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
