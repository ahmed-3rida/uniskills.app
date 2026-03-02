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

    /* --- 3. Intersection Observer (Reveal Animations) --- */
    const revealElements = document.querySelectorAll('.reveal-up');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);

        // Fallback for older browsers
        setTimeout(() => {
            if (!el.classList.contains('active')) {
                el.classList.add('active');
            }
        }, 1500);
    });

    /* --- 5. Swiper Initialization --- */
    const initSwiper = () => {
        if (typeof Swiper !== 'undefined' && document.querySelector('.showcase-swiper')) {
            new Swiper('.showcase-swiper', {
                effect: 'coverflow',
                grabCursor: false, // Disabled for hands-off experience
                allowTouchMove: false, // Disabled manual dragging
                centeredSlides: true,
                slidesPerView: 'auto',
                loop: true,
                initialSlide: 0,
                speed: 1200, // Slightly slower transition for premium feel
                autoplay: {
                    delay: 2000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                },
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: false,
                },
                observer: true,
                observeParents: true,
                watchSlidesProgress: true,
            });
        }
    };

    /* --- 6. AOS Initialization --- */
    const initAOS = () => {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                once: true,
                offset: 50,
                disable: false,
                startEvent: 'DOMContentLoaded',
            });
            // Force a refresh after a small delay to catch any layout changes
            setTimeout(() => AOS.refresh(), 500);
        }
    };

    /* --- 7. Execution & Layout Fixes --- */
    window.addEventListener('load', () => {
        // Delay swiper init slightly to ensure DOM and styles are fully stable
        setTimeout(initSwiper, 100);
        initAOS();
    });

    // Also refresh on orientation change for mobile
    window.addEventListener('orientationchange', () => {
        setTimeout(() => {
            if (typeof AOS !== 'undefined') {
                AOS.refresh();
            }
        }, 500);
    });
});
