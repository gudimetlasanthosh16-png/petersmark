// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM fully loaded, initializing theme...');
    
    // Get the theme toggle button and text elements
    const themeToggle = document.getElementById('themeToggle');
    
    // Function to update the theme
    function setTheme(theme) {
        console.log('Setting theme to:', theme);
        
        // Set the theme attribute on the HTML element
        document.documentElement.setAttribute('data-theme', theme);
        
        // Save the user's preference to localStorage
        localStorage.setItem('theme', theme);
        
        // Get fresh references to the elements each time
        const themeText = document.querySelector('.theme-text');
        const sunIcon = document.querySelector('.theme-toggle .sun');
        const moonIcon = document.querySelector('.theme-toggle .moon');
        
        // Update the button text if the element exists
        if (themeText) {
            themeText.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        }
        
        // Toggle the active class on the sun/moon icons
        if (sunIcon && moonIcon) {
            if (theme === 'dark') {
                sunIcon.style.display = 'inline-block';
                moonIcon.style.display = 'none';
            } else {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline-block';
            }
        }
    }
    
    // Function to initialize the theme
    function initTheme() {
        // Check for saved user preference, if any, on load
        const savedTheme = localStorage.getItem('theme');
        
        if (savedTheme) {
            console.log('Found saved theme preference:', savedTheme);
            setTheme(savedTheme);
        } else {
            // If no saved preference, check system preference
            const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
            const systemTheme = prefersDarkScheme.matches ? 'dark' : 'light';
            console.log('No saved theme, using system preference:', systemTheme);
            setTheme(systemTheme);
        }
    }
    
    // Initialize the theme
    initTheme();
    
    // Add click event listener to the theme toggle button
    if (themeToggle) {
        console.log('Theme toggle button found, adding click event listener');
        themeToggle.addEventListener('click', function() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            console.log('Toggling theme from', currentTheme, 'to', newTheme);
            setTheme(newTheme);
            
            // Force a re-render to ensure all styles are applied
            document.body.offsetHeight;
        });
    } else {
        console.error('Theme toggle button not found!');
    }
});
