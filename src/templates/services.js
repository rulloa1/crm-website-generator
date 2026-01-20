function render(config) {
  const { company, services } = config;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Services - ${company.name}</title>
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
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="services.html" class="active">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="page-header">
            <div class="container">
                <h1>Our Services</h1>
                <p>Comprehensive CRM solutions tailored to your needs</p>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="services-grid">
                    ${services.map(service => `
                    <div class="service-card">
                        <h3>${service.name}</h3>
                        <p>${service.description}</p>
                        <ul class="service-features">
                            ${service.features.map(feature => `
                            <li>${feature}</li>
                            `).join('')}
                        </ul>
                        <p class="service-price">${service.price}</p>
                    </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section class="cta">
            <div class="container">
                <h2>Interested in Our Services?</h2>
                <p>Get in touch to learn more about how we can help your business.</p>
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
