import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Admin() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [articles, setArticles] = useState([]);
    const router = useRouter();

    const handlePublish = () => {
        const newArticle = { title, content };
        setArticles([...articles, newArticle]);
        localStorage.setItem('articles', JSON.stringify([...articles, newArticle]));
        setTitle('');
        setContent('');
    };

    const handleLogout = () => {
        router.push('/');
    };

    const handleViewArticle = (article) => {
        router.push(`/article?title=${encodeURIComponent(article.title)}`);
    };

    return (
        <div>
            <h1>Admin Page</h1>
            <input
                type="text"
                placeholder="Article Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Article Content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handlePublish}>Publish</button>
            <button onClick={handleLogout}>Logout</button>
            <h2>Published Articles</h2>
            <ul>
                {articles.map((article, index) => (
                    <li key={index} onClick={() => handleViewArticle(article)}>
                        {article.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}

