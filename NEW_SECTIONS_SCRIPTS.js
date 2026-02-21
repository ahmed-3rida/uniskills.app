// ==================== FAQ Accordion ====================
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe testimonial cards
document.querySelectorAll('.testimonial-card').forEach(card => {
    observer.observe(card);
});

// Observe exam preview card
document.querySelectorAll('.exam-preview-card').forEach(card => {
    observer.observe(card);
});

// Observe FAQ items
document.querySelectorAll('.faq-item').forEach(item => {
    observer.observe(item);
});

// ==================== Countdown Timer (Placeholder) ====================
// This is a placeholder countdown. You can set a specific date when exams will be available
function updateCountdown() {
    // For now, just show placeholder values
    // You can replace this with actual countdown logic when you have a launch date
    const countdownValues = document.querySelectorAll('.countdown-value');
    countdownValues.forEach(value => {
        value.textContent = '--';
    });
}

// Call once on load
updateCountdown();

// Optional: Update every second if you implement real countdown
// setInterval(updateCountdown, 1000);

// ==================== Smooth Scroll for CTA Buttons ====================
document.querySelectorAll('.cta-inline a').forEach(link => {
    link.addEventListener('click', (e) => {
        // Add a subtle animation on click
        link.style.transform = 'scale(0.95)';
        setTimeout(() => {
            link.style.transform = '';
        }, 150);
    });
});
