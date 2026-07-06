/**
 * InfoJakarta - Search Engine
 * Handles live input query matches and triggers dynamic view updates.
 * Designed for easy reading and explanation by second-semester students.
 */

// Search matches helper
function matchKeyword(item, query, fields) {
    if (!query) return true;
    const lowerQuery = query.toLowerCase().trim();
    
    return fields.some(field => {
        const val = item[field];
        if (typeof val === 'string') {
            return val.toLowerCase().includes(lowerQuery);
        }
        return false;
    });
}

// Binds search events on pages
function initSearch(inputSelector, onSearchCallback) {
    const searchInput = document.querySelector(inputSelector);
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value;
        onSearchCallback(query);
    });
}
