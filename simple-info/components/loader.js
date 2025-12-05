// Component Loader
// This script loads header and footer components into pages

(function() {
    'use strict';

    // Function to load a component
    function loadComponent(componentName, targetElementId) {
        const targetElement = document.getElementById(targetElementId);
        if (!targetElement) {
            console.warn(`Target element with id "${targetElementId}" not found`);
            return;
        }

        fetch(`components/${componentName}.html`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to load ${componentName}: ${response.statusText}`);
                }
                return response.text();
            })
            .then(html => {
                targetElement.innerHTML = html;
                
                // Re-initialize any scripts that need to run after component load
                // For example, if you have dropdown menus or other interactive elements
                if (typeof bootstrap !== 'undefined') {
                    // Reinitialize Bootstrap components if needed
                }
                
                // Set active navigation item based on current page
                setActiveNavItem();
            })
            .catch(error => {
                console.error(`Error loading ${componentName}:`, error);
                targetElement.innerHTML = `<p style="color: red;">Error loading ${componentName}</p>`;
            });
    }

    // Set active navigation item based on current page
    function setActiveNavItem() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            const dataPage = link.getAttribute('data-page');
            
            // Check if this link matches the current page
            let isActive = false;
            
            // First check data-page attribute
            if (dataPage) {
                if (currentPage === `${dataPage}.html` || 
                    (currentPage === '' && dataPage === 'index') ||
                    (currentPage === 'index.html' && dataPage === 'index')) {
                    isActive = true;
                }
            }
            
            // Fallback: check href attribute
            if (!isActive && href && href !== '#' && !href.startsWith('#')) {
                const linkPage = href.split('/').pop();
                if (linkPage === currentPage || 
                    (currentPage === '' && linkPage === 'index.html') ||
                    (currentPage === 'index.html' && linkPage === 'index.html')) {
                    isActive = true;
                }
            }
            
            if (isActive) {
                link.classList.add('active');
            }
        });
    }

    // Load components when DOM is ready
    document.addEventListener('DOMContentLoaded', function() {
        // Load header if header-container exists
        if (document.getElementById('header-container')) {
            loadComponent('header', 'header-container');
        }

        // Load footer if footer-container exists
        if (document.getElementById('footer-container')) {
            loadComponent('footer', 'footer-container');
        }
    });
})();

