import { useRouter } from 'next/router';

export default function Article() {
    const router = useRouter();
    const { title } = router.query;

    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const article = articles.find((article) => article.title === title);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </div>
    );
}
