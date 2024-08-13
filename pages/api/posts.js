// /pages/api/posts.js
import fs from 'fs';
import path from 'path';

const postsDir = path.join(process.cwd(), 'posts');

export default function handler(req, res) {
    if (req.method === 'POST') {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }

        const newPost = {
            title,
            content,
            date: new Date().toISOString(),
        };

        // Write to a file for simplicity (use a database in production)
        const filePath = path.join(postsDir, `${Date.now()}.json`);
        fs.writeFileSync(filePath, JSON.stringify(newPost, null, 2));

        res.status(200).json({ success: true });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
