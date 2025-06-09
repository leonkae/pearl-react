function Nav(){
    return(
        <div>
            <div className="logo">
                <img src="https://via.placeholder.com/150" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
            <div className="socialMedia">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
        </div>
    )
}

export default Nav;
// This code defines a React component named `nav` that renders a navigation bar with a logo, links to different pages, and social media links.