// projects.js
document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const projectCards = document.querySelectorAll('.project-card');

    function filterProjects(category) {
        projectCards.forEach(card => {
            const cardCategories = card.dataset.category.split(' ');
            if (category === 'all' || cardCategories.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    function updateActiveButton(clickedButton) {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        clickedButton.classList.add('active');
    }

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            updateActiveButton(button);
            filterProjects(category);
        });
    });

    // Initialize with 'all' category
    filterProjects('all');
});