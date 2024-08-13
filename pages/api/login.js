// /pages/api/login.js
export default function handler(req, res) {
    const { username, password } = req.body;

    if (username === 'xolosramirez' && password === 'micramagnum') {
        // You can use sessions or JWT here for real authentication
        // For simplicity, we'll just return a success response
        res.status(200).json({ success: true });
    } else {
        res.status(401).json({ success: false });
    }
}
