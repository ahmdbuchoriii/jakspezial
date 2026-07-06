/**
 * InfoJakarta - DOM Render Engine
 * Generates semantic HTML layouts dynamically based on JavaScript data stores.
 * Designed for easy reading and explanation by second-semester students.
 */

function resolveAssetPath(assetPath) {
    if (!assetPath) return '';
    if (/^(https?:|data:|mailto:|#|javascript:)/i.test(assetPath)) {
        return assetPath;
    }

    const normalizedPath = assetPath.replace(/^\.\//, '').replace(/^\.\.\//, '');
    const isPagesSubpage = window.location.pathname.includes('/pages/');
    return isPagesSubpage ? `../${normalizedPath}` : `./${normalizedPath}`;
}

function getImageFallback() {
    return resolveAssetPath('../assets/images/hero/skyline.jpg');
}

// 1. Wisata (Tourist Attractions) Card Generator
function createWisataCard(item) {
    return `
        <article class="card reveal" data-id="${item.id}">
            <div class="card-img-wrapper">
                <img src="${resolveAssetPath(item.photo)}" alt="${item.name}" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='${getImageFallback()}';">
                <span class="badge badge-primary card-badge">${item.category}</span>
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${item.description}</p>
                <ul class="card-meta-list">
                    <li class="card-meta-item">
                        <span class="card-meta-icon">📍</span>
                        <span>${item.city} (${item.district})</span>
                    </li>
                    <li class="card-meta-item">
                        <span class="card-meta-icon">💵</span>
                        <span>${item.ticketPrice}</span>
                    </li>
                    <li class="card-meta-item">
                        <span class="card-meta-icon">⏰</span>
                        <span>${item.hours}</span>
                    </li>
                </ul>
                <div class="card-actions">
                    <button class="btn btn-secondary btn-detail" onclick="openWisataModal(${item.id})">Detail</button>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}" 
                       target="_blank" rel="noopener noreferrer" class="btn btn-accent-border">Rute</a>
                </div>
            </div>
        </article>
    `;
}

// 2. Kuliner (Betawi Foods) Card Generator
function createKulinerCard(item) {
    return `
        <article class="card reveal" data-id="${item.id}">
            <div class="card-img-wrapper">
                <img src="${resolveAssetPath(item.photo)}" alt="${item.name}" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='${getImageFallback()}';">
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="food-price">${item.priceRange}</p>
                <p class="card-desc">${item.description}</p>
                <ul class="card-meta-list">
                    <li class="card-meta-item">
                        <span class="card-meta-icon">📍</span>
                        <span>Asal: ${item.origin}</span>
                    </li>
                    <li class="card-meta-item">
                        <span class="card-meta-icon">🍽️</span>
                        <span>Rekomendasi: ${item.recommendedArea}</span>
                    </li>
                </ul>
                <div class="card-actions">
                    <button class="btn btn-secondary btn-detail" onclick="openKulinerModal(${item.id})">Detail</button>
                    <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.mapsQuery)}" 
                       target="_blank" rel="noopener noreferrer" class="btn btn-accent-border">Temukan</a>
                </div>
            </div>
        </article>
    `;
}

// 3. Administrative Cities (Kota Administratif) Card Generator
function createCityCard(item) {
    return `
        <article class="card city-card reveal" data-id="${item.id}">
            <div class="card-img-wrapper">
                <img src="${resolveAssetPath(item.photo)}" alt="${item.name}" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='${getImageFallback()}';">
            </div>
            <div class="card-body">
                <h3 class="card-title">${item.name}</h3>
                <p class="card-desc">${item.description}</p>
                
                <div class="city-stats-row">
                    <div class="city-stat">
                        <span class="city-stat-label">Luas Wilayah</span>
                        <span class="city-stat-val">${item.area}</span>
                    </div>
                    <div class="city-stat">
                        <span class="city-stat-label">Populasi</span>
                        <span class="city-stat-val">${item.population}</span>
                    </div>
                    <div class="city-stat">
                        <span class="city-stat-label">Kecamatan</span>
                        <span class="city-stat-val">${item.districtsCount}</span>
                    </div>
                    <div class="city-stat">
                        <span class="city-stat-label">Kelurahan</span>
                        <span class="city-stat-val">${item.subdistrictsCount}</span>
                    </div>
                </div>

                <ul class="card-meta-list" style="margin-bottom: 24px;">
                    <li class="card-meta-item">
                        <span class="card-meta-icon">👤</span>
                        <span>Pemimpin: ${item.leader}</span>
                    </li>
                    <li class="card-meta-item">
                        <span class="card-meta-icon">🏢</span>
                        <span>Kantor: ${item.office}</span>
                    </li>
                </ul>
                
                <div class="card-actions">
                    <button class="btn btn-primary" style="width: 100%;" onclick="openCityModal('${item.id}')">
                        Lihat Wilayah Kecamatan & Kelurahan
                    </button>
                </div>
            </div>
        </article>
    `;
}

// 4. Transportation Card Generator
function createTransitCard(item) {
    return `
        <article class="card transit-card reveal" id="transit-${item.id}">
            <div class="card-img-wrapper transit-img-wrapper">
                <img src="${resolveAssetPath(item.logo)}" alt="${item.name}" class="card-img" style="object-fit: cover;" loading="lazy" onerror="this.onerror=null; this.src='${getImageFallback()}';">
            </div>
            <div class="transit-body">
                <h3 class="card-title" style="font-size: 20px; margin-bottom: 6px;">${item.name}</h3>
                <div class="badge badge-primary" style="align-self: flex-start; margin-bottom: 16px;">⏱️ Jam Operasional: ${item.hours}</div>
                <p class="card-desc" style="margin-bottom: 24px; display: block; overflow: visible; -webkit-line-clamp: unset;">
                    ${item.description}
                </p>
                <div class="card-actions" style="max-width: 220px;">
                    <a href="${item.website}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                        Situs Resmi ↗
                    </a>
                </div>
            </div>
        </article>
    `;
}

// 5. Gallery Photo Item Generator
function createGalleryCard(item) {
    return `
        <div class="gallery-card reveal" onclick="openGalleryZoom(${item.id})">
            <img src="${resolveAssetPath(item.photo)}" alt="${item.title}" class="gallery-img" loading="lazy" onerror="this.onerror=null; this.src='${getImageFallback()}';">
            <div class="gallery-overlay">
                <h3 class="gallery-title">${item.title}</h3>
                <span class="gallery-cat">${item.category}</span>
            </div>
        </div>
    `;
}

// 6. FAQ Accordion Item Generator
function createFaqItem(item, index) {
    return `
        <div class="faq-item reveal" data-index="${index}" style="border: 1px solid var(--border); border-radius: var(--border-radius); background-color: var(--bg-card); overflow: hidden; margin-bottom: 16px;">
            <button class="faq-trigger" type="button" data-index="${index}" onclick="toggleFaq(${index})" style="width: 100%; display: flex; align-items: center; justify-content: space-between; padding: 20px 24px; background: none; border: none; outline: none; cursor: pointer; text-align: left; transition: background-color var(--transition-fast);">
                <span style="font-family: var(--font-heading); font-size: 15px; font-weight: 600; color: var(--text-primary); padding-right: 20px;">
                    ${item.question}
                </span>
                <span class="faq-icon" style="font-size: 16px; color: var(--primary); transition: transform var(--transition-fast);">＋</span>
            </button>
            <div class="faq-panel" style="max-height: 0; overflow: hidden; transition: max-height 0.3s ease-out; border-top: 1px solid transparent;">
                <div style="padding: 20px 24px; font-size: 14.5px; color: var(--text-secondary); line-height: 1.6; background-color: var(--bg-primary);">
                    ${item.answer}
                </div>
            </div>
        </div>
    `;
}

// Render Core Orchestrators
function renderList(data, containerId, generatorFn) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (data.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: var(--text-secondary);">
                <p style="font-size: 15px;">Tidak ada data yang ditemukan.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = data.map((item, index) => generatorFn(item, index)).join('');
}
