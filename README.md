# CRM Website Generator

A customizable static website generator for CRM (Customer Relationship Management) businesses. Generate professional, responsive websites with your own branding and content using simple JSON configuration.

## Features

- **Easy Configuration**: Define your company details, colors, and content in a simple JSON file
- **Responsive Design**: Mobile-friendly websites that look great on all devices
- **Professional Templates**: Pre-built pages including Home, About, Services, and Contact
- **Customizable Themes**: Easily change colors to match your brand
- **No Dependencies**: Pure Node.js implementation with zero external dependencies
- **Fast Generation**: Create a complete website in seconds

## Quick Start

### Prerequisites

- Node.js 14.0.0 or higher

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd crm-website-generator
```

2. Install dependencies (if any):
```bash
npm install
```

### Usage

1. **Create or customize a configuration file**

   Copy the default configuration and modify it:
   ```bash
   cp config/default.json config/mycompany.json
   ```

   Edit `config/mycompany.json` with your company details.

2. **Generate your website**

   ```bash
   npm start
   # or
   node src/index.js
   ```

   By default, this uses `config/default.json`.

   To use a custom configuration:
   ```bash
   node src/index.js config/mycompany.json
   ```

3. **View your website**

   Open `output/index.html` in your web browser.

## Configuration

The configuration file is a JSON file that defines your website content and styling. See `config/schema.md` for detailed documentation.

### Basic Example

```json
{
  "company": {
    "name": "Your Company",
    "tagline": "Your Tagline Here",
    "description": "Brief company description",
    "contact": {
      "email": "info@yourcompany.com",
      "phone": "+1 (555) 123-4567",
      "address": "123 Main St, City, State 12345"
    }
  },
  "theme": {
    "primaryColor": "#2563eb",
    "secondaryColor": "#1e40af",
    "accentColor": "#10b981"
  },
  "outputDir": "./output"
}
```

See `config/default.json` for a complete example.

## Project Structure

```
crm-website-generator/
├── config/
│   ├── default.json          # Default configuration
│   └── schema.md             # Configuration schema documentation
├── src/
│   ├── index.js              # Main generator script
│   └── templates/
│       ├── home.js           # Homepage template
│       ├── about.js          # About page template
│       ├── services.js       # Services page template
│       ├── contact.js        # Contact page template
│       └── styles.js         # CSS styles template
├── output/                   # Generated website files (git-ignored)
├── package.json
└── README.md
```

## Generated Website Structure

The generator creates the following structure in your output directory:

```
output/
├── index.html               # Homepage
├── about.html              # About page
├── services.html           # Services page
├── contact.html            # Contact page
├── css/
│   └── styles.css          # Stylesheet
└── assets/                 # Assets directory (for images, etc.)
```

## Customization

### Colors

Change the theme colors in your configuration file:

```json
"theme": {
  "primaryColor": "#your-primary-color",
  "secondaryColor": "#your-secondary-color",
  "accentColor": "#your-accent-color"
}
```

### Content

Modify the company information, features, and services arrays in your configuration file to match your business.

### Templates

Advanced users can modify the templates in `src/templates/` to change the structure and layout of pages.

## Examples

### Example 1: Tech Startup

```bash
# Create a configuration for a tech startup
node src/index.js config/examples/tech-startup.json
```

### Example 2: Consulting Firm

```bash
# Create a configuration for a consulting firm
node src/index.js config/examples/consulting.json
```

## Tips

1. **Start with the default**: Begin with `config/default.json` and modify it incrementally
2. **Test your colors**: Use online color pickers to find colors that match your brand
3. **Keep it simple**: Don't overcomplicate your content - clear and concise is best
4. **Preview changes**: Regenerate and preview after each change to see the results

## Troubleshooting

### "Cannot find module" error

Make sure you're running the command from the project root directory.

### Colors not showing correctly

Ensure your color values are valid hex codes (e.g., `#2563eb`).

### Configuration errors

Validate your JSON syntax using a JSON validator. Common issues:
- Missing commas between array items
- Trailing commas (not allowed in JSON)
- Unescaped quotes in strings

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

MIT License - see LICENSE file for details

## Support

For questions or issues, please open an issue on GitHub.
