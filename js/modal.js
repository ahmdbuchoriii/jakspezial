/**
 * InfoJakarta - Modal Popup Controller
 * Manages modal overlays, dynamic contents, and district drilldowns.
 * Designed for easy reading and explanation by second-semester students.
 */

// Global reference for active modal elements
let activeModal = null;

// Bind Escape key to close any active modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeActiveModal();
    }
});

// Close active modal
function closeActiveModal() {
    if (!activeModal) return;
    
    activeModal.classList.remove('open');
    document.body.classList.remove('modal-open');
    
    // Clear inner content after animation finishes
    setTimeout(() => {
        const container = activeModal.querySelector('.modal-container');
        if (container) container.innerHTML = '';
    }, 200);
    
    activeModal = null;
}

// Check if clicking outside container closes modal
function handleBackdropClick(e) {
    if (e.target.classList.contains('modal-overlay')) {
        closeActiveModal();
    }
}

// 1. Open Wisata Modal
function openWisataModal(id) {
    const item = wisataData.find(w => w.id === id);
    if (!item) return;

    const overlay = document.getElementById('detail-modal');
    if (!overlay) return;

    const container = overlay.querySelector('.modal-container');
    container.innerHTML = `
        <button class="modal-close" onclick="closeActiveModal()" aria-label="Tutup modal">✕</button>
        <div class="modal-scrollable">
            <div class="modal-img-wrapper">
                <img src="${item.photo}" alt="${item.name}" class="modal-img">
            </div>
            <div class="modal-body">
                <div class="modal-header-info">
                    <span class="modal-label">${item.category}</span>
                    <h2 class="modal-title">${item.name}</h2>
                    <p class="modal-subtitle">📍 ${item.address}</p>
                </div>
                
                <div class="modal-grid">
                    <div class="modal-content-left">
                        <h3 class="modal-section-title">Tentang Tempat Wisata</h3>
                        <p class="modal-text">${item.description}</p>
                    </div>
                    
                    <div class="modal-content-right">
                        <div class="modal-detail-card">
                            <ul class="modal-detail-list">
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Wilayah</span>
                                    <span class="modal-detail-val">${item.city}</span>
                                </li>
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Kecamatan</span>
                                    <span class="modal-detail-val">${item.district}</span>
                                </li>
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Harga Tiket</span>
                                    <span class="modal-detail-val">${item.ticketPrice}</span>
                                </li>
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Jam Operasional</span>
                                    <span class="modal-detail-val">${item.hours}</span>
                                </li>
                            </ul>
                        </div>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}" 
                           target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
                            Buka di Google Maps ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    overlay.classList.add('open');
    document.body.classList.add('modal-open');
    activeModal = overlay;
}

// 2. Open Kuliner Modal
function openKulinerModal(id) {
    const item = kulinerData.find(k => k.id === id);
    if (!item) return;

    const overlay = document.getElementById('detail-modal');
    if (!overlay) return;

    const container = overlay.querySelector('.modal-container');
    container.innerHTML = `
        <button class="modal-close" onclick="closeActiveModal()" aria-label="Tutup modal">✕</button>
        <div class="modal-scrollable">
            <div class="modal-img-wrapper">
                <img src="${item.photo}" alt="${item.name}" class="modal-img">
            </div>
            <div class="modal-body">
                <div class="modal-header-info">
                    <span class="modal-label">Kuliner Khas Betawi</span>
                    <h2 class="modal-title">${item.name}</h2>
                    <p class="modal-subtitle">🍽️ Makanan Tradisional Jakarta</p>
                </div>
                
                <div class="modal-grid">
                    <div class="modal-content-left">
                        <h3 class="modal-section-title">Deskripsi Kuliner</h3>
                        <p class="modal-text">${item.description}</p>
                    </div>
                    
                    <div class="modal-content-right">
                        <div class="modal-detail-card">
                            <ul class="modal-detail-list">
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Asal Daerah</span>
                                    <span class="modal-detail-val">${item.origin}</span>
                                </li>
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Estimasi Harga</span>
                                    <span class="modal-detail-val" style="color: var(--primary-hover); font-weight: 700;">${item.priceRange}</span>
                                </li>
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Rekomendasi Tempat</span>
                                    <span class="modal-detail-val">${item.recommendedArea}</span>
                                </li>
                            </ul>
                        </div>
                        <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}" 
                           target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="width: 100%;">
                            Cari Penjual Terdekat ↗
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;

    overlay.classList.add('open');
    document.body.classList.add('modal-open');
    activeModal = overlay;
}

