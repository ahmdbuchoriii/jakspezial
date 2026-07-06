/**
 * InfoJakarta - Main Application Coordinator
 * Boots shared interface elements and triggers page-specific setup functions.
 * Designed for easy reading and explanation by second-semester students.
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Shared Layout Initializations
    initLoadingScreen();
    initStickyHeader();
    initMobileNav();
    initBackToTop();

    // 2. Page-Specific Router Initializations
    const pageId = document.body.getAttribute('data-page');
    
    switch (pageId) {
        case 'home':
            initHomePage();
            break;
        case 'profile':
            initProfilePage();
            break;
        case 'administrasi':
            initAdministrasiPage();
            break;
        case 'wisata':
            initWisataPage();
            break;
        case 'kuliner':
            initKulinerPage();
            break;
        case 'transportasi':
            initTransportasiPage();
            break;
        case 'gallery':
            initGalleryPage();
            break;
        case 'faq':
            initFaqPage();
            break;
        case 'about':
            initAboutPage();
            break;
        default:
            console.log("No specific page router bound.");
    }
});

window.addEventListener('load', () => {
    if (document.body.getAttribute('data-page') === 'profile') {
        initProfilePage();
    }
});

// Shared Layout Functions
function initLoadingScreen() {
    const loader = document.getElementById('loading-screen');
    if (!loader) return;
    
    // Smooth transition buffer
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('fade-out');
        }, 500);
    });

    // Fallback if load event doesn't trigger immediately
    setTimeout(() => {
        if (!loader.classList.contains('fade-out')) {
            loader.classList.add('fade-out');
        }
    }, 1500);
}

function initStickyHeader() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    // Checks if scroll state is beyond header threshold
    const scrollThreshold = 30;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            navbar.classList.add('navbar-scrolled');
        } else {
            // Keep transparent only on home hero, subpages are solid static
            if (!navbar.classList.contains('navbar-static')) {
                navbar.classList.remove('navbar-scrolled');
            }
        }
    });
}

function initMobileNav() {
    const toggleBtn = document.querySelector('.navbar-toggle');
    const closeBtn = document.querySelector('.mobile-nav-close');
    const backdrop = document.querySelector('.mobile-nav-backdrop');
    const sidebar = document.querySelector('.mobile-nav');

    if (!toggleBtn || !sidebar) return;

    toggleBtn.addEventListener('click', () => {
        sidebar.classList.add('open');
        if (backdrop) backdrop.classList.add('open');
        document.body.classList.add('modal-open');
    });

    const closeMenu = () => {
        sidebar.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        document.body.classList.remove('modal-open');
    };

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (backdrop) backdrop.addEventListener('click', closeMenu);
}

function initBackToTop() {
    const backBtn = document.getElementById('back-to-top');
    if (!backBtn) return;

    const scrollThreshold = 400;

    window.addEventListener('scroll', () => {
        if (window.scrollY > scrollThreshold) {
            backBtn.classList.add('show');
        } else {
            backBtn.classList.remove('show');
        }
    });

    backBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}


// ==========================================================================
// Page-Specific Setup Controllers
// ==========================================================================

// 1. HOME PAGE Setup
function initHomePage() {
    // Start slider and stats counters
    initHeroSlider();
    animateStatsCounter();

    // Render quick-links: 3 selected wisata spots for preview grid
    const highlights = wisataData.slice(0, 3);
    renderList(highlights, 'wisata-highlight-grid', createWisataCard);

    initScrollReveal();
}

// 2. PROFILE PAGE Setup
function initProfilePage() {
    const historyContainer = document.getElementById('history-timeline');
    if (historyContainer && profileData.history) {
        historyContainer.innerHTML = profileData.history.map(item => `
            <div class="timeline-item reveal" style="position: relative; padding-left: 30px; margin-bottom: 30px; border-left: 2px solid var(--border-accent);">
                <div class="timeline-dot" style="position: absolute; left: -6px; top: 6px; width: 10px; height: 10px; border-radius: 50%; background-color: var(--primary); border: 2px solid var(--bg-primary);"></div>
                <div class="timeline-year" style="font-family: var(--font-heading); font-size: 16px; font-weight: 700; color: var(--primary); margin-bottom: 4px;">${item.year}</div>
                <p style="font-size: 14px; line-height: 1.5;">${item.event}</p>
            </div>
        `).join('');
    }
    
    // Injects static data values into text tags
    const elGovernor = document.getElementById('prof-gov');
    const elVice = document.getElementById('prof-vice');
    const elArea = document.getElementById('prof-area');
    const elPop = document.getElementById('prof-pop');
    const elMotto = document.getElementById('prof-motto');
    const elAnniv = document.getElementById('prof-anniv');

    if (elGovernor) elGovernor.textContent = profileData.governor;
    if (elVice) elVice.textContent = profileData.viceGovernor;
    if (elArea) elArea.textContent = profileData.area;
    if (elPop) elPop.textContent = profileData.population;
    if (elMotto) elMotto.textContent = profileData.motto;
    if (elAnniv) elAnniv.textContent = profileData.anniversary;

    initScrollReveal();
}

// 3. ADMINISTRASI CITIES PAGE Setup
function initAdministrasiPage() {
    renderList(citiesData, 'cities-grid', createCityCard);
    initScrollReveal();
}

// 4. WISATA PAGE Setup
let activeWisataSearch = '';
let activeWisataCity = 'All';
let activeWisataCategory = 'All';

function initWisataPage() {
    // First render full list
    filterAndRenderWisata();

    // Bind Search Input
    initSearch('#search-input', (query) => {
        activeWisataSearch = query;
        filterAndRenderWisata();
    });

    // Bind City Tab Filter
    initFilterTabs('#city-filter-tabs', (cityValue) => {
        activeWisataCity = cityValue;
        filterAndRenderWisata();
    });

    // Bind Category Selector
    const categorySelect = document.getElementById('category-filter-select');
    if (categorySelect) {
        categorySelect.addEventListener('change', (e) => {
            activeWisataCategory = e.target.value;
            filterAndRenderWisata();
        });
    }
}

function filterAndRenderWisata() {
    let filtered = wisataData;

    // A. Apply Search Filter
    if (activeWisataSearch) {
        filtered = filtered.filter(item => 
            matchKeyword(item, activeWisataSearch, ['name', 'description', 'address', 'district'])
        );
    }

    // B. Apply City Area Filter
    if (activeWisataCity !== 'All') {
        filtered = filtered.filter(item => 
            matchFilter(item, 'city', activeWisataCity)
        );
    }

    // C. Apply Category Filter
    if (activeWisataCategory !== 'All') {
        filtered = filtered.filter(item => 
            matchFilter(item, 'category', activeWisataCategory)
        );
    }

    renderList(filtered, 'wisata-grid', createWisataCard);
    initScrollReveal();
}

// 5. KULINER PAGE Setup
let activeKulinerSearch = '';
let activeKulinerOrigin = 'All';

function initKulinerPage() {
    filterAndRenderKuliner();

    // Bind Search Input
    initSearch('#search-input', (query) => {
        activeKulinerSearch = query;
        filterAndRenderKuliner();
    });

    // Bind Origin Selection Dropdown
    const originSelect = document.getElementById('origin-filter-select');
    if (originSelect) {
        originSelect.addEventListener('change', (e) => {
            activeKulinerOrigin = e.target.value;
            filterAndRenderKuliner();
        });
    }
}

function filterAndRenderKuliner() {
    let filtered = kulinerData;

    // A. Apply Search
    if (activeKulinerSearch) {
        filtered = filtered.filter(item => 
            matchKeyword(item, activeKulinerSearch, ['name', 'description', 'recommendedArea'])
        );
    }

    // B. Apply Origin
    if (activeKulinerOrigin !== 'All') {
        filtered = filtered.filter(item => 
            matchFilter(item, 'origin', activeKulinerOrigin)
        );
    }

    renderList(filtered, 'kuliner-grid', createKulinerCard);
    initScrollReveal();
}

// 6. TRANSPORTASI PAGE Setup
function initTransportasiPage() {
    renderList(transportasiData, 'transport-list', createTransitCard);
    initScrollReveal();
}

// 7. GALLERY PAGE Setup
let activeGalleryCategory = 'All';

function initGalleryPage() {
    filterAndRenderGallery();

    // Bind Category Filter Tabs
    initFilterTabs('#gallery-filter-tabs', (categoryVal) => {
        activeGalleryCategory = categoryVal;
        filterAndRenderGallery();
    });
}

function filterAndRenderGallery() {
    let filtered = galleryData;

    if (activeGalleryCategory !== 'All') {
        filtered = filtered.filter(item => 
            matchFilter(item, 'category', activeGalleryCategory.toLowerCase())
        );
    }

    renderList(filtered, 'gallery-grid', createGalleryCard);
    initScrollReveal();
}

// 8. FAQ PAGE Setup
function initFaqPage() {
    renderList(faqData, 'faq-accordion', createFaqItem);
    initScrollReveal();
}

// Handles toggle expansion of FAQ questions
let openFaqIndex = null;
function toggleFaq(index) {
    const faqItems = document.querySelectorAll('#faq-accordion .faq-item');
    if (faqItems.length === 0 || !faqItems[index]) return;

    const currentItem = faqItems[index];
    const trigger = currentItem.querySelector('.faq-trigger');
    const panel = currentItem.querySelector('.faq-panel');
    const icon = trigger ? trigger.querySelector('.faq-icon') : null;

    if (!panel || !icon) return;

    if (openFaqIndex !== null && openFaqIndex !== index) {
        const prevItem = faqItems[openFaqIndex];
        const prevPanel = prevItem.querySelector('.faq-panel');
        const prevIcon = prevItem.querySelector('.faq-icon');

        if (prevPanel) {
            prevPanel.style.maxHeight = '0px';
            prevPanel.style.borderTopColor = 'transparent';
        }
        if (prevIcon) {
            prevIcon.textContent = '＋';
            prevIcon.style.transform = 'rotate(0deg)';
        }
    }

    const isClosed = panel.style.maxHeight === '0px' || panel.style.maxHeight === '';
    if (isClosed) {
        panel.style.maxHeight = panel.scrollHeight + 'px';
        panel.style.borderTopColor = 'var(--border)';
        icon.textContent = '－';
        icon.style.transform = 'rotate(180deg)';
        openFaqIndex = index;
    } else {
        panel.style.maxHeight = '0px';
        panel.style.borderTopColor = 'transparent';
        icon.textContent = '＋';
        icon.style.transform = 'rotate(0deg)';
        openFaqIndex = null;
    }
}

// 9. ABOUT PAGE Setup
function initAboutPage() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic inputs check
            const name = document.getElementById('contact-name').value.trim();
            const email = document.getElementById('contact-email').value.trim();
            const msg = document.getElementById('contact-msg').value.trim();
            const statusBox = document.getElementById('form-status');

            if (!name || !email || !msg) {
                statusBox.style.color = '#EF4444';
                statusBox.textContent = "Harap isi semua kolom input form.";
                return;
            }

            const storageKey = 'infojakarta-contact-submissions';
            let submissions = [];

            try {
                submissions = JSON.parse(localStorage.getItem(storageKey) || '[]');
            } catch (error) {
                submissions = [];
            }

            submissions.push({
                name,
                email,
                message: msg,
                submittedAt: new Date().toISOString()
            });

            localStorage.setItem(storageKey, JSON.stringify(submissions));

            statusBox.style.color = '#10B981';
            statusBox.innerHTML = `Pesan Anda berhasil disimpan di perangkat ini. Terima kasih atas dukungannya.<span style="display:block; margin-top:6px; color:var(--text-secondary);">Total kiriman tersimpan: ${submissions.length}</span>`;

            contactForm.reset();

            setTimeout(() => {
                statusBox.textContent = "";
            }, 5000);
        });
    }

    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
    initScrollReveal();
}
