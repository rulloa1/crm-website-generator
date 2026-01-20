# Configuration Schema

This document describes the structure of the configuration file used by the CRM Website Generator.

## Configuration Object

```json
{
  "company": {
    "name": "string",
    "tagline": "string",
    "description": "string",
    "contact": {
      "email": "string",
      "phone": "string",
      "address": "string"
    }
  },
  "theme": {
    "primaryColor": "string (hex color)",
    "secondaryColor": "string (hex color)",
    "accentColor": "string (hex color)"
  },
  "features": [
    {
      "title": "string",
      "description": "string"
    }
  ],
  "services": [
    {
      "name": "string",
      "description": "string",
      "features": ["string"],
      "price": "string"
    }
  ],
  "outputDir": "string (default: ./output)"
}
```

## Field Descriptions

### Company
- **name**: Your company name
- **tagline**: A catchy tagline for your homepage
- **description**: Brief description of your company
- **contact**: Contact information displayed in the footer and contact page
  - **email**: Contact email address
  - **phone**: Contact phone number
  - **address**: Physical address

### Theme
Color scheme for the website:
- **primaryColor**: Main brand color (used for headers, buttons, etc.)
- **secondaryColor**: Secondary color (used for gradients and accents)
- **accentColor**: Accent color (used for highlights and CTAs)

### Features
Array of feature objects displayed on the homepage:
- **title**: Feature name
- **description**: Brief description of the feature

### Services
Array of service/pricing plan objects:
- **name**: Service or plan name
- **description**: Description of the service
- **features**: Array of feature strings
- **price**: Price string (e.g., "$99/month" or "Contact Us")

### Output
- **outputDir**: Directory where generated files will be saved (default: ./output)
