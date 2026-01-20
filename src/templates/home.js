function render(config) {
  const { company, theme, features } = config;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${company.name} - ${company.tagline}</title>
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="container">
                <div class="logo">
                    <h1>${company.name}</h1>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html" class="active">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>${company.tagline}</h1>
                <p class="subtitle">${company.description}</p>
                <a href="contact.html" class="btn btn-primary">Get Started</a>
            </div>
        </section>

        <section class="features">
            <div class="container">
                <h2>Why Choose Us</h2>
                <div class="feature-grid">
                    ${features.map(feature => `
                    <div class="feature-card">
                        <h3>${feature.title}</h3>
                        <p>${feature.description}</p>
                    </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="cta">
            <div class="container">
                <h2>Ready to Transform Your Business?</h2>
                <p>Contact us today and discover how our CRM solutions can help you grow.</p>
                <a href="contact.html" class="btn btn-secondary">Contact Us</a>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>${company.name}</h3>
                    <p>${company.description}</p>
                </div>
                <div class="footer-section">
                    <h3>Contact</h3>
                    <p>Email: ${company.contact.email}</p>
                    <p>Phone: ${company.contact.phone}</p>
                    <p>Address: ${company.contact.address}</p>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; ${new Date().getFullYear()} ${company.name}. All rights reserved.</p>
            </div>
        </div>
    </footer>
</body>
</html>`;
}

module.exports = { render };
