/* ==========================================================================
   1. MOBILE NAVIGATION TOGGLE
   ========================================================================== */
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Optional: Animate hamburger lines into an 'X' shape
    hamburger.classList.toggle('open');
});

// Close mobile menu when clicking any nav link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

/* ==========================================================================
   2. FAQ ACCORDION INTERACTION
   ========================================================================== */
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');

    header.addEventListener('click', () => {
        // Check if the clicked item is already active
        const isActive = item.classList.contains('active');

        // Optional: Close all other accordion items (uncomment if you want only one open at a time)
        // accordionItems.forEach(otherItem => otherItem.classList.remove('active'));

        // Toggle current item
        if (!isActive) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});