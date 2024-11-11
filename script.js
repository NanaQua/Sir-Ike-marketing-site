// Use the provided API Key and Search Engine ID
const API_KEY = 'AIzaSyDrUIFyKctoHUk6VcMRQOqzq5Ck5cJSn_Q';
const SEARCH_ENGINE_ID = '20e8b8052bc924865';

// Select input and button elements
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const searchResults = document.getElementById('search-results');

// Event listener for search button
searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        performSearch(query);
    }
});

// Function to perform Google Custom Search
async function performSearch(query) {
    // Build the API URL
    const url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(query)}&key=${API_KEY}&cx=${SEARCH_ENGINE_ID}`;

    try {
        // Fetch data from Google Custom Search API
        const response = await fetch(url);
        const data = await response.json();

        // Display search results
        displayResults(data);
    } catch (error) {
        console.error('Error fetching search results:', error);
    }
}

// Function to display search results on the page
function displayResults(data) {
    // Clear any previous results
    searchResults.innerHTML = '';

    // Check if results were found
    if (data.items) {
        data.items.forEach(item => {
            // Create a div to hold each result
            const resultDiv = document.createElement('div');
            resultDiv.classList.add('result');

            // Add the result title as a clickable link
            const title = document.createElement('a');
            title.href = item.link;
            title.target = '_blank';
            title.textContent = item.title;
            resultDiv.appendChild(title);

            // Add a snippet of the result
            const snippet = document.createElement('p');
            snippet.textContent = item.snippet;
            resultDiv.appendChild(snippet);

            // Append the result div to the search results container
            searchResults.appendChild(resultDiv);
        });
    } else {
        // If no results found, display a message
        searchResults.innerHTML = '<p>No results found.</p>';
    }
}
