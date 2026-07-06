/**
 * InfoJakarta - Animation & Interactive Effects Engine
 * Manages scroll-reveals, count-up numeric counters, and hero carousel intervals.
 * Designed for easy reading and explanation by second-semester students.
 */

// 1. Scroll-Triggered Fade-In Animations (Intersection Observer)
function initScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');
    
    // Check if IntersectionObserver is supported
    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    // Stop observing once animation has played
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px' // Trigger slightly before element is in full view
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('active'));
    }
}

// 2. Statistics Counter Animation
function animateStatsCounter() {
    const counters = document.querySelectorAll('.stat-counter');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetNumber = parseInt(target.getAttribute('data-target'), 10);
                const suffix = target.getAttribute('data-suffix') || '';
                const duration = 1500; // Total count-up duration in ms
                const frameDuration = 1000 / 60; // 60fps frame rate
                const totalFrames = Math.round(duration / frameDuration);
                let frame = 0;

                const countInterval = setInterval(() => {
                    frame++;
                    const progress = frame / totalFrames;
                    // Ease-out-quad function for natural deceleration
                    const easedProgress = progress * (2 - progress);
                    const currentCount = Math.round(targetNumber * easedProgress);

                    if (target.dataset.format === 'population') {
                        target.innerText = currentCount.toLocaleString('id-ID') + suffix;
                    } else {
                        target.innerText = currentCount + suffix;
                    }

                    if (frame === totalFrames) {
                        clearInterval(countInterval);
                        if (target.dataset.format === 'population') {
                            target.innerText = targetNumber.toLocaleString('id-ID') + suffix;
                        } else {
                            target.innerText = targetNumber + suffix;
                        }
                    }
                }, frameDuration);

                // Stop observing after animate triggers
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
}

// 3. Home Hero Slider Controller
let sliderInterval = null;
let currentSlideIndex = 0;

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const dotsContainer = document.getElementById('hero-dots');
    const nextBtn = document.querySelector('.hero-arrow-right');
    const prevBtn = document.querySelector('.hero-arrow-left');
    
    if (slides.length === 0) return;

    // Create pagination dots
    dotsContainer.innerHTML = '';
    slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `hero-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Pindah ke slide ${idx + 1}`);
        dot.addEventListener('click', () => {
            goToSlide(idx);
            resetSlideInterval();
        });
        dotsContainer.appendChild(dot);
    });

    // Arrow buttons triggers
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetSlideInterval();
        });
    }
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetSlideInterval();
        });
    }

    // Auto loop interval
    startSlideInterval();

    function goToSlide(index) {
        slides[currentSlideIndex].classList.remove('active');
        document.querySelectorAll('.hero-dot')[currentSlideIndex].classList.remove('active');
        
        currentSlideIndex = (index + slides.length) % slides.length;
        
        slides[currentSlideIndex].classList.add('active');
        document.querySelectorAll('.hero-dot')[currentSlideIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide(currentSlideIndex + 1);
    }

    function prevSlide() {
        goToSlide(currentSlideIndex - 1);
    }

    function startSlideInterval() {
        sliderInterval = setInterval(nextSlide, 6000); // 6 seconds loop
    }

    function resetSlideInterval() {
        clearInterval(sliderInterval);
        startSlideInterval();
    }
}
