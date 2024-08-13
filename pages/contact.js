export default function Contact() {
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
                <h2>Contact Us</h2>
                <form action="mailto:info@xolosramirez.com" method="post" enctype="text/plain">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    
                    <button type="submit">Send</button>
                </form>
            </main>

            <footer>
                <p>&copy; 2024 Xolos Ramirez. All rights reserved.</p>
            </footer>
        </div>
    );
}
