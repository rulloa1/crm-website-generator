const fs = require('fs');
const path = require('path');

class CRMWebsiteGenerator {
  constructor(config) {
    this.config = config;
    this.outputDir = config.outputDir || './output';
  }

  generate() {
    console.log('🚀 Starting CRM Website Generation...');
    console.log(`📁 Output directory: ${this.outputDir}`);

    // Create output directory if it doesn't exist
    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true });
    }

    // Generate pages
    this.generateHomePage();
    this.generateContactPage();
    this.generateAboutPage();
    this.generateServicesPage();
    this.generateStylesheet();
    this.generateAssets();

    console.log('✅ Website generation completed successfully!');
    console.log(`📂 Output: ${path.resolve(this.outputDir)}`);
  }

  generateHomePage() {
    const template = require('./templates/home');
    const html = template.render(this.config);
    fs.writeFileSync(path.join(this.outputDir, 'index.html'), html);
    console.log('  ✓ Generated index.html');
  }

  generateContactPage() {
    const template = require('./templates/contact');
    const html = template.render(this.config);
    fs.writeFileSync(path.join(this.outputDir, 'contact.html'), html);
    console.log('  ✓ Generated contact.html');
  }

  generateAboutPage() {
    const template = require('./templates/about');
    const html = template.render(this.config);
    fs.writeFileSync(path.join(this.outputDir, 'about.html'), html);
    console.log('  ✓ Generated about.html');
  }

  generateServicesPage() {
    const template = require('./templates/services');
    const html = template.render(this.config);
    fs.writeFileSync(path.join(this.outputDir, 'services.html'), html);
    console.log('  ✓ Generated services.html');
  }

  generateStylesheet() {
    const styles = require('./templates/styles');
    const css = styles.render(this.config);
    const cssDir = path.join(this.outputDir, 'css');
    if (!fs.existsSync(cssDir)) {
      fs.mkdirSync(cssDir, { recursive: true });
    }
    fs.writeFileSync(path.join(cssDir, 'styles.css'), css);
    console.log('  ✓ Generated css/styles.css');
  }

  generateAssets() {
    const assetsDir = path.join(this.outputDir, 'assets');
    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true });
    }
    console.log('  ✓ Created assets directory');
  }
}

// Main execution
if (require.main === module) {
  const configPath = process.argv[2] || './config/default.json';

  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
    const generator = new CRMWebsiteGenerator(config);
    generator.generate();
  } catch (error) {
    console.error('❌ Error:', error.message);
    console.log('\nUsage: node src/index.js [config-file]');
    console.log('Example: node src/index.js config/default.json');
    process.exit(1);
  }
}

module.exports = CRMWebsiteGenerator;
