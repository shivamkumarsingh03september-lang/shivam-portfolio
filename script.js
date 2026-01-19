// Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    if (body.classList.contains('dark')) {
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Smooth Scroll for Nav Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Function to inject private links
window.addEventListener('DOMContentLoaded', () => {
    // Hero Buttons
    document.getElementById('hero-github').href = myPrivateLinks.github;
    document.getElementById('hero-linkedin').href = myPrivateLinks.linkedin;

    // Social Icons
    document.getElementById('social-twitter').href = myPrivateLinks.twitter;
    document.getElementById('social-instagram').href = myPrivateLinks.instagram;
    document.getElementById('social-github').href = myPrivateLinks.github;
    document.getElementById('social-linkedin').href = myPrivateLinks.linkedin;
});
// This function runs as soon as the page loads
window.onload = function() {
    // We define the links here instead of a separate config file
    const links = {
        github: "https://github.com/shivamkumarsingh03september-lang/shiv-demo.git",
        linkedin: "https://www.linkedin.com/in/shivam-singh-26a191396",
        twitter: "https://x.com/shiv03amsingh",
        instagram: "https://www.instagram.com/shivamsingh_ss_/"
    };

    // This injects the links into your HTML elements by their ID
    if(document.getElementById('hero-github')) {
        document.getElementById('hero-github').href = links.github;
        document.getElementById('hero-linkedin').href = links.linkedin;
        document.getElementById('social-twitter').href = links.twitter;
        document.getElementById('social-instagram').href = links.instagram;
        document.getElementById('social-github').href = links.github;
        document.getElementById('social-linkedin').href = links.linkedin;
    }
};