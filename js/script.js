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

    // Category filtering function for multiple sections
    const filterByCategory = (buttonsSelector, cardsSelector) => {
        const categoryButtons = document.querySelectorAll(buttonsSelector);
        const cards = document.querySelectorAll(cardsSelector);

        if (categoryButtons.length > 0 && cards.length > 0) {
            categoryButtons.forEach(button => {
                button.addEventListener('click', () => {
                    const category = button.dataset.category;

                    // Update active button
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    // Filter cards
                    cards.forEach(card => {
                        const itemCategories = card.dataset.category.split(' ');
                        card.style.display = (category === 'all' || itemCategories.includes(category)) ? 'block' : 'none';
                    });
                });
            });

            // Show all items on initial load by simulating "all" button click
            const allButton = document.querySelector(`${buttonsSelector}[data-category="all"]`);
            if (allButton) {
                allButton.click();
            }
        }
    };

    // Apply the category filter to different sections
    filterByCategory('.category-btn', '.blog-card, .project-card, .certification-card, .publication-card, .resource-card');

    // Image gallery lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.caption');

    document.addEventListener('click', (e) => {
        // Open lightbox
        if (e.target.matches('.gallery-grid img')) {
            lightbox.style.display = 'block';
            lightboxImg.src = e.target.src;
            caption.textContent = e.target.alt;
        }

        // Close lightbox
        if (e.target === lightbox || e.target.matches('.close-lightbox')) {
            lightbox.style.display = 'none';
        }

        // Smooth scrolling for anchor links (event delegation)
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });

    // Responsive font sizes
    const adjustFontSizes = () => {
        requestAnimationFrame(() => {
            const width = window.innerWidth;
            const heroTitle = document.querySelector('#project-hero h1');
            const heroSubtitle = document.querySelector('#project-hero p');

            heroTitle.style.fontSize = width < 768 ? '2rem' : '3rem';
            heroSubtitle.style.fontSize = width < 768 ? '1rem' : '1.2rem';
        });
    };

    // Debounce function for resize event
    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(null, args), delay);
        };
    };

    // Call adjustFontSizes on load and resize with debounce
    window.addEventListener('load', adjustFontSizes);
    window.addEventListener('resize', debounce(adjustFontSizes, 250));

    // Code copy functionality
    document.querySelectorAll('.code-container').forEach(container => {
        const copyButton = container.querySelector('.copy-button');
        const codeBlock = container.querySelector('code');
        const copyMessage = container.querySelector('.copy-message');
    
        copyButton.addEventListener('click', () => {
        const textToCopy = codeBlock.textContent.trim();
        
        if (navigator.clipboard && window.isSecureContext) {
            // Use the Clipboard API if available and in a secure context
            navigator.clipboard.writeText(textToCopy)
            .then(() => showCopyMessage())
            .catch(err => console.error('Failed to copy: ', err));
        } else {
            // Fallback for older browsers or non-secure contexts
            const textArea = document.createElement('textarea');
            textArea.value = textToCopy;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
    
            try {
            document.execCommand('copy');
            showCopyMessage();
            } catch (err) {
            console.error('Failed to copy: ', err);
            } finally {
            document.body.removeChild(textArea);
            }
        }
        });
    
        function showCopyMessage() {
        copyMessage.hidden = false;
        copyMessage.textContent = 'Copied to clipboard!';
        setTimeout(() => {
            copyMessage.hidden = true;
            copyMessage.textContent = '';
        }, 2000);
        }
    });

    // Download tracking for resources
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const resourceName = e.target.closest('.resource-card').querySelector('h3').textContent;
            console.log(`Resource downloaded: ${resourceName}`);
        });
    });
});
