// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Apply dynamic theming based on URL parameters
    applyDynamicTheming();
    
    function applyDynamicTheming() {
        const urlParams = new URLSearchParams(window.location.search);
        const company = urlParams.get('company');
        const theme = urlParams.get('theme');
        const originalUrl = urlParams.get('url');
        const includeMerge = urlParams.get('includeMerge') === 'true';
        
        if (company && theme) {
            // Update company branding
            updateCompanyBranding(company);
            
            // Apply theme colors
            applyThemeColors(theme);
            
            // Handle Merge branding
            handleMergeBranding(includeMerge);
        }
    }
    
    function updateCompanyBranding(company) {
        // Update logo text
        const logoTexts = document.querySelectorAll('.logo-text');
        logoTexts.forEach(logoText => {
            logoText.textContent = company;
        });
        
        // Update page title
        document.title = `${company} HRIS Connector - Seamless HR Data Integration`;
        
        // Update footer text
        const footerLogo = document.querySelector('.footer-logo span');
        if (footerLogo) {
            footerLogo.textContent = `${company} HRIS Connector`;
        }
        
        // Update powered by text
        const poweredBy = document.querySelector('.powered-by strong');
        if (poweredBy) {
            poweredBy.textContent = company;
        }
    }
    
    function applyThemeColors(theme) {
        const root = document.documentElement;
        
        // Theme color mappings
        const themes = {
            anthropic: {
                '--primary-color': '#1a1a1a',
                '--background-color': '#f5f4f0',
                '--accent-color': '#e67e22',
                '--secondary-bg': '#ebe9e4',
                '--card-bg': '#ffffff',
                '--border-color': '#e8e6e0',
                '--text-primary': '#1a1a1a',
                '--text-secondary': '#6a6a6a'
            },
            box: {
                '--primary-color': '#0061d5',
                '--background-color': '#f8f9ff',
                '--accent-color': '#0047ab',
                '--secondary-bg': '#e8f2ff',
                '--card-bg': '#ffffff',
                '--border-color': '#d1e7ff',
                '--text-primary': '#1a1a1a',
                '--text-secondary': '#4a5568'
            },
            fifteenfive: {
                '--primary-color': '#6c5ce7',
                '--background-color': '#f8f7ff',
                '--accent-color': '#a29bfe',
                '--secondary-bg': '#e8e6ff',
                '--card-bg': '#ffffff',
                '--border-color': '#d4d1f9',
                '--text-primary': '#1a1a1a',
                '--text-secondary': '#6a6a6a'
            },
            slack: {
                '--primary-color': '#4a154b',
                '--background-color': '#f8f8f8',
                '--accent-color': '#e01e5a',
                '--secondary-bg': '#f4ede4',
                '--card-bg': '#ffffff',
                '--border-color': '#e8e6e0',
                '--text-primary': '#1a1a1a',
                '--text-secondary': '#6a6a6a'
            },
            default: {
                '--primary-color': '#1a1a1a',
                '--background-color': '#f5f4f0',
                '--accent-color': '#e67e22',
                '--secondary-bg': '#ebe9e4',
                '--card-bg': '#ffffff',
                '--border-color': '#e8e6e0',
                '--text-primary': '#1a1a1a',
                '--text-secondary': '#6a6a6a'
            }
        };
        
        const themeColors = themes[theme] || themes.default;
        
        // Apply CSS variables
        Object.entries(themeColors).forEach(([property, value]) => {
            root.style.setProperty(property, value);
        });
        
        // Add theme class to body for additional styling if needed
        document.body.className = `theme-${theme}`;
    }
    
    function handleMergeBranding(includeMerge) {
        const poweredByElement = document.querySelector('.powered-by');
        
        if (includeMerge) {
            // Show "Powered by Merge" if checkbox was checked
            if (poweredByElement) {
                poweredByElement.innerHTML = '<span>Powered by</span><strong>Merge</strong>';
                poweredByElement.style.display = 'flex';
            }
        } else {
            // Hide the "Powered by" section if checkbox was unchecked
            if (poweredByElement) {
                poweredByElement.style.display = 'none';
            }
        }
    }
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed header
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.feature-card, .step, .testimonial-content, .integration-visual');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Header scroll effect
    let lastScrollY = window.scrollY;
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        const currentScrollY = window.scrollY;

        if (currentScrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    });

    // Button hover effects
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-demo');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });

        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Demo button functionality
    const demoButtons = document.querySelectorAll('.btn-demo, .btn-primary');
    demoButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.toLowerCase().includes('demo') || 
                this.textContent.toLowerCase().includes('started') ||
                this.textContent.toLowerCase().includes('schedule')) {
                e.preventDefault();
                showDemoModal();
            }
        });
    });

    // Simple demo modal
    function showDemoModal() {
        const modal = document.createElement('div');
        modal.className = 'demo-modal';
        modal.innerHTML = `
            <div class="modal-overlay">
                <div class="modal-content">
                    <h3>Schedule Your Demo</h3>
                    <p>Thank you for your interest! Our team will contact you shortly to schedule a personalized demo of our HRIS Connector.</p>
                    <form class="demo-form">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Work Email" required>
                        <input type="text" placeholder="Company Name" required>
                        <button type="submit" class="btn-primary">Schedule Demo</button>
                    </form>
                    <button class="modal-close">&times;</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Close modal functionality
        modal.querySelector('.modal-close').addEventListener('click', () => {
            modal.remove();
        });

        modal.querySelector('.modal-overlay').addEventListener('click', (e) => {
            if (e.target === modal.querySelector('.modal-overlay')) {
                modal.remove();
            }
        });

        // Form submission
        modal.querySelector('.demo-form').addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you! We\'ll be in touch soon to schedule your demo.');
            modal.remove();
        });

        // Animate modal in
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const heroHeight = hero.offsetHeight;
        
        if (scrolled < heroHeight) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Counter animation for stats (if you want to add stats later)
    function animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        const range = end - start;

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const current = Math.floor(start + range * progress);
            element.textContent = current.toLocaleString();

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Add typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});

// Add CSS for animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    .demo-modal {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .demo-modal.show {
        opacity: 1;
    }

    .modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }

    .modal-content {
        background: white;
        padding: 40px;
        border-radius: 16px;
        max-width: 500px;
        width: 100%;
        position: relative;
        transform: translateY(20px);
        transition: transform 0.3s ease;
    }

    .demo-modal.show .modal-content {
        transform: translateY(0);
    }

    .modal-close {
        position: absolute;
        top: 16px;
        right: 20px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #999;
        transition: color 0.2s ease;
    }

    .modal-close:hover {
        color: #333;
    }

    .demo-form {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-top: 24px;
    }

    .demo-form input {
        padding: 12px 16px;
        border: 2px solid #e5e5e5;
        border-radius: 8px;
        font-size: 16px;
        transition: border-color 0.2s ease;
    }

    .demo-form input:focus {
        outline: none;
        border-color: #1a1a1a;
    }

    .fade-in {
        animation: fadeInUp 0.6s ease forwards;
    }

    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .header.scrolled {
        background-color: rgba(254, 254, 254, 0.98);
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
    }

    .feature-card, .step, .testimonial-content, .integration-visual {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .feature-card.fade-in, .step.fade-in, .testimonial-content.fade-in, .integration-visual.fade-in {
        opacity: 1;
        transform: translateY(0);
    }

    @media (max-width: 768px) {
        .modal-content {
            padding: 24px;
            margin: 20px;
        }
        
        .hero {
            transform: none !important;
        }
    }
`;

document.head.appendChild(style);
