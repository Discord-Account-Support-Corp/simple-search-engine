// Dummy document data for the search engine (you can expand this)
const documents = {
    'doc1': 'Hello world, this is a simple search engine.',
    'doc2': 'Learn how to build a search engine with HTML and JavaScript.',
    'doc3': 'JavaScript is great for making interactive web pages.'
};

// Function to perform a search and display results
function search(query) {
    const results = [];
    for (let doc in documents) {
        if (documents[doc].toLowerCase().includes(query.toLowerCase())) {
            results.push({ doc, content: documents[doc] });
        }
    }
    return results;
}

// Event listener for the search form
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form submission
    const query = document.getElementById('searchQuery').value;
    const results = search(query);
    
    // Display results
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = '';  // Clear previous results
    if (results.length > 0) {
        results.forEach(result => {
            const resultElement = document.createElement('div');
            resultElement.innerHTML = `<strong>${result.doc}</strong>: ${result.content}`;
            resultsContainer.appendChild(resultElement);
        });
    } else {
        resultsContainer.innerHTML = 'No results found.';
    }
});
