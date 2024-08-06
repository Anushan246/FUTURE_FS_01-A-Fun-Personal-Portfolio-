document.addEventListener('DOMContentLoaded', () => {
    // Header fade-in animation
    const header = document.querySelector('header');
    header.style.opacity = 0;

    let opacity = 0;
    const fadeIn = () => {
        opacity += 0.1;
        header.style.opacity = opacity;
        if (opacity < 1) {
            requestAnimationFrame(fadeIn);
        }
    };
    fadeIn();

    // Project description toggle
    const projects = document.querySelectorAll('.project');
    
    projects.forEach(project => {
        const title = project.querySelector('h3');
        const description = project.querySelector('p');
        
        description.style.display = 'none';
        
        title.addEventListener('click', () => {
            if (description.style.display === 'none') {
                description.style.display = 'block';
            } else {
                description.style.display = 'none';
            }
        });
    });

    // Certificate search functionality
    const certificates = document.querySelectorAll('.certificate');
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search certificates...';
    const certificatesSection = document.querySelector('#certificates');
    if (certificatesSection) {
        certificatesSection.insertBefore(searchInput, certificatesSection.querySelector('.certificates-container'));

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            certificates.forEach(cert => {
                const text = cert.textContent.toLowerCase();
                cert.style.display = text.includes(searchTerm) ? 'block' : 'none';
            });
        });
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Optional: Add a back-to-top button
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
