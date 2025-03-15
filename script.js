// Flip project cards on click
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
});

// Toggle mobile menu
document.getElementById('menu-toggle').addEventListener('click', function () {
    const nav = document.getElementById('ul1');
    nav.classList.toggle('active');
});
// Flip project cards on click
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
});