// 3. Open City Modal (with Districts & Kelurahans selector)
function openCityModal(cityId) {
    const city = citiesData.find(c => c.id === cityId);
    if (!city) return;

    const overlay = document.getElementById('detail-modal');
    if (!overlay) return;

    const container = overlay.querySelector('.modal-container');
    container.innerHTML = `
        <button class="modal-close" onclick="closeActiveModal()" aria-label="Tutup modal">✕</button>
        <div class="modal-scrollable">
            <div class="modal-img-wrapper">
                <img src="${city.photo}" alt="${city.name}" class="modal-img">
            </div>
            <div class="modal-body">
                <div class="modal-header-info">
                    <span class="modal-label">Kota Administratif</span>
                    <h2 class="modal-title">${city.name}</h2>
                    <p class="modal-subtitle">🏢 Kantor Walikota: ${city.office}</p>
                </div>
                
                <div class="modal-grid">
                    <div class="modal-content-left">
                        <h3 class="modal-section-title">Profil Singkat</h3>
                        <p class="modal-text">${city.description}</p>
                    </div>
                    
                    <div class="modal-content-right">
                        <div class="modal-detail-card" style="padding: 18px 24px;">
                            <ul class="modal-detail-list">
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Kepala Daerah</span>
                                    <span class="modal-detail-val">${city.leader}</span>
                                </li>
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Luas Wilayah</span>
                                    <span class="modal-detail-val">${city.area}</span>
                                </li>
                                <li class="modal-detail-item">
                                    <span class="modal-detail-label">Populasi</span>
                                    <span class="modal-detail-val">${city.population}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- Districts & Subdistricts Drilldown Section -->
                <div class="modal-admin-selector">
                    <h3 class="modal-section-title">Daftar Kecamatan & Kelurahan</h3>
                    <div class="selector-grid">
                        <div class="selector-box">
                            <span class="selector-title">Kecamatan (${city.districtsCount})</span>
                            <div class="selector-list-wrapper" id="modal-districts-list">
                                ${Object.keys(city.districts).map(dist => `
                                    <div class="selector-item" data-district="${dist}" onclick="selectDistrict(this, '${cityId}')">
                                        ${dist}
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                        <div class="selector-box">
                            <span class="selector-title">Daftar Kelurahan</span>
                            <div class="selector-list-wrapper" id="modal-subdistricts-list">
                                <div class="empty-placeholder">Silakan pilih kecamatan di samping terlebih dahulu</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    overlay.classList.add('open');
    document.body.classList.add('modal-open');
    activeModal = overlay;
}

// Handles selecting a district to display its kelurahans
function selectDistrict(element, cityId) {
    const listWrapper = element.parentElement;
    // Remove selected state from other list items
    listWrapper.querySelectorAll('.selector-item').forEach(item => {
        item.classList.remove('selected');
    });

    // Add selected state
    element.classList.add('selected');

    const districtName = element.dataset.district;
    const city = citiesData.find(c => c.id === cityId);
    if (!city || !city.districts[districtName]) return;

    const subdistrictsList = document.getElementById('modal-subdistricts-list');
    const kelurahans = city.districts[districtName];
    
    subdistrictsList.innerHTML = kelurahans.map(kel => `
        <div class="selector-item" style="cursor: default; background: none;">
            • ${kel}
        </div>
    `).join('');
}

// 4. Open Gallery Lightbox
function openGalleryZoom(id) {
    const item = galleryData.find(g => g.id === id);
    if (!item) return;

    const overlay = document.getElementById('detail-modal');
    if (!overlay) return;

    const container = overlay.querySelector('.modal-container');
    container.innerHTML = `
        <button class="modal-close" onclick="closeActiveModal()" aria-label="Tutup modal" style="background-color: rgba(0,0,0,0.5); border-color: rgba(255,255,255,0.2); color: #FFF; right: 10px; top: 10px;">✕</button>
        <div class="gallery-zoom-container" style="background-color: transparent; border: none; outline: none; display: flex; flex-direction: column; align-items: center; padding: 20px;">
            <img src="${item.photo}" alt="${item.title}" class="gallery-zoom-img" style="max-width: 100%; max-height: 75vh; object-fit: contain; border-radius: var(--border-radius); border: 1px solid rgba(255,255,255,0.1);">
            <div class="gallery-zoom-caption" style="color: #FFF; font-family: var(--font-heading); text-align: center; margin-top: 16px; display: block;">
                <h3 style="font-size: 18px; color: #FFF; font-weight: 600; margin-bottom: 4px;">${item.title}</h3>
                <p style="font-size: 13.5px; color: var(--secondary); margin: 0;">${item.caption}</p>
            </div>
        </div>
    `;

    overlay.classList.add('open');
    // Add additional helper classes to styling overlay for dark gallery background
    overlay.classList.add('gallery-zoom-overlay');
    
    // Custom cleanup on close
    const originalClose = closeActiveModal;
    closeActiveModal = function() {
        overlay.classList.remove('gallery-zoom-overlay');
        originalClose();
        closeActiveModal = originalClose; // restore original pointer
    };

    document.body.classList.add('modal-open');
    activeModal = overlay;
}
