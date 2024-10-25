document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-links li');

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

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Hero section background slideshow
    const heroSection = document.getElementById('hero');
    const slides = ['images/hero-bg-1.jpg', 'images/hero-bg-2.jpg', 'images/hero-bg-3.jpg'];
    let currentSlide = 0;

    function changeBackground() {
        heroSection.style.backgroundImage = `url(${slides[currentSlide]})`;
        currentSlide = (currentSlide + 1) % slides.length;
    }

    setInterval(changeBackground, 5000);
	

    // Blog post data (replace with actual blog posts)
    const blogPosts = [
        {
            title: "Climbing Mountains and Coding Algorithms",
            date: "2024-03-15",
            category: "personal",
            content: "What mountaineering taught me about problem-solving in AI..."
        },
        {
            title: "Latest Trends in AI and Machine Learning",
            date: "2024-03-10",
            category: "ai-data-science",
            content: "Exploring the cutting-edge developments in AI..."
        },
        // Add more blog posts here
    ];

    // Function to create blog post elements
    function createBlogPostElement(post) {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p class="date">${post.date}</p>
            <p>${post.content.substring(0, 100)}...</p>
            <a href="#" class="read-more">Read More</a>
        `;
        return postElement;
    }

    // Function to filter blog posts by category
    function filterBlogPosts(category) {
        const blogPostsContainer = document.querySelector('.blog-posts');
        blogPostsContainer.innerHTML = '';

        const filteredPosts = category === 'all' 
            ? blogPosts 
            : blogPosts.filter(post => post.category === category);

        filteredPosts.forEach(post => {
            blogPostsContainer.appendChild(createBlogPostElement(post));
        });
    }

    // Add event listeners to category buttons
    document.querySelectorAll('.category-btn').forEach(button => {
        button.addEventListener('click', () => {
            document.querySelector('.category-btn.active').classList.remove('active');
            button.classList.add('active');
            filterBlogPosts(button.dataset.category);
        });
    });

    // Initial blog posts load
    filterBlogPosts('all');
	
	// Resources download tracking
    const downloadButtons = document.querySelectorAll('.download-btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent the default download behavior
            const resourceName = e.target.closest('.resource-card').querySelector('h3').textContent;
            console.log(`Resource downloaded: ${resourceName}`);
            // You can add analytics tracking here if needed
            
            // Simulate download (replace with actual download logic)
            setTimeout(() => {
                alert(`Downloading ${resourceName}`);
                // Trigger the actual download here
                window.location.href = e.target.href;
            }, 500);
        });
    });
});