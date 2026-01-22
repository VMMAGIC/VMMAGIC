// Anime File Page JavaScript
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('animeSearch');
    const buttons = document.querySelectorAll('.anime-button');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase();

        buttons.forEach(button => {
            const name = button.getAttribute('data-name');
            if (name.includes(query)) {
                button.style.display = 'inline-block';
            } else {
                button.style.display = 'none';
            }
        });
    });
});
