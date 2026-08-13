const assert = require('assert')
const fs = require('fs')
const os = require('os')
const path = require('path')
const CRMWebsiteGenerator = require('../src')

function loadDefaultConfig() {
  return JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'config', 'default.json'), 'utf8')
  )
}

function run() {
  const temporaryRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'crm-website-generator-'))

  try {
    const config = loadDefaultConfig()
    config.outputDir = path.join(temporaryRoot, 'generated')
    config.company.name = '<script>alert("xss")</script>'
    config.features[0].title = 'Feature <b>markup</b>'
    config.services[0].features[0] = 'Plan <img src=x>'

    const generator = new CRMWebsiteGenerator(config)
    generator.generate()

    const expectedFiles = [
      'index.html',
      'contact.html',
      'about.html',
      'services.html',
      path.join('css', 'styles.css'),
    ]

    for (const file of expectedFiles) {
      assert.ok(fs.existsSync(path.join(config.outputDir, file)), `Expected ${file} to be generated`)
    }

    assert.ok(fs.existsSync(path.join(config.outputDir, 'assets')))

    for (const page of expectedFiles.filter((file) => file.endsWith('.html'))) {
      const pagePath = path.join(config.outputDir, page)
      const pageContents = fs.readFileSync(pagePath, 'utf8')
      const referenceMatcher = /\b(?:href|src)="([^"]+)"/g
      let match

      while ((match = referenceMatcher.exec(pageContents))) {
        const reference = match[1]
        if (/^(?:[a-z]+:|#)/i.test(reference)) continue

        assert.ok(
          fs.existsSync(path.resolve(path.dirname(pagePath), reference)),
          `Expected generated reference ${reference} in ${page} to exist`
        )
      }
    }

    const indexHtml = fs.readFileSync(path.join(config.outputDir, 'index.html'), 'utf8')
    const servicesHtml = fs.readFileSync(path.join(config.outputDir, 'services.html'), 'utf8')

    assert.ok(indexHtml.includes('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;'))
    assert.ok(indexHtml.includes('Feature &lt;b&gt;markup&lt;/b&gt;'))
    assert.ok(servicesHtml.includes('Plan &lt;img src=x&gt;'))
    assert.ok(!indexHtml.includes('<script>alert("xss")</script>'))

    const invalidConfig = loadDefaultConfig()
    invalidConfig.company.contact.email = ''
    assert.throws(
      () => new CRMWebsiteGenerator(invalidConfig),
      /Missing required configuration field: company\.contact\.email/
    )

    console.log('CRM Website Generator regression checks passed.')
  } finally {
    fs.rmSync(temporaryRoot, { recursive: true, force: true })
  }
}

run()
