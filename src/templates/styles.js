function render(config) {
  const { theme } = config;

  return `/* CRM Website Generator - Generated Styles */

/* CSS Reset & Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: ${theme.primaryColor};
    --secondary-color: ${theme.secondaryColor};
    --accent-color: ${theme.accentColor};
    --text-color: #333;
    --bg-color: #ffffff;
    --light-bg: #f8f9fa;
    --border-color: #e0e0e0;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background-color: var(--bg-color);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Header & Navigation */
header {
    background-color: var(--primary-color);
    color: white;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.navbar {
    padding: 1rem 0;
}

.navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    color: white;
    font-size: 1.8rem;
}

.nav-links {
    display: flex;
    list-style: none;
    gap: 2rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    transition: opacity 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
    opacity: 0.8;
    border-bottom: 2px solid white;
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 6rem 0;
    text-align: center;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero .subtitle {
    font-size: 1.3rem;
    margin-bottom: 2rem;
    opacity: 0.9;
}

/* Buttons */
.btn {
    display: inline-block;
    padding: 12px 30px;
    border-radius: 5px;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s;
    border: none;
    cursor: pointer;
}

.btn-primary {
    background-color: white;
    color: var(--primary-color);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.btn-secondary {
    background-color: var(--accent-color);
    color: white;
}

.btn-secondary:hover {
    background-color: var(--secondary-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* Features Section */
.features {
    padding: 4rem 0;
}

.features h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: var(--primary-color);
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.feature-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

/* Call to Action */
.cta {
    background-color: var(--light-bg);
    padding: 4rem 0;
    text-align: center;
}

.cta h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
}

.cta p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
}

/* Page Header */
.page-header {
    background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
    color: white;
    padding: 4rem 0;
    text-align: center;
}

.page-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

/* Content Sections */
.content-section {
    padding: 4rem 0;
}

.content-section.bg-light {
    background-color: var(--light-bg);
}

.content-section h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
}

.content-section p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1rem;
}

/* Values Grid */
.values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.value-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    border-left: 4px solid var(--primary-color);
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.value-card h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

/* Services Grid */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 2rem;
}

.service-card {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    border-top: 4px solid var(--primary-color);
}

.service-card h3 {
    color: var(--primary-color);
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.service-features {
    list-style: none;
    margin: 1rem 0;
}

.service-features li {
    padding: 0.5rem 0;
    padding-left: 1.5rem;
    position: relative;
}

.service-features li:before {
    content: "✓";
    color: var(--accent-color);
    position: absolute;
    left: 0;
    font-weight: bold;
}

.service-price {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--primary-color);
    margin-top: 1rem;
}

/* Contact Section */
.contact-wrapper {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 3rem;
    margin-top: 2rem;
}

.contact-details {
    margin-top: 2rem;
}

.contact-item {
    margin-bottom: 2rem;
}

.contact-item h3 {
    color: var(--primary-color);
    margin-bottom: 0.5rem;
}

.contact-form-wrapper {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: var(--text-color);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: 4px;
    font-size: 1rem;
    font-family: inherit;
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
}

/* Footer */
footer {
    background-color: #2c3e50;
    color: white;
    padding: 3rem 0 1rem;
    margin-top: 4rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-section h3 {
    margin-bottom: 1rem;
}

.footer-section p {
    margin-bottom: 0.5rem;
    opacity: 0.9;
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 1rem;
    text-align: center;
    opacity: 0.8;
}

/* Responsive Design */
@media (max-width: 768px) {
    .navbar .container {
        flex-direction: column;
        gap: 1rem;
    }

    .nav-links {
        gap: 1rem;
    }

    .hero h1 {
        font-size: 2rem;
    }

    .hero .subtitle {
        font-size: 1.1rem;
    }

    .contact-wrapper {
        grid-template-columns: 1fr;
    }
}
`;
}

module.exports = { render };
