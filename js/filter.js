/**
 * InfoJakarta - Filtering Engine
 * Manages category/city filters, pill tab toggles, and dataset matching.
 * Designed for easy reading and explanation by second-semester students.
 */

// Filter match helper
function matchFilter(item, field, expectedValue) {
    if (!expectedValue || expectedValue === 'All' || expectedValue === 'Semua') {
        return true;
    }
    return item[field] === expectedValue;
}

// Set active class on filter tab buttons
function initFilterTabs(tabContainerSelector, onTabChangeCallback) {
    const tabContainer = document.querySelector(tabContainerSelector);
    if (!tabContainer) return;

    tabContainer.addEventListener('click', (e) => {
        const clickedTab = e.target.closest('.filter-tab');
        if (!clickedTab) return;

        // Deactivate other tabs
        tabContainer.querySelectorAll('.filter-tab').forEach(tab => {
            tab.classList.remove('active');
        });

        // Activate clicked tab
        clickedTab.classList.add('active');

        // Trigger callback
        const value = clickedTab.dataset.filter || clickedTab.textContent.trim();
        onTabChangeCallback(value);
    });
}

// Binds select dropdown events
function initFilterSelects(selectSelectors, onSelectChangeCallback) {
    selectSelectors.forEach(selector => {
        const select = document.querySelector(selector);
        if (!select) return;

        select.addEventListener('change', () => {
            onSelectChangeCallback();
        });
    });
}
