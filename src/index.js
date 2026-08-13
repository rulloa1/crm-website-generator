const fs = require('fs')
const path = require('path')
const { escapeHtml } = require('./templates/escape')

function sanitizeForHtml(value) {
  if (Array.isArray(value)) return value.map(sanitizeForHtml)

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, nestedValue]) => [key, sanitizeForHtml(nestedValue)])
    )
  }

  return typeof value === 'string' ? escapeHtml(value) : value
}

function validateConfig(config) {
  const requiredFields = [
    ['company.name', config?.company?.name],
    ['company.tagline', config?.company?.tagline],
    ['company.description', config?.company?.description],
    ['company.contact.email', config?.company?.contact?.email],
    ['company.contact.phone', config?.company?.contact?.phone],
    ['company.contact.address', config?.company?.contact?.address],
    ['theme.primaryColor', config?.theme?.primaryColor],
    ['theme.secondaryColor', config?.theme?.secondaryColor],
    ['theme.accentColor', config?.theme?.accentColor],
  ]

  for (const [field, value] of requiredFields) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error(`Missing required configuration field: ${field}`)
    }
  }

  if (!Array.isArray(config.features)) {
    throw new Error('Configuration field "features" must be an array')
  }

  if (!Array.isArray(config.services)) {
    throw new Error('Configuration field "services" must be an array')
  }
}

class CRMWebsiteGenerator {
  constructor(config) {
    validateConfig(config)
    this.config = sanitizeForHtml(config)
    this.outputDir = config.outputDir || './output'
  }

  generate() {
    console.log('Starting CRM Website Generation...')
    console.log(`Output directory: ${this.outputDir}`)

    if (!fs.existsSync(this.outputDir)) {
      fs.mkdirSync(this.outputDir, { recursive: true })
    }

    this.generateHomePage()
    this.generateContactPage()
    this.generateAboutPage()
    this.generateServicesPage()
    this.generateStylesheet()
    this.generateAssets()

    console.log('Website generation completed successfully!')
    console.log(`Output: ${path.resolve(this.outputDir)}`)
  }

  generateHomePage() {
    const template = require('./templates/home')
    const html = template.render(this.config)
    fs.writeFileSync(path.join(this.outputDir, 'index.html'), html)
    console.log('  Generated index.html')
  }

  generateContactPage() {
    const template = require('./templates/contact')
    const html = template.render(this.config)
    fs.writeFileSync(path.join(this.outputDir, 'contact.html'), html)
    console.log('  Generated contact.html')
  }

  generateAboutPage() {
    const template = require('./templates/about')
    const html = template.render(this.config)
    fs.writeFileSync(path.join(this.outputDir, 'about.html'), html)
    console.log('  Generated about.html')
  }

  generateServicesPage() {
    const template = require('./templates/services')
    const html = template.render(this.config)
    fs.writeFileSync(path.join(this.outputDir, 'services.html'), html)
    console.log('  Generated services.html')
  }

  generateStylesheet() {
    const styles = require('./templates/styles')
    const css = styles.render(this.config)
    const cssDir = path.join(this.outputDir, 'css')
    if (!fs.existsSync(cssDir)) {
      fs.mkdirSync(cssDir, { recursive: true })
    }
    fs.writeFileSync(path.join(cssDir, 'styles.css'), css)
    console.log('  Generated css/styles.css')
  }

  generateAssets() {
    const assetsDir = path.join(this.outputDir, 'assets')
    if (!fs.existsSync(assetsDir)) {
      fs.mkdirSync(assetsDir, { recursive: true })
    }
    console.log('  Created assets directory')
  }
}

if (require.main === module) {
  const configPath = process.argv[2] || './config/default.json'

  try {
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    const generator = new CRMWebsiteGenerator(config)
    generator.generate()
  } catch (error) {
    console.error('Error:', error.message)
    console.log('\nUsage: node src/index.js [config-file]')
    console.log('Example: node src/index.js config/default.json')
    process.exit(1)
  }
}

module.exports = CRMWebsiteGenerator
