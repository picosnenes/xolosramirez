export default function handler(req, res) {
    const { username, password } = req.body;

    const validUsername = 'xolosramirez';
    const validPassword = 'micramagnum';

    if (username === validUsername && password === validPassword) {
        res.setHeader('Set-Cookie', 'authenticated=true; HttpOnly; Path=/');
        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
}

