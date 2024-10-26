document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when a nav link is clicked
        navLinkItems.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Highlight current page in navigation
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // Hero section background slideshow
    const heroSection = document.getElementById('hero');
    const slides = ['images/hero-bg-1.jpg', 'images/hero-bg-2.jpg', 'images/hero-bg-3.jpg'];
    let currentSlide = 0;

    if (heroSection) {
        function changeBackground() {
            heroSection.style.backgroundImage = `url(${slides[currentSlide]})`;
            currentSlide = (currentSlide + 1) % slides.length;
        }
        setInterval(changeBackground, 5000);
    }

    // Category filtering for blog list page
    const categoryButtons = document.querySelectorAll('.category-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    if (categoryButtons.length > 0 && blogCards.length > 0) {
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;

                // Update active button
                document.querySelector('.category-btn.active')?.classList.remove('active');
                button.classList.add('active');

                // Filter blog cards
                blogCards.forEach(card => {
                    card.style.display = (category === 'all' || card.dataset.category === category) ? 'block' : 'none';
                });
            });
        });
    }
});
