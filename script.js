// Get search input and button elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const googleSearchIframe = document.getElementById('google-search');

// Add event listener to search button
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        // Update iframe src with search query
        googleSearchIframe.src = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
});
