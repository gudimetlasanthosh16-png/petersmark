// Toggle dropdown menu
document.addEventListener('DOMContentLoaded', () => {
    // Dropdown functionality
    const dropdownToggle = document.getElementById('projectsBtn');
    const dropdown = document.querySelector('.dropdown');
    const dropdownContent = document.getElementById('projectsDropdown');
    
    if (dropdownToggle && dropdownContent) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdownContent.classList.toggle('show');
            dropdown.classList.toggle('active');
        });

        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdownContent.classList.remove('show');
                dropdown.classList.remove('active');
            }
        });
    }
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form handling with mailto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Create mailto URL
            const mailtoURL = `mailto:petersmark1607@gmail.com?subject=Contact from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
            
            // Open default email client
            window.location.href = mailtoURL;
            
            // Clear the form
            this.reset();
        });
    }

    // Split animation for site title
    const siteTitle = document.querySelector('.site-title');
    if (siteTitle) {
        setTimeout(() => {
            siteTitle.classList.add('animate');
        }, 100);
    }
});
