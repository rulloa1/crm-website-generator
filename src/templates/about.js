function render(config) {
  const { company } = config;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About - ${company.name}</title>
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
                    <li><a href="about.html" class="active">About</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="page-header">
            <div class="container">
                <h1>About Us</h1>
                <p>Learn more about our mission and values</p>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <h2>Our Story</h2>
                <p>${company.description}</p>
                <p>We are dedicated to providing the best CRM solutions to help businesses manage their customer relationships effectively. Our team of experts works tirelessly to ensure your success.</p>
            </div>
        </section>

        <section class="content-section bg-light">
            <div class="container">
                <h2>Our Mission</h2>
                <p>To empower businesses with cutting-edge CRM technology that drives growth, enhances customer satisfaction, and streamlines operations.</p>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <h2>Our Values</h2>
                <div class="values-grid">
                    <div class="value-card">
                        <h3>Innovation</h3>
                        <p>We constantly evolve and adapt to bring you the latest technology.</p>
                    </div>
                    <div class="value-card">
                        <h3>Integrity</h3>
                        <p>We conduct business with honesty and transparency.</p>
                    </div>
                    <div class="value-card">
                        <h3>Excellence</h3>
                        <p>We strive for excellence in everything we do.</p>
                    </div>
                    <div class="value-card">
                        <h3>Customer Focus</h3>
                        <p>Your success is our success.</p>
                    </div>
                </div>
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
