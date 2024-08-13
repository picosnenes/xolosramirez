import { useState } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        if (username === 'xolosramirez' && password === 'micramagnum') {
            router.push('/admin');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Login Page</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ display: 'block', margin: '10px 0' }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ display: 'block', margin: '10px 0' }}
            />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
