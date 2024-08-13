export default function Gallery() {
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
                <h2>Gallery</h2>
                <div className="gallery">
                    <img src="/images/image1.jpg" alt="Xoloitzcuintli 1" />
                    <img src="/images/image2.jpg" alt="Xoloitzcuintli 2" />
                    <img src="/images/image3.jpg" alt="Xoloitzcuintli 3" />
                </div>
            </main>

            <footer>
                <p>&copy; 2024 Xolos Ramirez. All rights reserved.</p>
            </footer>
        </div>
    );
}

