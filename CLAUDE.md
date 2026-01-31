# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with this codebase.

## Project Overview

CRM Website Generator is a Node.js static site generator that creates professional, responsive websites for CRM businesses from JSON configuration files. It has zero external dependencies and uses pure Node.js.

## Key Commands

```bash
# Generate website with default config
npm start

# Generate website with custom config
node src/index.js config/mycompany.json

# Alternative commands
npm run generate
node src/index.js [config-file-path]
```

## Project Structure

```
src/
├── index.js              # Main generator class (CRMWebsiteGenerator)
└── templates/
    ├── home.js           # Homepage template
    ├── about.js          # About page template
    ├── services.js       # Services page template
    ├── contact.js        # Contact page template
    └── styles.js         # CSS stylesheet template

config/
├── default.json          # Default configuration
├── schema.md             # Configuration schema documentation
└── examples/             # Example configurations
    ├── consulting.json
    └── tech-startup.json

output/                   # Generated website (git-ignored)
```

## Architecture

- **CRMWebsiteGenerator class** (`src/index.js`): Main entry point that loads config and orchestrates page generation
- **Template modules** (`src/templates/*.js`): Each exports a `render(config)` function returning HTML/CSS strings
- **Configuration**: JSON files define company info, theme colors, features, and services

## Development Guidelines

- No external runtime dependencies - keep it pure Node.js
- Templates return plain HTML strings with embedded config values
- Color values should be valid hex codes (e.g., `#2563eb`)
- Generated output goes to `outputDir` (default: `./output`)
- Node.js 14.0.0+ required

## Configuration Structure

Key config sections:
- `company`: name, tagline, description, contact info
- `theme`: primaryColor, secondaryColor, accentColor (hex values)
- `features`: array of {title, description} for homepage
- `services`: array of {name, description, features[], price}
- `outputDir`: output directory path
