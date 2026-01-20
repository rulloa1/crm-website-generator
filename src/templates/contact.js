function render(config) {
  const { company } = config;

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - ${company.name}</title>
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
                    <li><a href="services.html">Services</a></li>
                    <li><a href="contact.html" class="active">Contact</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="page-header">
            <div class="container">
                <h1>Contact Us</h1>
                <p>Get in touch with our team</p>
            </div>
        </section>

        <section class="content-section">
            <div class="container">
                <div class="contact-wrapper">
                    <div class="contact-info">
                        <h2>Get In Touch</h2>
                        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

                        <div class="contact-details">
                            <div class="contact-item">
                                <h3>Email</h3>
                                <p>${company.contact.email}</p>
                            </div>
                            <div class="contact-item">
                                <h3>Phone</h3>
                                <p>${company.contact.phone}</p>
                            </div>
                            <div class="contact-item">
                                <h3>Address</h3>
                                <p>${company.contact.address}</p>
                            </div>
                            <div class="contact-item">
                                <h3>Business Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p>Saturday - Sunday: Closed</p>
                            </div>
                        </div>
                    </div>

                    <div class="contact-form-wrapper">
                        <form class="contact-form" action="#" method="POST">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject" required>
                            </div>
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Send Message</button>
                        </form>
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
