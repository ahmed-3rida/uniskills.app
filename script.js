/**
 * UniSkills Premium Landing Page Script
 * Lightweight, Performant, Smooth Animations
 */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Navbar Scroll Effect & Mobile Menu --- */
    const navbar = document.getElementById('navbar');
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Scroll Event
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

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

    /* --- 3. Intersection Observer (Removed Animation) --- */
    // Animations removed as per user request to ensure immediate visibility

    /* --- 5. Swiper Initialization --- */
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

    /* --- 6. AOS Initialization (Removed) --- */
    const initAOS = () => {
        // Removed as per request
    };

    /* --- 7. Execution & Layout Fixes --- */
    window.addEventListener('load', () => {
        // Delay swiper init slightly to ensure DOM and styles are fully stable
        setTimeout(initSwiper, 100);
        initAOS();
    });

    // Also refresh on orientation change for mobile
    // Orientation change handling (if needed for other things in future)
    window.addEventListener('orientationchange', () => {
        // Reserved for layout recalcs if necessary
    });
});
