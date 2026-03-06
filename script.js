/**
 * UniSkills Premium Landing Page Script
 * Lightweight, Performant, Smooth Animations
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Navbar Scroll Effect & Mobile Menu --- */
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Scroll effect using Intersection Observer for better performance (avoids forced reflows)
    const navSentinel = document.createElement('div');
    navSentinel.style.position = 'absolute';
    navSentinel.style.top = '50px';
    navSentinel.style.height = '1px';
    navSentinel.style.width = '1px';
    navSentinel.style.pointerEvents = 'none';
    navSentinel.style.visibility = 'hidden';
    document.body.prepend(navSentinel);

    const navObserver = new IntersectionObserver((entries) => {
        if (!entries[0].isIntersecting) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { threshold: 0 });

    navObserver.observe(navSentinel);

    // Mobile Menu Toggle
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        // Toggle icon between hamburger and close
        if (mobileMenu.classList.contains('active')) {
            menuBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>`;
        } else {
            menuBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>`;
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            menuBtn.innerHTML = `
            <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>`;
        });
    });

    /* --- 2. Smooth Scrolling for Anchor Links --- */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    /* --- 3. Intersection Observer (Scroll Animations) --- */
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Once animated, no need to keep observing
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    const initReveal = () => {
        document.querySelectorAll('.reveal').forEach(el => {
            revealObserver.observe(el);
        });
    };

    /* --- 5. Swiper Lazy Loading & Initialization --- */
    let swiperLoaded = false;
    const initSwiper = () => {
        if (typeof Swiper !== 'undefined' && document.querySelector('.showcase-swiper')) {
            new Swiper('.showcase-swiper', {
                effect: 'coverflow',
                grabCursor: true,
                allowTouchMove: true,
                centeredSlides: true,
                slidesPerView: 'auto',
                loop: true,
                initialSlide: 0,
                speed: 1000,
                autoplay: {
                    delay: 4000,
                    disableOnInteraction: true,
                    pauseOnMouseEnter: true,
                },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                },
                scrollbar: {
                    el: '.swiper-scrollbar',
                    draggable: true,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
            });
        }
    };

    const loadSwiperAssets = () => {
        if (swiperLoaded) return;
        swiperLoaded = true;

        // Dynamic CSS Injection
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = 'vendor/swiper/swiper-bundle.min.css';
        document.head.appendChild(link);

        // Dynamic JS Injection
        const script = document.createElement('script');
        script.src = 'vendor/swiper/swiper-bundle.min.js';
        script.onload = () => {
            setTimeout(initSwiper, 100);
        };
        document.body.appendChild(script);
    };

    const swiperObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            loadSwiperAssets();
            swiperObserver.disconnect();
        }
    }, { rootMargin: '200px' });

    const setupSwiperLazyLoad = () => {
        const swiperSection = document.getElementById('preview');
        if (swiperSection) {
            swiperObserver.observe(swiperSection);
        }
    };

    /* --- 6. AOS Initialization (Removed) --- */
    // Removed as per request

    /* --- 7. Execution & Layout Fixes --- */
    window.addEventListener('load', () => {
        setupSwiperLazyLoad();
        initReveal();
    });

    /* --- 8. Image Protection --- */
    document.addEventListener('contextmenu', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
        }
    }, false);

    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('dragstart', (e) => e.preventDefault());
    });

});
