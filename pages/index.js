import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            alert('Login successful');
            router.push('/admin');  // Redirect to the admin page or any protected area
        } else {
            alert('Login failed');
        }
    };

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
                <h2>Welcome to Xolos Ramirez</h2>
                <div className="login">
                    <h3>Login</h3>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Xolos Ramirez. All rights reserved.</p>
            </footer>
        </div>
    );
}
