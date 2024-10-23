document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const caption = document.querySelector('.caption');
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    // Event delegation for smooth scrolling and gallery
    document.addEventListener('click', (e) => {
        // Smooth scrolling for anchor links
        if (e.target.matches('a[href^="#"]')) {
            e.preventDefault();
            document.querySelector(e.target.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Image gallery lightbox
        if (e.target.matches('.gallery-grid img')) {
            lightbox.style.display = 'block';
            lightboxImg.src = e.target.src;
            caption.textContent = e.target.alt;
        }

        // Close lightbox
        if (e.target === lightbox || e.target.matches('.close-lightbox')) {
            lightbox.style.display = 'none';
        }

        // Responsive navigation
        if (e.target === hamburger || e.target.closest('.hamburger')) {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        }

        // Close mobile menu when a link is clicked
        if (e.target.matches('.nav-links a')) {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
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
            navigator.clipboard.writeText(codeBlock.textContent)
                .then(() => {
                    copyMessage.hidden = false;
                    setTimeout(() => copyMessage.hidden = true, 2000);
                })
                .catch(err => console.error('Could not copy text: ', err));
        });
    });
});